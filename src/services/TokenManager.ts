import { BrokerName } from "../enum/BrokerName";
import { UserRepository } from "../repositories/UserRepository";
import { Token } from "../models/Token";
import { TokenRepository } from "../repositories/TokenRepository";
import { BrokerAdapterFactory } from "../adapters/BrokerAdapterFactory";

export class TokenManager {
    private tokenRepo: TokenRepository;
    private userRepo: UserRepository;

    constructor(userRepo: UserRepository, tokenRepo: TokenRepository) {
        this.userRepo = userRepo;
        this.tokenRepo = tokenRepo;
    }

    async getToken(userId: string, brokerName: BrokerName): Promise<Token> {
        try {
            if(!this.userRepo.hasUser(userId)) {
                throw new Error("Invalid userId");
            }
            const token = this.tokenRepo.getToken(userId, brokerName);
            if(!token) {
                const newToken = await this.fetchNewToken(userId, brokerName);
                return newToken;
            } 
            if (token.expiry && Date.now() > token.expiry) {
                console.log("Token expired, fetching new one...");
                return await this.fetchNewToken(userId, brokerName);
            }
            return token;

        } catch(error) {
            console.error("Error while fetching token:", error.message || error);
            throw new Error(`Failed to fetch token for user: ${userId}, Broker: ${brokerName}`);
        }
    }

    async fetchNewToken(userId: string, brokerName: BrokerName): Promise<Token> {
        //login and fetch new token and save it in tokenRepo and return token.accessToken
        try{
            const adapter = BrokerAdapterFactory.getAdapter(brokerName);
            const accessToken = await adapter.login(userId);
            const newToken: Token = {
                userId,
                brokerName,
                accessToken,
            };
            this.tokenRepo.saveToken(newToken);
            return newToken;
        } catch(error) {
            console.error("Error while login:", error.message || error);
            throw new Error(`Failed to login for user: ${userId}, Broker: ${brokerName}`);
        }
        
    }
}
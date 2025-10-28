import { TokenManager } from "./TokenManager";
import { BrokerName } from "../enum/BrokerName";
import { BrokerAdapterFactory } from "../adapters/BrokerAdapterFactory";
import { TradeService } from "./TradeService";
import { NormalizedTrade } from "../models/NormalizedTrade";
import { UserRepository } from "../repositories/UserRepository";
import { TokenRepository } from "../repositories/TokenRepository";


export class SyncService {
    private tradeService: TradeService;
    private userRepo: UserRepository;
    private tokenManager: TokenManager;

    constructor(userRepo: UserRepository, tokenRepo: TokenRepository) {
        this.userRepo = userRepo;
        this.tradeService = new TradeService();
        this.tokenManager = new TokenManager(userRepo, tokenRepo);
    }

    async syncTrades(userId: string, brokerName: BrokerName) : Promise<NormalizedTrade[]> {
        try{
            if(!this.userRepo.hasUser(userId)) throw new Error("Invalid userId");

            const adapter = BrokerAdapterFactory.getAdapter(brokerName);
            const accessToken = await this.tokenManager.getToken(userId, brokerName); 
            
            const rawTradeData = await adapter.fetchTrades(accessToken.accessToken);
            const trade = await this.tradeService.normalizeTrades(brokerName, rawTradeData);
            return trade;
        } catch(error) {
            console.error("Error while syncing trades:", error.message || error);
            throw new Error("Trade sync failed. Please try again later.");
        }
    }
}
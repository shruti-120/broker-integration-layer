import { BrokerName } from "../enum/BrokerName";
import { Token } from "../models/Token";

export class TokenRepository {
    private tokens = new Map<string, Token>();

    saveToken(token: Token) {
        const key = `${token.userId}-${token.brokerName}`;
        this.tokens.set(key, token);
    }

    getToken(userId: string, brokerName: BrokerName): Token | undefined {
        const key = `${userId}-${brokerName}`;
        return this.tokens.get(key);
    }

    removeToken(userId: string, brokerName: BrokerName): void {
        const key = `${userId}-${brokerName}`;
        this.tokens.delete(key);
    }
}

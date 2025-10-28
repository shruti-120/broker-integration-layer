import { NormalizedTrade } from "../models/NormalizedTrade";


export class TradeRepository {
    private trades = new Map<string, NormalizedTrade[]>();

    saveTrades(userId: string, trade: NormalizedTrade[]) {
        this.trades.set(userId, trade);
    }

    getAllTrades(userId: string): NormalizedTrade[] | undefined {
        return this.trades.get(userId);
    }

    clearTrades(userId: string): void {
        this.trades.delete(userId);
    }
}

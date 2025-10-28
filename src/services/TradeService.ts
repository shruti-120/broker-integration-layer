import { NormalizedTrade } from "../models/NormalizedTrade";
import { Normalizer } from "../normalizers/Normalizer";
import { ZerodhaNormalizer } from "../normalizers/ZerodhaNormalizer";
import { BrokerName } from "../enum/BrokerName";

export class TradeService {
    async normalizeTrades(brokerName: BrokerName, rawTrades: any): Promise<NormalizedTrade[]> {
        let normalizer;
        switch(brokerName) {
            case BrokerName.Zerodha:
                normalizer = new Normalizer(new ZerodhaNormalizer());
                break;
            default: 
                throw new Error(`No normalizer found for this broker: ${brokerName}`);
        }
        const normalizedTrades = normalizer.normalizeRawTrades(rawTrades);
        return normalizedTrades;
    }
}
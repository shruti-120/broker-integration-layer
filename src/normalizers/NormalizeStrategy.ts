import { NormalizedTrade } from "../models/NormalizedTrade";

export interface NormalizeStratgy {
    normalizeRawTrades(rawTrades: any): NormalizedTrade[];
}
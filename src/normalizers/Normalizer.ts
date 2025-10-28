import { NormalizedTrade } from "../models/NormalizedTrade";
import { NormalizeStratgy } from "./NormalizeStrategy";

export class Normalizer {
    private normalizerStrategy: NormalizeStratgy;

    constructor(normalizerStrategy: NormalizeStratgy) {
        this.normalizerStrategy = normalizerStrategy;
    }
    normalizeRawTrades(rawTrades: any): NormalizedTrade[] {
        return this.normalizerStrategy.normalizeRawTrades(rawTrades);
    }
}
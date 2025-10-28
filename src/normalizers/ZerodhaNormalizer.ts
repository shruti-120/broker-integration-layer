import { NormalizedTrade } from "../models/NormalizedTrade";
import { NormalizeStratgy } from "./NormalizeStrategy";

export class ZerodhaNormalizer implements NormalizeStratgy {
    normalizeRawTrades(rawTrades: any): NormalizedTrade[] {
        return rawTrades.map(raw => ({
            tradeId: raw.trade_id,
            orderId: raw.order_id,
            tradingSymbol: raw.tradingsymbol,
            transactionType: raw.transaction_type,
            quantity: raw.quantity,
            price: raw.average_price,
            averagePrice: raw.average_price,
            instrument_token: raw.instrument_token,
            product: raw.product,
            status: raw.status,
            exchange: raw.exchange,
            exchangeTradeId: raw.exchange_trade_id,
            exchangeOrderId: raw.exchange_order_id,
            tradeTimestamp: raw.fill_timestamp,
            exchangeTimestamp: raw.exchange_timestamp
        }));
    }
}
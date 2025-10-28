export interface NormalizedTrade {
    tradeId: string;
    orderId: string;
    tradingSymbol: string;
    transactionType: string;
    quantity: number;
    price: number;
    averagePrice?: number;
    instrumentToken?: string;
    product?: string;
    status?: string;
    exchange?: string;
    exchangeTradeId?: string;
    exchangeOrderId?: string;
    exchangeTimestamp?: string;
    tradeTimestamp?: string; // ISO format
    orderTimestamp?: string;
}
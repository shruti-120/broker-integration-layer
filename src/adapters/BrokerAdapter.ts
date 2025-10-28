export interface BrokerAdapter {
    fetchTrades(token: string): Promise<any>;
    login(userId: string): Promise<string>;
}
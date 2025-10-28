import { BrokerAdapter } from "./BrokerAdapter";
import { getMockTrades } from "../utils/MockTrades";
import axios from "axios";

export class ZerodhaAdapter implements BrokerAdapter {
    async fetchTrades(accessToken: string): Promise<any> {

        const apiUrl = process.env.GET_ALL_TRADE_URL;
        const apiKey = process.env.ZERODHA_API_KEY;

        try {
            if (process.env.MOCK_MODE === "true") {
                return getMockTrades();
            }
            if (!apiKey) throw new Error("Missing ZERODHA_API_KEY in environment");
            const response = await axios.get(apiUrl, {
                headers: {
                'X-Kite-Version': '3',
                'Authorization': `token ${apiKey}:${accessToken}`,
                },
            });
            return response.data.data;
        } catch(error) {
            if (axios.isAxiosError(error)) {     
            console.error('Axios Error:', error.message);
            if (error.response) {
                console.error('Response Data:', error.response.data);
                console.error('Response Status:', error.response.status);
            }
            } else {
            console.error('Unexpected Error:', error);
            }
            throw error;
        }
    }
    async login(userId: string): Promise<string> {
        try {

            const newToken = process.env.ACCESS_TOKEN;
            return newToken;

        } catch(error) {
            console.error("Error while login:", error.message || error);
            throw new Error(`Failed to login for user: ${userId}`);
        }
    }
}
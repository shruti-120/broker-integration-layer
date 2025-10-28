import { BrokerName } from "../enum/BrokerName";

export interface Token {
    userId: string;
    brokerName: BrokerName;
    accessToken: string;
    refreshToken?: string;
    expiry?: EpochTimeStamp;
}
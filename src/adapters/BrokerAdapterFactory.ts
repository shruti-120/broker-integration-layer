import { BrokerName } from "../enum/BrokerName";
import { ZerodhaAdapter } from "./ZerodhaAdapter";

export class BrokerAdapterFactory {
    static getAdapter(brokerName: BrokerName) {
        switch(brokerName) {
            case BrokerName.Zerodha:
                return new ZerodhaAdapter();
            default:
                throw new ErrorEvent("Invalid broker name.");
        }
    }
}
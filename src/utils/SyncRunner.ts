// syncRunner
import dotenv from 'dotenv';
dotenv.config();
import { BrokerName } from "../enum/BrokerName";
import { User } from "../models/User";
import { TokenRepository } from "../repositories/TokenRepository";
import { UserRepository } from "../repositories/UserRepository";
import { SyncService } from "../services/SyncService";

async function run() {
  const userRepo = new UserRepository();
  const tokenRepo = new TokenRepository();
  const syncService = new SyncService(userRepo, tokenRepo);

  try {
    // mock user
    const user = new User ("user123", "John", "Doe", "johndoe123@gmail.com")
    userRepo.addUser(user);

    const brokerName = BrokerName.Zerodha; 

    console.log("Starting trade sync for:", user.userId, brokerName);
    const trades = await syncService.syncTrades(user.userId, brokerName);
    console.log("Normalized Trades:", JSON.stringify(trades, null, 2));
    console.log("Sync completed successfully.");
  } catch (error) {
    console.error("Sync failed:", error);
  }
}

run();

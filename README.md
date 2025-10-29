# 🧠 Broker Integration Layer (Journalyst Backend Assignment)

This project implements a **Broker Integration Layer** for Journalyst’s trade journaling platform.  
It simulates one-way trade synchronization from a third-party broker (Zerodha) into a unified format.  
The focus is on **clean architecture, modularity, and scalability** for future broker integrations.

----------------------------------------------------------------------------------------------------------------------------

## 🚀 Features

- **Broker Adapter System** – Implements a reusable adapter interface for brokers (Zerodha included)
- **Trade Normalization** – Converts broker-specific trade data into a unified format
- **Token Management** – Simulates access token storage, validation, and refresh flow
- **Sync Execution Logic** – End-to-end `syncTrades(userId, brokerName)` that fetches, normalizes, and returns trades
- **Extensible Architecture** – Easily add new brokers with minimal code changes

----------------------------------------------------------------------------------------------------------------------------

## 🖼️ Architecture & UML

### Architecture Overview
<img width="425" height="392" alt="BrokerAdapterSystem" src="https://github.com/user-attachments/assets/84b8c082-92d2-4fc1-97e9-c9ecb11b2b64" />

### UML Diagram
<img width="755" height="441" alt="BrokerIntegrationLayer_UML" src="https://github.com/user-attachments/assets/973c09a6-8da7-4ec1-89c8-a570b8f5d0e0" />

🔗 **View full UML on Draw.io:**  
[View on Google Drive](https://drive.google.com/file/d/1JJhJMS-aCaua8ZgxWRVZknSM6xSAaFtB/view?usp=sharing)

----------------------------------------------------------------------------------------------------------------------------

🧩 Design Decisions

- Followed **Single Responsibility Principle (SRP)** and **Separation of Concerns** across services, normalizers, and utils
- Implemented **Adapter Pattern** for broker integration
- Implemented **Factory Pattern** for generating broker adapters
- Implemented **Strategy Pattern** for different broker normalization

----------------------------------------------------------------------------------------------------------------------------

## 🏗️ Project Structure
```
broker-integration-layer/
├── src/
│ ├── adapters/ # Broker-specific integration logic (e.g., ZerodhaAdapter)
│ ├── normalizers/ # Converts broker data into unified Trade format
│ ├── services/ # Handles token management and sync orchestration
│ ├── utils/ # Shared helper functions
│ |   ├──SyncRunner.ts # Application entry point
│ └── app.ts # Script to manually trigger trade sync
├── .env.example # Example environment configuration
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

----------------------------------------------------------------------------------------------------------------------------

## ⚙️ Setup Instructions

- **Clone the repository**
  ```bash
  git clone https://github.com/shruti-120/broker-integration-layer.git
  cd broker-integration-layer
  ```

- **Install dependencies**
  ```bash
  npm install
  ```

- **Configure environment variables**
  Create a `.env` file based on `.env.example`, then fill in your own values:
  Then fill in your own values:
  ```env
  GET_ALL_TRADE_URL=https://api.kite.trade/trades
  ZERODHA_API_KEY=<your_zerodha_api_key_here>
  ACCESS_TOKEN=<your_access_token_here>
  MOCK_MODE=true
  ```
  
- **Build and run**
  To build TypeScript and start the app:
  ```bash
  npm start
  ```
  To directly run the sync service:
  ```bash
  npm run sync
  ```

----------------------------------------------------------------------------------------------------------------------------

## 🔮 Resources Used:

- https://kite.trade/docs/connect/v3/user/#login-flow
- https://kite.trade/docs/connect/v3/user/#authentication-and-token-exchange
- https://kite.trade/docs/connect/v3/orders/#retrieving-all-trades
- https://groww.in/trade-api/docs/curl/orders#get-trades-for-order
- https://smartapi.angelbroking.com/docs/Orders
- https://dev.to/daniyarotynshin/design-pattern-strategy-ts-3e55
- https://medium.com/@diegomottadev/factory-method-pattern-implementation-using-typescript-and-node-js-6ac075967f22
- https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript

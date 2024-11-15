# Getting Started
Backend Repo for EBUDDY Technical Test

## Installation

```bash
npm install
```

## Credentials
Create firebase console account and get the credentials for the firebase admin sdk and add it to the `src/credentials` folder with the name `firebase-admin-sdk.json`

## Environment Variables
Create a `.env` file in the root directory and add the following variables
```bash
ENV= #environment variable default is development
PORT= #port number default is 8080
BEARER_TOKEN= #bearer token for authentication
```

## Run

```bash
# run all tests
npm test

# run all tests with coverage
npm run test:cov

# run all tests in watch mode
npm run test:watch

# run server
npm start

# run server in development mode
npm run dev
```
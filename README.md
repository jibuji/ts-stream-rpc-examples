# ts-stream-rpc Examples

This repository contains examples of how to use the `ts-stream-rpc` package.

## Installation

```bash
npm install
```

## Generate Service Code

```bash
npm run generate
```

## Build

```bash
npm run build
```

## Running the Calculator Example

1. Start the server:
```bash
npm run start:calculator-server
```

2. In another terminal, run the client:
```bash
npm run start:calculator-client
```

## Examples

### Calculator
A simple calculator service that demonstrates basic RPC functionality using WebSocket transport.

- Server: `src/calculator/server.ts`
- Client: `src/calculator/client.ts`
- Service Implementation: `src/calculator/services/calculator.ts` 
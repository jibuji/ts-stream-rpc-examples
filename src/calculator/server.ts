import { RpcPeer, WebSocketStream } from 'ts-stream-rpc';
import { WebSocket, WebSocketServer } from 'ws';
import { CalculatorService } from './services/calculator.js';
import { CalculatorWrapper } from './generated/calculator-service.js';

const wss = new WebSocketServer({ port: 8080 });
const service = new CalculatorService();
const wrapper = new CalculatorWrapper(service);

async function main() {

  wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected');
    const duplex = new WebSocketStream(ws);
    const peer = new RpcPeer(duplex);
    
    // Register service methods
    peer.registerService('Calculator', wrapper);

  }); 

  await new Promise(resolve => wss.on('listening', resolve));
  console.log('TypeScript Server: Listening on port 8080');
}

main().catch(console.error);

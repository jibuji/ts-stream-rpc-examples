import { RpcPeer, WebSocketStream } from 'ts-stream-rpc';
import WebSocket from 'ws';
import { CalculatorClient } from './generated/calculator-service';

async function main() {
  const ws = new WebSocket('ws://localhost:8080');
  // create a duplex stream from the websocket
  const duplex = new WebSocketStream(ws);
  const peer = new RpcPeer(duplex);
  const client = new CalculatorClient(peer);

  // Wait for connection
  await new Promise((resolve) => ws.once('open', resolve));
  

  try {
    const result = await client.add({ a: 5, b: 3 });
    console.log('5 + 3 =', result.result);
  } catch (error) {
    console.error('Error:', error);
  }

  ws.close();
}

main().catch(console.error); 
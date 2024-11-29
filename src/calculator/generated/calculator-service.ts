import { DuplexStream } from 'ts-stream-rpc';
import { RpcPeer } from 'ts-stream-rpc';
import { calculator } from './calculator.proto';

export interface AddRequest {
  a: number;
  b: number;
}

export interface AddResponse {
  result: number;
}

export interface ICalculator {
  add(request: AddRequest): Promise<AddResponse>;
}

export class CalculatorClient implements ICalculator {
  constructor(private peer: RpcPeer) {}

  async add(request: AddRequest): Promise<AddResponse> {
    const requestBytes = calculator.AddRequest.encode(request).finish();
    const response = await this.peer.call<AddResponse>('Calculator.Add', requestBytes, calculator.AddResponse);
    return response;
  }

}

export class CalculatorWrapper {
  constructor(private service: ICalculator) {}

  async add(requestBytes: Uint8Array): Promise<Uint8Array> {
    const request = calculator.AddRequest.decode(requestBytes);
    const response = await this.service.add(request);
    return calculator.AddResponse.encode(response).finish();
  }
}

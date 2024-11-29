import { ICalculator, AddRequest, AddResponse } from '../generated/calculator-service';

export class CalculatorService implements ICalculator {
  async add(request: AddRequest): Promise<AddResponse> {
    return {
      result: request.a + request.b
    };
  }
} 
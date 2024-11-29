import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace calculator. */
export namespace calculator {

    /** Represents a Calculator */
    class Calculator extends $protobuf.rpc.Service {

        /**
         * Constructs a new Calculator service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Calculator service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Calculator;

        /**
         * Calls Add.
         * @param request AddRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AddResponse
         */
        public add(request: calculator.IAddRequest, callback: calculator.Calculator.AddCallback): void;

        /**
         * Calls Add.
         * @param request AddRequest message or plain object
         * @returns Promise
         */
        public add(request: calculator.IAddRequest): Promise<calculator.AddResponse>;
    }

    namespace Calculator {

        /**
         * Callback as used by {@link calculator.Calculator#add}.
         * @param error Error, if any
         * @param [response] AddResponse
         */
        type AddCallback = (error: (Error|null), response?: calculator.AddResponse) => void;
    }

    /** Properties of an AddRequest. */
    interface IAddRequest {

        /** AddRequest a */
        a?: (number|null);

        /** AddRequest b */
        b?: (number|null);
    }

    /** Represents an AddRequest. */
    class AddRequest implements IAddRequest {

        /**
         * Constructs a new AddRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: calculator.IAddRequest);

        /** AddRequest a. */
        public a: number;

        /** AddRequest b. */
        public b: number;

        /**
         * Creates a new AddRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddRequest instance
         */
        public static create(properties?: calculator.IAddRequest): calculator.AddRequest;

        /**
         * Encodes the specified AddRequest message. Does not implicitly {@link calculator.AddRequest.verify|verify} messages.
         * @param message AddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: calculator.IAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddRequest message, length delimited. Does not implicitly {@link calculator.AddRequest.verify|verify} messages.
         * @param message AddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: calculator.IAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): calculator.AddRequest;

        /**
         * Decodes an AddRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): calculator.AddRequest;

        /**
         * Verifies an AddRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddRequest
         */
        public static fromObject(object: { [k: string]: any }): calculator.AddRequest;

        /**
         * Creates a plain object from an AddRequest message. Also converts values to other types if specified.
         * @param message AddRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: calculator.AddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddResponse. */
    interface IAddResponse {

        /** AddResponse result */
        result?: (number|null);
    }

    /** Represents an AddResponse. */
    class AddResponse implements IAddResponse {

        /**
         * Constructs a new AddResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: calculator.IAddResponse);

        /** AddResponse result. */
        public result: number;

        /**
         * Creates a new AddResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddResponse instance
         */
        public static create(properties?: calculator.IAddResponse): calculator.AddResponse;

        /**
         * Encodes the specified AddResponse message. Does not implicitly {@link calculator.AddResponse.verify|verify} messages.
         * @param message AddResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: calculator.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddResponse message, length delimited. Does not implicitly {@link calculator.AddResponse.verify|verify} messages.
         * @param message AddResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: calculator.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): calculator.AddResponse;

        /**
         * Decodes an AddResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): calculator.AddResponse;

        /**
         * Verifies an AddResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddResponse
         */
        public static fromObject(object: { [k: string]: any }): calculator.AddResponse;

        /**
         * Creates a plain object from an AddResponse message. Also converts values to other types if specified.
         * @param message AddResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: calculator.AddResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

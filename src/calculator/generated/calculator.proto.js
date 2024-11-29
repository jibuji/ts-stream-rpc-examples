import $protobuf from "protobufjs/minimal";
// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const calculator = $root.calculator = (() => {

    /**
     * Namespace calculator.
     * @exports calculator
     * @namespace
     */
    const calculator = {};

    calculator.Calculator = (function() {

        /**
         * Constructs a new Calculator service.
         * @memberof calculator
         * @classdesc Represents a Calculator
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Calculator(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Calculator.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Calculator;

        /**
         * Creates new Calculator service using the specified rpc implementation.
         * @function create
         * @memberof calculator.Calculator
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Calculator} RPC service. Useful where requests and/or responses are streamed.
         */
        Calculator.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link calculator.Calculator#add}.
         * @memberof calculator.Calculator
         * @typedef AddCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {calculator.AddResponse} [response] AddResponse
         */

        /**
         * Calls Add.
         * @function add
         * @memberof calculator.Calculator
         * @instance
         * @param {calculator.IAddRequest} request AddRequest message or plain object
         * @param {calculator.Calculator.AddCallback} callback Node-style callback called with the error, if any, and AddResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Calculator.prototype.add = function add(request, callback) {
            return this.rpcCall(add, $root.calculator.AddRequest, $root.calculator.AddResponse, request, callback);
        }, "name", { value: "Add" });

        /**
         * Calls Add.
         * @function add
         * @memberof calculator.Calculator
         * @instance
         * @param {calculator.IAddRequest} request AddRequest message or plain object
         * @returns {Promise<calculator.AddResponse>} Promise
         * @variation 2
         */

        return Calculator;
    })();

    calculator.AddRequest = (function() {

        /**
         * Properties of an AddRequest.
         * @memberof calculator
         * @interface IAddRequest
         * @property {number|null} [a] AddRequest a
         * @property {number|null} [b] AddRequest b
         */

        /**
         * Constructs a new AddRequest.
         * @memberof calculator
         * @classdesc Represents an AddRequest.
         * @implements IAddRequest
         * @constructor
         * @param {calculator.IAddRequest=} [properties] Properties to set
         */
        function AddRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddRequest a.
         * @member {number} a
         * @memberof calculator.AddRequest
         * @instance
         */
        AddRequest.prototype.a = 0;

        /**
         * AddRequest b.
         * @member {number} b
         * @memberof calculator.AddRequest
         * @instance
         */
        AddRequest.prototype.b = 0;

        /**
         * Creates a new AddRequest instance using the specified properties.
         * @function create
         * @memberof calculator.AddRequest
         * @static
         * @param {calculator.IAddRequest=} [properties] Properties to set
         * @returns {calculator.AddRequest} AddRequest instance
         */
        AddRequest.create = function create(properties) {
            return new AddRequest(properties);
        };

        /**
         * Encodes the specified AddRequest message. Does not implicitly {@link calculator.AddRequest.verify|verify} messages.
         * @function encode
         * @memberof calculator.AddRequest
         * @static
         * @param {calculator.IAddRequest} message AddRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.b);
            return writer;
        };

        /**
         * Encodes the specified AddRequest message, length delimited. Does not implicitly {@link calculator.AddRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof calculator.AddRequest
         * @static
         * @param {calculator.IAddRequest} message AddRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddRequest message from the specified reader or buffer.
         * @function decode
         * @memberof calculator.AddRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {calculator.AddRequest} AddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.calculator.AddRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.a = reader.int32();
                        break;
                    }
                case 2: {
                        message.b = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof calculator.AddRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {calculator.AddRequest} AddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddRequest message.
         * @function verify
         * @memberof calculator.AddRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isInteger(message.a))
                    return "a: integer expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b))
                    return "b: integer expected";
            return null;
        };

        /**
         * Creates an AddRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof calculator.AddRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {calculator.AddRequest} AddRequest
         */
        AddRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.calculator.AddRequest)
                return object;
            let message = new $root.calculator.AddRequest();
            if (object.a != null)
                message.a = object.a | 0;
            if (object.b != null)
                message.b = object.b | 0;
            return message;
        };

        /**
         * Creates a plain object from an AddRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof calculator.AddRequest
         * @static
         * @param {calculator.AddRequest} message AddRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            return object;
        };

        /**
         * Converts this AddRequest to JSON.
         * @function toJSON
         * @memberof calculator.AddRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddRequest
         * @function getTypeUrl
         * @memberof calculator.AddRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/calculator.AddRequest";
        };

        return AddRequest;
    })();

    calculator.AddResponse = (function() {

        /**
         * Properties of an AddResponse.
         * @memberof calculator
         * @interface IAddResponse
         * @property {number|null} [result] AddResponse result
         */

        /**
         * Constructs a new AddResponse.
         * @memberof calculator
         * @classdesc Represents an AddResponse.
         * @implements IAddResponse
         * @constructor
         * @param {calculator.IAddResponse=} [properties] Properties to set
         */
        function AddResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddResponse result.
         * @member {number} result
         * @memberof calculator.AddResponse
         * @instance
         */
        AddResponse.prototype.result = 0;

        /**
         * Creates a new AddResponse instance using the specified properties.
         * @function create
         * @memberof calculator.AddResponse
         * @static
         * @param {calculator.IAddResponse=} [properties] Properties to set
         * @returns {calculator.AddResponse} AddResponse instance
         */
        AddResponse.create = function create(properties) {
            return new AddResponse(properties);
        };

        /**
         * Encodes the specified AddResponse message. Does not implicitly {@link calculator.AddResponse.verify|verify} messages.
         * @function encode
         * @memberof calculator.AddResponse
         * @static
         * @param {calculator.IAddResponse} message AddResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified AddResponse message, length delimited. Does not implicitly {@link calculator.AddResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof calculator.AddResponse
         * @static
         * @param {calculator.IAddResponse} message AddResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddResponse message from the specified reader or buffer.
         * @function decode
         * @memberof calculator.AddResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {calculator.AddResponse} AddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.calculator.AddResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.result = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof calculator.AddResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {calculator.AddResponse} AddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddResponse message.
         * @function verify
         * @memberof calculator.AddResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates an AddResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof calculator.AddResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {calculator.AddResponse} AddResponse
         */
        AddResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.calculator.AddResponse)
                return object;
            let message = new $root.calculator.AddResponse();
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from an AddResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof calculator.AddResponse
         * @static
         * @param {calculator.AddResponse} message AddResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this AddResponse to JSON.
         * @function toJSON
         * @memberof calculator.AddResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddResponse
         * @function getTypeUrl
         * @memberof calculator.AddResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/calculator.AddResponse";
        };

        return AddResponse;
    })();

    return calculator;
})();
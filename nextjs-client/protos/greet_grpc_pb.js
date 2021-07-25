// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greet_pb = require('./greet_pb.js');

function serialize_greet_AddItemRequest(arg) {
  if (!(arg instanceof greet_pb.AddItemRequest)) {
    throw new Error('Expected argument of type greet.AddItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_AddItemRequest(buffer_arg) {
  return greet_pb.AddItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_AddItemResponse(arg) {
  if (!(arg instanceof greet_pb.AddItemResponse)) {
    throw new Error('Expected argument of type greet.AddItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_AddItemResponse(buffer_arg) {
  return greet_pb.AddItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GetItemsRequest(arg) {
  if (!(arg instanceof greet_pb.GetItemsRequest)) {
    throw new Error('Expected argument of type greet.GetItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GetItemsRequest(buffer_arg) {
  return greet_pb.GetItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GetItemsResponse(arg) {
  if (!(arg instanceof greet_pb.GetItemsResponse)) {
    throw new Error('Expected argument of type greet.GetItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GetItemsResponse(buffer_arg) {
  return greet_pb.GetItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  addItem: {
    path: '/greet.Greeter/AddItem',
    requestStream: false,
    responseStream: false,
    requestType: greet_pb.AddItemRequest,
    responseType: greet_pb.AddItemResponse,
    requestSerialize: serialize_greet_AddItemRequest,
    requestDeserialize: deserialize_greet_AddItemRequest,
    responseSerialize: serialize_greet_AddItemResponse,
    responseDeserialize: deserialize_greet_AddItemResponse,
  },
  getItems: {
    path: '/greet.Greeter/GetItems',
    requestStream: false,
    responseStream: false,
    requestType: greet_pb.GetItemsRequest,
    responseType: greet_pb.GetItemsResponse,
    requestSerialize: serialize_greet_GetItemsRequest,
    requestDeserialize: deserialize_greet_GetItemsRequest,
    responseSerialize: serialize_greet_GetItemsResponse,
    responseDeserialize: deserialize_greet_GetItemsResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);

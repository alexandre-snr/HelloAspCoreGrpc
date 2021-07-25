import * as Promise from "bluebird";

export default async function handler(req, res) {
    const grpc = require('@grpc/grpc-js');
    const messages = require('../../protos/greet_pb');
    const services = require('../../protos/greet_grpc_pb');
  
    const client = new services.GreeterClient("127.0.0.1:49156", grpc.credentials.createInsecure());
    const request = new messages.AddItemRequest();
    request.setText(req.body.text);
    request.setCompleted(true);
  
    const addItem = Promise.promisify(client.addItem, {context: client});
  
    await addItem(request);

    res.status(200).json({})
}
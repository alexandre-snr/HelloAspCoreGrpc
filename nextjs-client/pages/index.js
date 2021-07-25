import Head from 'next/head'
import { useRouter } from 'next/router';
import * as Promise from "bluebird";
import { useState } from 'react';
import {useForm} from 'react-hook-form';

const Home = ({ list }) => {
  const items = list;
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const res = await fetch('/api/post', {
      body: JSON.stringify({
        text: data.text
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    router.replace(router.asPath);
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="text" {...register('text')} />
        <button type="submit">Send</button>
      </form>
      <main>
        <h1>Hello world!</h1>
        {
          items.map(el => <p key={el.text + Math.random()}>{el.text} (created at {el.creation})</p>)
        }
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const grpc = require('@grpc/grpc-js');
  const messages = require('../protos/greet_pb');
  const services = require('../protos/greet_grpc_pb');

  const client = new services.GreeterClient("127.0.0.1:49156", grpc.credentials.createInsecure());
  const request = new messages.GetItemsRequest();

  const getItems = Promise.promisify(client.getItems, {context: client});

  const res = await getItems(request);

  return {
    props: {
      list: res.getItemsList().map((el) => {
        return {
          text: el.getText(),
          completed: el.getCompleted(),
          creation: JSON.stringify(el.getCreation().toDate())
        };
      }),
    }, // will be passed to the page component as props
  }
}

export default Home;
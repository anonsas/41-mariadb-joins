import React from 'react';

function Client({ client }) {
  console.log(client);
  return (
    <div className="client">
      <p>ID: {client.id}</p>
      <p>{client.name}</p>
      <p>ID: {client.phoneid}</p>
      <p>{client.phone}</p>
    </div>
  );
}

export default Client;

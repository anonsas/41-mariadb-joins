import React, { useState, useEffect } from 'react';
import './Clients.scss';
import axios from 'axios';
import Client from './Client';

/* The LEFT JOIN keyword returns all records from the left table 
(Customers), even if there are no matches in the right table (Orders). */

function LeftJoin() {
  const [clientList, setClientList] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/left-join`)
      .then((response) => {
        setClientList(response.data);
      })
      .then((error) => alert(error.message));
  }, []);

  return (
    <div>
      <h3>Client List</h3>
      {clientList?.map((client) => (
        <Client key={client.id} client={client} />
      ))}
    </div>
  );
}

export default LeftJoin;

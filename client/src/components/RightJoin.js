import React, { useState, useEffect } from 'react';
import './Clients.scss';
import axios from 'axios';
import Client from './Client';

/* The RIGHT JOIN keyword returns all records from the right 
table (table2), and the matching records from the left table (table1). 
The result is 0 records from the left side, if there is no match. */

function RightJoin() {
  const [clientList, setClientList] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/right-join`)
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

export default RightJoin;

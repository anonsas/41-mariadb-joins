import React, { useState, useEffect } from 'react';
import './Clients.scss';
import axios from 'axios';
import Client from './Client';

/* The INNER JOIN keyword selects all rows from both tables 
as long as there is a match between the columns. If there are 
records in the "Orders" table that do not have matches in "Customers", 
these orders will not be shown! */

function InnerJoin() {
  const [clientList, setClientList] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/inner-join`)
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

export default InnerJoin;

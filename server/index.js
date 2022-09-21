const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// DATABASE CONNECTION================
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'besieliu_cirkas',
});
//===================================

// ROUTES ===========================
app.get('/inner-join', (req, res) => {
  const sql = `
  SELECT clients.id, phones.id AS phoneid, name, phone 
  FROM clients
  INNER JOIN phones
  ON clients.id = phones.client_id
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/left-join', (req, res) => {
  const sql = `
  SELECT clients.id, phones.id AS phoneid, name, phone 
  FROM clients
  LEFT JOIN phones
  ON clients.id = phones.client_id
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/right-join', (req, res) => {
  const sql = `
  SELECT clients.id, phones.id AS phoneid, name, phone 
  FROM clients
  RIGHT JOIN phones
  ON clients.id = phones.client_id
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//===================================

app.listen(4000, () => {
  console.log(`Server is running on PORT:${4000}`);
});

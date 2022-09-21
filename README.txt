/* The INNER JOIN keyword selects all rows from both tables 
as long as there is a match between the columns. If there are 
records in the "Orders" table that do not have matches in "Customers", 
these orders will not be shown! */

/* The LEFT JOIN keyword returns all records from the left table 
(Customers), even if there are no matches in the right table (Orders). */

/* The RIGHT JOIN keyword returns all records from the right 
table (table2), and the matching records from the left table (table1). 
The result is 0 records from the left side, if there is no match. */

---------------------------------------------------------------------
XAAMP: phones (TABLE) -> Structure -> Relational View

column: client_id
table: clients
column: id

To see our connection of two tables, go to:
Main Database -> Designer
---------------------------------------------------------------------
And now it is impossible to add mumbo-jumbo...

---------------------------------------------------------------------
To fully delete item from 2 TABLES, we go to:
phones (TABLE) -> Structure -> Relational View
phones_ibfk_1 -> ON DELETE -> CASCADE

And now by deleting the client, all his phones are also deleted.
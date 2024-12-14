mysql> select * from Customers;
+------------+----------------+----------------------------+---------------------------------+--------------+
| CustomerID | Name           | Email                      | Address                         | PhoneNumber  |
+------------+----------------+----------------------------+---------------------------------+--------------+
|          1 | Alice Johnson  | alice.johnson@example.com  | 123 Apple St, New York, NY      | 123-456-7890 |
|          2 | Bob Smith      | bob.smith@example.com      | 456 Elm St, Los Angeles, CA     | 987-654-3210 |
|          3 | Charlie Davis  | charlie.davis@example.com  | 789 Maple St, Chicago, IL       | 555-123-4567 |
|          4 | Diana Williams | diana.williams@example.com | 321 Oak St, Dallas, TX          | 123-987-6543 |
|          5 | Ethan Brown    | ethan.brown@example.com    | 654 Pine St, Seattle, WA        | 222-333-4444 |
|          6 | Fiona Adams    | fiona.adams@example.com    | 987 Cedar St, Miami, FL         | 444-555-6666 |
|          7 | George Clark   | george.clark@example.com   | 213 Birch St, San Francisco, CA | 555-666-7777 |
|          8 | Henry Taylor   | henry.taylor@example.com   | 456 Spruce St, Denver, CO       | 111-222-3333 |
|          9 | Irene Green    | irene.green@example.com    | 789 Willow St, Austin, TX       | 444-555-6666 |
+------------+----------------+----------------------------+---------------------------------+--------------+
9 rows in set (0.00 sec)

mysql> select * from Products;
+-----------+--------------+----------------------------+---------+
| ProductID | Name         | Description                | Price   |
+-----------+--------------+----------------------------+---------+
|       101 | Laptop       | 15-inch gaming laptop      | 1200.00 |
|       102 | Smartphone   | Latest model smartphone    |  800.00 |
|       103 | Headphones   | Noise-canceling headphones |  150.00 |
|       104 | Keyboard     | Mechanical keyboard        |   75.00 |
|       105 | Mouse        | Wireless mouse             |   40.00 |
|       106 | Monitor      | 27-inch 4K Monitor         |  300.00 |
|       107 | Printer      | Color Laser Printer        |  200.00 |
|       108 | Tablet       | 10-inch Tablet             |  500.00 |
|       109 | External SSD | 1TB External SSD           |  150.00 |
|       110 | Smartwatch   | Fitness Smartwatch         |  250.00 |
+-----------+--------------+----------------------------+---------+
10 rows in set (0.01 sec)

mysql> select * from Orders;
+---------+------------+------------+-----------+------------+
| OrderID | CustomerID | OrderDate  | TotalCost | Status     |
+---------+------------+------------+-----------+------------+
|    1001 |          1 | 2024-10-10 |   1250.00 | Shipped    |
|    1002 |          2 | 2024-10-12 |    850.00 | Processing |
|    1003 |          1 | 2024-10-15 |     75.00 | Delivered  |
|    1004 |          3 | 2024-10-14 |     40.00 | Cancelled  |
|    1005 |          4 | 2024-10-13 |    450.00 | Shipped    |
|    1006 |          2 | 2024-10-12 |    550.00 | Processing |
|    1007 |          6 | 2024-10-14 |    250.00 | Cancelled  |
|    1008 |          5 | 2024-10-15 |   1200.00 | Delivered  |
|    1009 |          4 | 2024-10-14 |    300.00 | Processing |
|    1010 |          2 | 2024-10-15 |    950.00 | Shipped    |
|    1011 |          3 | 2024-10-16 |    150.00 | Processing |
|    1012 |          4 | 2024-10-17 |    100.00 | Delivered  |
|    1013 |          5 | 2024-10-17 |    180.00 | Shipped    |
|    1014 |          2 | 2024-10-17 |     50.00 | Processing |
|    1015 |          3 | 2024-10-17 |     60.00 | Cancelled  |
+---------+------------+------------+-----------+------------+
15 rows in set (0.01 sec)

mysql> select * from OrderItems;
+-------------+---------+-----------+----------+-----------+
| OrderItemID | OrderID | ProductID | Quantity | UnitPrice |
+-------------+---------+-----------+----------+-----------+
|           1 |    1001 |       101 |        1 |   1200.00 |
|           2 |    1001 |       104 |        1 |     75.00 |
|           3 |    1002 |       102 |        1 |    800.00 |
|           4 |    1003 |       104 |        1 |     75.00 |
|           5 |    1004 |       105 |        1 |     40.00 |
|           6 |    1005 |       107 |        1 |    200.00 |
|           7 |    1005 |       108 |        1 |    250.00 |
|           8 |    1006 |       105 |        1 |     40.00 |
|           9 |    1006 |       109 |        1 |     75.00 |
|          10 |    1007 |       108 |        1 |    250.00 |
|          11 |    1008 |       105 |        1 |     40.00 |
|          12 |    1009 |       105 |        1 |    300.00 |
|          13 |    1010 |       106 |        1 |    120.00 |
|          14 |    1011 |       109 |        1 |    150.00 |
|          15 |    1012 |       104 |        1 |     75.00 |
|          16 |    1013 |       105 |        1 |     40.00 |
|          17 |    1013 |       105 |        1 |     40.00 |
|          18 |    1014 |       105 |        1 |     40.00 |
|          19 |    1013 |       105 |        1 |     40.00 |
|          20 |    1014 |       105 |        1 |     40.00 |
|          21 |    1015 |       106 |        1 |    300.00 |
+-------------+---------+-----------+----------+-----------+
21 rows in set (0.00 sec)


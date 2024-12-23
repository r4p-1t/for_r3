tables:

## quesion 1:
/*
Write a Query to show all orders along with the customer name and email.

Refer the hint for table structure.

Sample Output:
--------------
OrderID CustomerName    Email                       OrderDate   TotalCost   Status
1001    Alice Johnson   alice.johnson@example.com   2024-10-10  1250.00     Shipped
1002    Bob Smith       bob.smith@example.com       2024-10-12  850.00      Processing
1003    Alice Johnson   alice.johnson@example.com   2024-10-15  75.00       Delivered



use fs;

-- write your query below

select o.OrderID, c.Name as CustomerName, c.Email, o.OrderDate, o.TotalCost, o.Status from Orders o join Customers c on o.CustomerID = c.CustomerID;


## question 2:

/*
write a Query to Get the Top 3 Customers by Total Spending.

Refer the hint for table structure.

Sample output
-------------
Name            TotalSpent
Alice Johnson   1625.00
George Clark    1200.00

*/

use fs;
-- write your query below

select o.Name, sum(c.TotalCost) as TotalSpent from Customers o
join Orders c on o.CustomerID=c.CustomerID group by Name order by TotalSpent desc limit 3 ;


## question 3:
/*
write a Query to List Products with No Orders.

Refer the hint for table structure.

Sample output
-------------
ProductID       Name
103            Headphones
*/

use fs;
-- write your query below

select Products.ProductID, Products.Name from Products
left join OrderItems on Products.ProductID= OrderItems.ProductID
where OrderItems.ProductID is null;


## question 4:

/*
write a Query Using Subquery to Get Customers with More Than 2 Orders.


Refer the hint for table structure.

Sample output
-------------
Name            Email
Alice Johnson   alice.johnson@example.com
Bob Smith       bob.smith@example.com
*/

use fs;
-- write your query below

select Name, Email
from Customers where Customers.CustomerID in
(select o.CustomerID from Orders o group by
o.CustomerID having count(o.CustomerID)  > 2) ;

## question 5:
/*
write a Query to Get Total Sales for Each Product

Refer the hint for table structure.

Sample output
-------------
Name          TotalSales
Laptop           2400.00
Keyboard         375.00
Smartphone       1600.00
Mouse            320.00

*/

use fs;
-- write your query below

select Products.Name , sum(OrderItems.Quantity*Products.Price) as TotalSales from Products
join OrderItems on Products.ProductID = OrderItems.ProductID
group by Products.Name;

### question 6:
/*
write a Query to Get Products Ordered More Than 3 Times

Refer the hint for table structure.

Sample output
-------------
Name        TimesOrdered
Keyboard        4
Mouse           6

*/

use fs;
-- write your query below

select Products.Name, count(OrderItems.OrderID) as TimesOrdered from Products join
OrderItems on Products.ProductID = OrderItems.ProductID group by
Products.Name having TimesOrdered > 3;

### question 7

/*

write a Query to Get All Cancelled Orders with Product Details

Refer the hint for table structure.

Sample output
-------------
OrderID Name       Quantity        UnitPrice
1004    Mouse        1               40.00
1007    Smartwatch   1               250.00


*/

use fs;
-- write your query below

## Question 8

/*
write a Query Using a Correlated Subquery to Get the Latest Order for Each Customer

Refer the hint for table structure.

Sample output
-------------
OrderID   CustomerID      OrderDate       TotalCost
1006        5            2024-10-12        550.00
1007        6            2024-10-14        250.00
1008        7            2024-10-15        1200.00


*/

use fs;
-- write your query below

## Quesiont 9

/*
write a Query to Get Monthly Sales Summary

Refer the hint for table structure.

Sample output
-------------
Month      MonthlySales
2024-10    6475.00

*/

use fs;
-- write your query below


## Question 10

/*
write a Query to List Customers Who Never Placed an Order

Refer the hint for table structure.

Sample output
-------------
CustomerID      Name
8              Henry Taylor
9              Irene Green

*/

use fs;
-- write your query below

## Question 11

/*
Write a query to find orders placed in the last 20 days.


Refer the hint for table structure.

Sample output
-------------
OrderID  CustomerID      OrderDate       TotalCost
1001     1               2024-10-10      1250.00
1002     2               2024-10-12      850.00


*/

use fs;
-- write your query below

## question 12

/*
Write a Query to Extract the month and year from the order date


Refer the hint for table structure.

Sample output
-------------
OrderID  CustomerID      OrderMonth     OrderYear
1001     1               10             2024
1002     2               10             2024
1003     1               10             2024
1004     3               10             2024


*/

use fs;
-- write your query below



## question 13

/*
Write a query to calculate the number of days since each order was placed


Refer the hint for table structure.

Sample output
-------------
OrderID   CustomerID   OrderDate       DaysSinceOrder
1001      1            2024-10-10      20
1002      2            2024-10-12      18
1003      1            2024-10-15      15
1004      3            2024-10-14      16
1005      4            2024-10-13      17


*/

use fs;
-- write your query below


## Question 14
/*
Write a query to find orders placed in October 2024.

Refer the hint for table structure.

Sample output
-------------
OrderID  CustomerID   OrderDate
1001     1            2024-10-10
1002     2            2024-10-12
1003     1            2024-10-15
1004     3            2024-10-14
1005     4            2024-10-13

*/

use fs;
-- write your query below


## question 15

/*
Write a query to find orders that were placed on weekends

Refer the hint for table structure.

Sample output
-------------
OrderID  CustomerID   OrderDate
1002     2            2024-10-12
1005     4            2024-10-13

*/

use fs;
-- write your query below


## question 16

/*
Write a query to calculate age of each order in weeks

Refer the hint for table structure.

Sample output
-------------
OrderID  CustomerID  OrderDate       WeeksSinceOrder
1001     1           2024-10-10      3
1002     2           2024-10-12      3
1003     1           2024-10-15      3



*/

use fs;
-- write your query below


## question 17
/*
write a query to calculate the time difference in days between two orders
by the same customer and print the records in sorted order by their ID
and time difference in days of two orders.



Refer the hint for table structure.

Sample output
-------------
OrderID  OrderID  DaysDifference
1003     1011     1
1011     1012     1
1003     1012     2


*/

use fs;
-- write your query below


## Question 18
/*
write a query to Calculate the time difference in hours between
two orders by the same customer

 and print the records in sorted order by
their ID and time difference in hours of two orders.


Refer the hint for table structure.

Sample output
-------------
OrderID  OrderID  HoursDifference
1003     1011     24
1011     1012     24
1003     1012     48



*/

use fs;
-- write your query below




## question 19
/*
Write a query to find customers whose email domain is 'example.com'


Refer the hint for table structure.

Sample output
-------------
CustomerID      Name    Email
1       Alice Johnson   alice.johnson@example.com
2       Bob Smith       bob.smith@example.com

*/

use fs;
-- write your query below

## Question 20

/*
Write a query to display customer names in reverse order along with
their email domain


Refer the hint for table structure.

Sample output
-------------
ReversedName    EmailDomain
nosnhoJ ecilA   example.com
htimS boB       example.com
sivaD eilrahC   example.com

*/

use fs;
-- write your query below

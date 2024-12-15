  Queires: String functions, joins, nested, correlated queries.


1 :
select o.OrderID, c.Name as CustomerName, c.Email, o.OrderDate,
o.TotalCost, o.Status from Orders o
join Customers c on o.CustomerID = c.CustomerID;

# 2:
- select c.Name, sum(o.TotalCost) from Orders o
join Customers c
on c.CustomerID = o.CustomerID
group by Name order by TotalCost desc;

3:
select ProductID.Products, ProductID.OrderItems from OrderItems
left join Products on Products.ProductID = OrderItems.ProductID
where OrderItems.ProductID is null;

4:
select name, email from customers
where customers.customerID in (
select o.customerID from Orders o
group by o.cusomerID
having count(o.cusomterID) > 2);

5:
select Products.Name, sum(OrderItems.Quantity*Products.Price) as TotalSales
from Prodcuts join OrderItems on
Products.ProductID = OrderItems.ProductID
group by Product.Name;

6:
select Products.Name, count(OrderItems.OrderID) from Products join
OrderItems on Products.ProductID = OrderItems.ProductID
group by Products.Name having Products.Name > 3;

7:
Select Orders.OrderId,Products.Name,OrderItems.Quantity,Products.Price
as UnitPrice from Orders
join OrderItems on Orders.OrderID=OrderItems.OrderID
join Products on Products.ProductID=OrderItems.ProductID
where Orders.Status='Cancelled'
order by Orders.OrderID;

8:
Select OrderId,CustomerID,OrderDate,TotalCost from Orders as OuterOrders
where OrderDate=(select max(OrderDate) from Orders as InnerOrders
where InnerOrders.CustomerID=OuterOrders.CustomerID);

9:
select date_format(OrderDate,'%Y-%m')as Month,sum(TotalCost) as MonthlySales
from Orders
group by date_format(OrderDate,'%Y-%m')
order by Month;

10:
select Customers.CustomerID,Customers.Name from Customers
left join Orders on Customers.CustomerID=Orders.CustomerID
where Orders.OrderID is null;

12:
select OrderID,CustomerID, Extract(Month from OrderDate) as OrderMonth, Extract(year from OrderDate) as OrderYear
from Orders;

14:
select OrderID,CustomerID,OrderDate from Orders
where Date_format(OrderDate,'%Y-%m')='2024-10';


15:
select OrderID,CustomerID,OrderDate from Orders
where  dayofweek(OrderDate) in (1,7);

16:
SELECT OrderID, CustomerID, OrderDate,
       TIMESTAMPDIFF(WEEK, OrderDate, CURDATE()) AS WeeksSinceOrder
FROM Orders;


17:
SELECT o1.OrderID, o2.OrderID, 
       TIMESTAMPDIFF(DAY, o1.OrderDate, o2.OrderDate) AS DaysDifference
FROM Orders o1
JOIN Orders o2 ON o1.CustomerID = o2.CustomerID
WHERE o1.OrderID < o2.OrderID;


18:
SELECT 
    o1.OrderID AS OrderID1,
    o2.OrderID AS OrderID2,
    TIMESTAMPDIFF(HOUR, o1.OrderDate, o2.OrderDate) AS HoursDifference
FROM  
    Orders o1
JOIN 
    Orders o2
    ON o1.CustomerID = o2.CustomerID 
    AND o1.OrderID < o2.OrderID
ORDER BY 
    o1.OrderID, HoursDifference;


19:
select CustomerID,Name,Email from Customers
where Email like '%example.com';


20:
select reverse(Name)as ReversedName, substr(Email,-11,11) as EmailDomain from Customers
where Email like '%example.com';

import React, { useEffect } from "react";
import { setOrders } from "../../redux/slices/ordersSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  OrdersContainer,
  Title,
  EmptyOrdersMessage,
  OrdersTable,
  OrdersTableHead,
  OrdersTableRow,
  OrdersTableHeader,
  Message,
  OrdersTableBody,
  OrdersTableCell,
  ProductName,
  Text,
} from "./OrdersStyles";
import { Link } from "react-router-dom";

const Orders = () => {
  const API = "http://localhost:8080";
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    axios
      .get(`${API}/api/orders?email=${email}`)
      .then((response) => {
        const orders = response.data;
        dispatch(setOrders(orders));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, email]);

  const products = [];

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const email = orders[i].email;
    const date = orders[i].createdAt;
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    const formattedDate = day + "/" + month + "/" + year;
    for (let j = 0; j < orders[i].products.length; j++) {
      const product = order.products[j];
      const description = product.description;
      const price = product.price.unit_amount / 100;
      const quantity = product.quantity;
      const total = product.amount_total / 100;

      const entry = {
        email,
        description,
        price,
        quantity,
        total,
        formattedDate,
      };
      products.push(entry);
    }
  }

  return (
    <OrdersContainer>
      <Title>Orders</Title>
      {products.length > 0 ? (
        <OrdersTable>
          <OrdersTableHead>
            <OrdersTableRow>
              <OrdersTableHeader>Product</OrdersTableHeader>
              <OrdersTableHeader>Price</OrdersTableHeader>
              <OrdersTableHeader>Quantity</OrdersTableHeader>
              <OrdersTableHeader>Total</OrdersTableHeader>
              <OrdersTableHeader>Date</OrdersTableHeader>
            </OrdersTableRow>
          </OrdersTableHead>
          <OrdersTableBody>
            {products.map((product, id) => (
              <OrdersTableRow key={id}>
                <OrdersTableCell>
                  <ProductName>{product.description}</ProductName>
                </OrdersTableCell>
                <OrdersTableCell>
                  <Text>Price:</Text>${product.price}.00
                </OrdersTableCell>
                <OrdersTableCell>
                  <Text>Quantity:</Text>
                  {product.quantity}
                </OrdersTableCell>
                <OrdersTableCell>
                  <Text>Total:</Text>${product.total}.00
                </OrdersTableCell>
                <OrdersTableCell>
                  <Text>Date:</Text>
                  {product.formattedDate}
                </OrdersTableCell>
              </OrdersTableRow>
            ))}
          </OrdersTableBody>
        </OrdersTable>
      ) : (
        <EmptyOrdersMessage>
          <Message>
            You have no product orders. <Link to="/">Keep shopping</Link>
          </Message>
        </EmptyOrdersMessage>
      )}
    </OrdersContainer>
  );
};

export default Orders;

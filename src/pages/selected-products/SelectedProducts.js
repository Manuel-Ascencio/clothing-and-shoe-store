import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { AiFillCloseSquare } from "react-icons/ai";
import {
  removeProduct,
  updateTotalToPay,
} from "../../redux/slices/selectedProductsSlice";
import { checkout } from "../../api/api";

import Visa from "../../images/icons/visa.svg";
import Mastercard from "../../images/icons/mastercard.svg";
import Amex from "../../images/icons/amex.svg";
import {
  SelectedProductsContainer,
  Title,
  EmptySelectedProductsMessage,
  Message,
  ProductsTable,
  ProductsTableHead,
  ProductsTableRow,
  ProductsTableHeader,
  ProductsTableBody,
  ProductsTableCell,
  ProductImage,
  ProductName,
  Remove,
  Text,
  Icon,
  TotalContainer,
  Total,
  CheckoutContainer,
  Checkout,
  PaymentMethods,
  Img,
} from "./SelectedProductsStyles";

const SelectedProducts = () => {
  const selectedProducts = useSelector(
    (state) => state.selectedProducts.selectedProducts
  );

  const userId = useSelector((state) => state.auth.id);

  const email = useSelector((state) => state.auth.email);

  const total = useSelector((state) => state.selectedProducts.totalToPay);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const top = () => {
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  useEffect(() => {
    dispatch(
      updateTotalToPay(
        selectedProducts.reduce(
          (accumulator, product) =>
            accumulator + product.price * product.quantity,
          0
        )
      )
    );
  }, [total, handleRemoveProduct]);

  const handleClick = () => {
    if (userId) {
      checkout(selectedProducts, userId, email);
    } else {
      navigate("/auth");
      window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
    }
  };

  return (
    <SelectedProductsContainer>
      <Title>Selected Products</Title>
      {selectedProducts.length > 0 ? (
        <>
          <ProductsTable>
            <ProductsTableHead>
              <ProductsTableRow>
                <ProductsTableHeader>Product</ProductsTableHeader>
                <ProductsTableHeader>Remove</ProductsTableHeader>
                <ProductsTableHeader>Price</ProductsTableHeader>
                <ProductsTableHeader>Quantity</ProductsTableHeader>
                <ProductsTableHeader>Subtotal</ProductsTableHeader>
              </ProductsTableRow>
            </ProductsTableHead>
            <ProductsTableBody>
              {selectedProducts.map((product, id) => (
                <ProductsTableRow key={id}>
                  <ProductsTableCell onClick={top}>
                    <Link to={`/${product.shop}/${product.id}`}>
                      <ProductImage src={`${product.image}`}></ProductImage>
                      <ProductName>{product.title}</ProductName>
                    </Link>
                  </ProductsTableCell>
                  <ProductsTableCell>
                    <Icon>
                      <TiDelete onClick={() => handleRemoveProduct(id)} />
                    </Icon>
                  </ProductsTableCell>
                  <ProductsTableCell>
                    <Remove onClick={() => handleRemoveProduct(id)}>
                      <AiFillCloseSquare />
                    </Remove>
                  </ProductsTableCell>
                  <ProductsTableCell>
                    <Text>Price:</Text>${product.price}.00
                  </ProductsTableCell>
                  <ProductsTableCell>
                    <Text>Quantity:</Text>
                    {product.quantity}
                  </ProductsTableCell>
                  <ProductsTableCell>
                    <Text>Subtotal:</Text>${product.price * product.quantity}.00
                  </ProductsTableCell>
                </ProductsTableRow>
              ))}
            </ProductsTableBody>
          </ProductsTable>
          <TotalContainer>
            <Total>Total: ${total}.00</Total>
          </TotalContainer>
          <CheckoutContainer>
            <Checkout onClick={() => handleClick()}>Checkout</Checkout>
          </CheckoutContainer>
          <PaymentMethods>
            <Img src={Visa} alt="Visa" />
            <Img src={Mastercard} alt="Mastercard" />
            <Img src={Amex} alt="American-Express" />
          </PaymentMethods>
        </>
      ) : (
        <EmptySelectedProductsMessage>
          <Message>
            You have no selected products. <Link to="/">Keep shopping</Link>
          </Message>
        </EmptySelectedProductsMessage>
      )}
    </SelectedProductsContainer>
  );
};

export default SelectedProducts;

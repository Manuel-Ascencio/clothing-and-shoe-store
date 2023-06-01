import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Pagination from "../../components/pagination/Pagination";
import { selectWomenProductType } from "../../redux/slices/selectedProductsSlice";
import {
  ShopWomenContainer,
  Category,
  Title,
  Women,
  Img,
  ProductsContainer,
  ProductsTypes,
  ProductType,
  Products,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./ShopWomenStyles";
const ShopWomen = () => {
  const products = useSelector((state) => state.products.productsWomen);
  const womenProductType = useSelector(
    (state) => state.selectedProducts.womenProductType
  );
  const dispatch = useDispatch();

  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const productsTypesList = ["all", "blouse", "dress", "heels"];

  const handleClick = (type) => {
    dispatch(selectWomenProductType(type));
    setCurrentPage(1);
  };

  const filteredProducts =
    womenProductType === "all"
      ? products
      : products.filter((product) => product.type === womenProductType);

  const totalProducts = filteredProducts.length;

  const top = () => {
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };

  return (
    <ShopWomenContainer>
      <Category>
        <Title>#forher</Title>
        <Women>
          <Img
            src="https://res.cloudinary.com/dssbz0thm/image/upload/v1675397822/women%27s%20products/women_s-fashion_u7avaz.png"
            alt="women-fashion"
          />
        </Women>
      </Category>
      <ProductsContainer>
        <ProductsTypes>
          {productsTypesList.map((type, i) => (
            <ProductType
              key={i}
              selected={type === womenProductType}
              onClick={() => handleClick(type)}
            >
              {type.toUpperCase()}
            </ProductType>
          ))}
        </ProductsTypes>
        <Products>
          {filteredProducts
            .map((product) => (
              <Product key={product.id}>
                <Link to={`/shop-women/${product.id}`} onClick={top}>
                  <ProductImage src={product.image} />
                  <ProductName>{product.title}</ProductName>
                  <ProductPrice>${product.price}.00</ProductPrice>
                </Link>
              </Product>
            ))
            .slice(firstIndex, lastIndex)}
        </Products>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </ProductsContainer>
    </ShopWomenContainer>
  );
};

export default ShopWomen;

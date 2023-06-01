import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectMenProductType } from "../../redux/slices/selectedProductsSlice";
import Pagination from "../../components/pagination/Pagination";
import {
  ShopMenContainer,
  Category,
  Title,
  Men,
  Image,
  ProductsContainer,
  ProductsTypes,
  ProductType,
  Products,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./ShopMenStyles";

const ShopMen = () => {
  const products = useSelector((state) => state.products.productsMen);
  const menProductType = useSelector(
    (state) => state.selectedProducts.menProductType
  );
  const dispatch = useDispatch();

  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const productsTypesList = ["all", "pants", "shirt", "shoes"];

  const handleClick = (type) => {
    dispatch(selectMenProductType(type));
    setCurrentPage(1);
  };

  const filteredProducts =
    menProductType === "all"
      ? products
      : products.filter((product) => product.type === menProductType);

  const totalProducts = filteredProducts.length;

  const top = () => {
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };
  return (
    <ShopMenContainer>
      <Category>
        <Title>#forhim</Title>
        <Men>
          <Image
            src="https://res.cloudinary.com/dssbz0thm/image/upload/v1675397799/men%27s%20products/men_s-fashion_xwm5wh.png"
            alt="men-fashion"
          />
        </Men>
      </Category>
      <ProductsContainer>
        <ProductsTypes>
          {productsTypesList.map((type, i) => (
            <ProductType
              key={i}
              selected={type === menProductType}
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
                <Link to={`/shop-men/${product.id}`} onClick={top}>
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
    </ShopMenContainer>
  );
};

export default ShopMen;

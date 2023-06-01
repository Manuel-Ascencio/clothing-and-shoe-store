import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { addProduct } from "../../redux/slices/selectedProductsSlice";
import NotFound from "../page-not-found/NotFound";

import {
  SingleProductContainer,
  ImageContainer,
  ProductImg,
  ProductFeature,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductDescription,
  AddToBagSection,
  ProductQuantity,
  ToSubtract,
  Quantity,
  ToAdd,
  AddToBag,
} from "./SingleProductStyles";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { shop, id } = useParams();
  const products = useSelector((state) =>
    shop === "shop-women"
      ? state.products.productsWomen
      : shop === "shop-men"
      ? state.products.productsMen
      : ""
  );

  const dispatch = useDispatch();

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const shopCategory = shop === "shop-women" || shop === "shop-men";

  useEffect(() => {
    if (shopCategory) {
      const product = products.find((product) => product.id === parseInt(id));
      setSingleProduct(product);
    }
  }, []);

  const handleAddToBag = () => {
    const { id, title, image, price } = singleProduct;
    dispatch(
      addProduct({ product: { id, shop, title, image, price }, quantity })
    );
    Swal.fire({
      icon: "success",
      title: "Added Product",
      color: "var(--black)",
      iconColor: "var(--black)",
      background: "var(--white)",
      confirmButtonColor: "var(--black)",
      timer: 1500,
    });
    setQuantity(1);
  };

  return (
    <>
      {shopCategory && singleProduct ? (
        <SingleProductContainer>
          <ImageContainer>
            <ProductImg src={singleProduct.image} alt={singleProduct.title} />
          </ImageContainer>
          <ProductFeature>
            <ProductInfo>
              <ProductName>{singleProduct.title}</ProductName>
              <ProductPrice>${singleProduct.price}.00</ProductPrice>
              <ProductDescription>
                {singleProduct.description}
              </ProductDescription>
            </ProductInfo>
            <AddToBagSection>
              <ProductQuantity>
                <ToSubtract onClick={handleSubtract}>-</ToSubtract>
                <Quantity>{quantity}</Quantity>
                <ToAdd onClick={handleAdd}>+</ToAdd>
              </ProductQuantity>
              <AddToBag onClick={handleAddToBag}>Add To Bag</AddToBag>
            </AddToBagSection>
          </ProductFeature>
        </SingleProductContainer>
      ) : (
        <NotFound />
      )}
    </>
  );
};

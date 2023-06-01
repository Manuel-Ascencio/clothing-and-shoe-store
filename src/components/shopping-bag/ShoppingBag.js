import React, { useEffect } from "react";
import { GrShop } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTotalSelectedProducts } from "../../redux/slices/selectedProductsSlice";

import { Bag, Amount } from "./ShoppingBagStyles";

function ShoppingBag() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productsSelected = useSelector(
    (state) => state.selectedProducts.selectedProducts
  );

  const totalSelectedProducts = useSelector(
    (state) => state.selectedProducts.totalSelectedProducts
  );

  useEffect(() => {
    dispatch(
      updateTotalSelectedProducts(
        productsSelected.reduce(
          (accumulator, product) => accumulator + product.quantity,
          0
        )
      )
    );
  }, [productsSelected]);

  const handleClick = () => {
    navigate("/selected-products");
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };
  return (
    <Bag onClick={handleClick}>
      <GrShop />
      <Amount>{totalSelectedProducts}</Amount>
    </Bag>
  );
}

export default ShoppingBag;

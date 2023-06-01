import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearSelectedProducts } from "../../redux/slices/selectedProductsSlice";
import { CheckoutSuccessContainer, Message } from "./CheckoutSuccessStyles";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSelectedProducts());
  }, [dispatch]);

  return (
    <CheckoutSuccessContainer>
      <Message>Checkout Successful. Thanks for your purchase.</Message>
      <Message>
        Check your <Link to="/orders">orders</Link> status at your profile.
      </Message>
    </CheckoutSuccessContainer>
  );
};

export default CheckoutSuccess;

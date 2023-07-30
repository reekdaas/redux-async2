import { useDispatch, useSelector } from "react-redux";
import styles from "./singleProduct.module.css";
import { addToCart, removeFromCart } from "../Redux/Slice/cartSlice";

export default function SingleProduct({ data }) {
  const dispacth = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  const cartItem = cart.find((value) => value.id === data?.id);
  // console.log(cartItem);

  return (
    <div className={styles.singleProduct}>
      <img src={data?.images[0]} alt={data?.title} />
      <h1>{data?.title}</h1>
      <div className={styles.btnContainer}>
        {" "}
        <button
          onClick={() => {
            dispacth(addToCart(data.id));
          }}
        >
          Increase
        </button>
        <p>{cartItem?.quantity || 0}</p>
        <button
          onClick={() => {
            dispacth(removeFromCart(data.id));
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

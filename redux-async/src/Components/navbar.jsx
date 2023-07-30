import { useSelector } from "react-redux";
import styles from "./navbar.module.css";

export default function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);

  return (
    <div className={styles.navbar}>
      <h1>Cart</h1>
      <h3>{cart?.length || 0}</h3>
    </div>
  );
}

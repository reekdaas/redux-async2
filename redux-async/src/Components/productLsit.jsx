import { useEffect } from "react";
import styles from "./productlist.module.css";
import SingleProduct from "./singleProduct";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../Redux/Slice/productSlice";

import Navbar from "./navbar";
import { fetchPosts } from "../Redux/Slice/productSlice";

export default function AllProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  // const fetchData = async () => {
  //   const res = await fetch("https://api.escuelajs.co/api/v1/products");
  //   const data = await res.json();
  //   dispatch(fetchProducts(data?.slice(0, 30)));
  //   // console.log(data);
  // };
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(products);
  return (
    <div className={styles.allProduct}>
      <Navbar />
      <h1>All Products</h1>
      <div>
        {products[0]?.map((data) => (
          <SingleProduct data={data} key={data?.id} />
        ))}
      </div>
    </div>
  );
}

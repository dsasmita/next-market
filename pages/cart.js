import { useSelector } from "react-redux";
import { cartsSelector } from "../src/slices/carts.js";
import { createEntityAdapter } from "@reduxjs/toolkit";

const Cart = () => {
  const { count, carts } = useSelector(cartsSelector);

  const renderCarts = () => {
    return carts.map((cart) => (
      <tr key={cart.productId}>
        <td>{cart.productId}</td>
        <td>{cart.productName}</td>
        <td>Rp. {cart.productPrice}</td>
      </tr>
    ));
  };

  return (
    <div className="cart-container">
      <table>
        <thead>
          <tr>
            <th>Kode</th>
            <th>Nama</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>{renderCarts()}</tbody>
      </table>
    </div>
  );
};

export default Cart;

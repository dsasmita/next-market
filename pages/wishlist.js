import { useSelector } from "react-redux";
import { wishlistsSelector } from "../src/slices/wishlist.js";
import { createEntityAdapter } from "@reduxjs/toolkit";

const Wishlist = () => {
  const { count, wishlists } = useSelector(wishlistsSelector);

  const renderWishlists = () => {
    return wishlists.map((wishlist) => (
      <tr key={wishlist.productId}>
        <td>{wishlist.productId}</td>
        <td>{wishlist.productName}</td>
        <td>Rp. {wishlist.productPrice}</td>
      </tr>
    ));
  };

  return (
    <div className="wishlist-container">
      <table>
        <thead>
          <tr>
            <th>Kode</th>
            <th>Nama</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>{renderWishlists()}</tbody>
      </table>
    </div>
  );
};

export default Wishlist;

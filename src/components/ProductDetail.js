import { useDispatch } from "react-redux";
import Link from "next/link";
import { addCarts } from "../slices/carts.js";
import { addWishlists } from "../slices/wishlist.js";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addCarts(product));
    alert("Produk berhasil di tambahkan dalam keranjang belanja.");
  };

  const handleAddWishlist = () => {
    dispatch(addWishlists(product));
    alert("Produk berhasil di tambahkan dalam wishlist belanja.");
  };

  return (
    <div className="product">
      <img src={product.productImage} />
      <h1>
        {product.productName} - {product.productCategory}
      </h1>
      <h2>Rp. {product.productPrice}</h2>
      <hr />
      <div className="action">
        <button onClick={handleAddCart}>Add Cart</button> &nbsp;
        <button onClick={handleAddWishlist}>Add Wishlist</button>
      </div>
      <hr />
      <p>{product.productDescription}</p>
    </div>
  );
};
export default ProductDetail;

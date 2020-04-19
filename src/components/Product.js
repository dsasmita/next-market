import { useDispatch } from "react-redux";
import Link from "next/link";
import { addCarts } from "../slices/carts.js";
import { addWishlists } from "../slices/wishlist.js";

const Product = ({ product }) => {
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
      <p>{product.productDescription}</p>
      <div className="action">
        <button onClick={handleAddCart}>Add Cart</button> &nbsp;
        <button onClick={handleAddWishlist}>Add Wishlist</button> &nbsp;
        <Link href="/product/[id]" as={`/product/${product.productId}`}>
          <button>View</button>
        </Link>
      </div>
    </div>
  );
};
export default Product;

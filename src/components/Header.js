import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { cartsSelector } from "../slices/carts.js";
import { wishlistsSelector } from "../slices/wishlist.js";

const Header = () => {
  const { countCart } = useSelector(cartsSelector);
  const { countWishlist } = useSelector(wishlistsSelector);

  return (
    <header>
      <Link href="/">
        <a className="brand-name">Next Market</a>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Beranda</a>
          </Link>
        </li>
        <li>
          <Link href="cart">
            <a>Cart ({countCart})</a>
          </Link>
        </li>
        <li>
          <Link href="wishlist">
            <a>Wishlist ({countWishlist})</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

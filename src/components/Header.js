import React from "react";

const Header = () => (
  <header>
    <a href="#" className="brand-name">
      Next Market
    </a>
    <ul>
      <li>
        <a href="#">Cart (2)</a>
      </li>
      <li>
        <a href="#">Wishlist (5)</a>
      </li>
    </ul>
    <form className="form-search">
      <input placeholder="Cari produk" />
      <select>
        <option value="">-pilih kategori-</option>
      </select>
    </form>
  </header>
);

export default Header;

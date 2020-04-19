import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelector } from "../src/slices/products.js";

import Product from "../src/components/Product.js";
import FormSearch from "../src/components/FormSearch.js";

const Index = () => {
  const dispatch = useDispatch();
  const {
    products,
    searchKeyword,
    categoryFilter,
    loading,
    hasErrors,
  } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts({ searchKeyword, categoryFilter }));
  }, [dispatch]);

  const renderProduct = () => {
    if (loading) return <p>Loading...</p>;
    if (hasErrors) return <p>produk tidak ditemukan...</p>;

    return products.map((product) => (
      <Product key={product.productId} product={product} />
    ));
  };

  return (
    <>
      <FormSearch />
      <div className="product-list">{renderProduct()}</div>
    </>
  );
};

export default Index;

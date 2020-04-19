import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, productSelector } from "../../src/slices/product";

import ProductDetail from "../../src/components/ProductDetail.js";

const Product = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const { product, loadingProduct, hasErrorsProduct } = useSelector(
    productSelector
  );

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch]);

  const renderProduct = () => {
    if (loadingProduct) return <p>Loading...</p>;
    if (hasErrorsProduct) return <p>produk tidak ditemukan...</p>;

    return (
      <div>
        <ProductDetail product={product} />
      </div>
    );
  };

  return <>{renderProduct()}</>;
};

Product.getInitialProps = function (context) {
  const { id } = context.query;

  return { id };
};

export default Product;

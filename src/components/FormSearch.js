import { useDispatch, useSelector } from "react-redux";
import {
  setSearchKeyword,
  setCategoryFilter,
  fetchProducts,
  productsSelector,
} from "../slices/products.js";

const FormSearch = () => {
  const dispatch = useDispatch();
  const { searchKeyword } = useSelector(productsSelector);

  const handleSearchText = (event) => {
    dispatch(setSearchKeyword(event.target.value));
    dispatch(
      fetchProducts({ categoryFilter: "", searchKeyword: event.target.value })
    );
  };

  const handleFilterCategory = (event) => {
    dispatch(setCategoryFilter(event.target.value));
    dispatch(
      fetchProducts({ searchKeyword: "", categoryFilter: event.target.value })
    );
  };
  return (
    <form className="form-search">
      <input
        placeholder="Cari produk"
        value={searchKeyword}
        onChange={handleSearchText}
      />
      <select onChange={handleFilterCategory}>
        <option value="">-pilih kategori-</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
      </select>
    </form>
  );
};

export default FormSearch;

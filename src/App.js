import {useEffect, useState} from "react";
import "antd/dist/antd.css";

import {loadData, debounce} from "./utils/utils";
import {endpoints} from "./constants/endpoints";

import AutoComplete from "./components/autocomplete/autocomplete";
import ProductsList from "./components/products/products_list";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const handleOnChange = debounce((search) => loadCategories(search));

  const loadCategories = (searchTerm = "") => {
    const params = {name_like: searchTerm};
    loadData(params, endpoints.GET_CATEGORIES)
      .then(categories => {
        const data = formatCategories(categories, searchTerm);
        setCategories(data);
      })
      .catch(error => {throw new Error(error)});
  }

  const loadProducts = (id = "") => {
    const params = {categoryId: id};
    loadData(params, endpoints.GET_PRODUCTS)
      .then(products => setProducts(products))
      .catch(error => {throw new Error(error)});
  }

  const formatCategories = (arr, match) => {
    return (arr || []).map(category => {
      let newLabel = highlightLabel(category.name, match);
      return {label: newLabel, value: category.id}
    });
  };

  const highlightLabel = (label, value) => {
    if (!value) return label;
    return (
      label.split(value.toLowerCase())
        .reduce((prev, current, i) => {
          if (!i) return [current];
          return prev.concat(<span key={value + current} className="match">{ value.toLowerCase() }</span>, current);
        }, [])
    );
  };

  return (
    <div className="ac-container">
      <AutoComplete
        options={categories}
        onSearch={handleOnChange}
        onChange={loadProducts}
      />
      <ProductsList
        products={products}
      />
    </div>
  );
}

export default App;

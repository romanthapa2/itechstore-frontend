import React, { useCallback, useState } from "react";
import { url } from "../../url";
import LaptopCard from "../LaptopCard";

const debounce = (func, delay=500) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};

const SearchPage = () => {
  const [value, setvalue] = useState("");
  const [products, setProducts] = useState([]);

  const debouncedHandleOnChange = useCallback(
    debounce((searchText) => {
      if (!searchText) {
        setProducts([]);
        return;
      }

      const searchProduct = async () => {
        try {
          const response = await fetch(
            `${url}/api/filter/dataBySearch?search=${searchText}`
          );
          const data = await response.json();
          setProducts(data.data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
      searchProduct();
    }),
    []
  );

  const handleOnChange = (e) => {
    setvalue(e.target.value);
    debouncedHandleOnChange(e.target.value);
  };

  return (
    <div className="h-fit">
      <div className="flex justify-center items-center mt-12 h-20">
        <input
          type="text"
          onChange={handleOnChange}
          value={value}
          className="h-14 w-1/2 p-4 rounded-lg"
          placeholder="Search through products"
        />
      </div>
      <div className="h-fit grid grid-cols-3 bg-gray-300 mt-10 py-8 place-items-center">
        {products.length > 0 ? (
          products.map((product) => (
            <LaptopCard key={product.id} laptop={product} />
          ))
        ) : (
          <p className="text-center">Enter a search query to begin</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

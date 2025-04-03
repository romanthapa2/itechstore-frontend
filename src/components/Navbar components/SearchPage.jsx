import React, { useCallback, useState } from "react";
import { url } from "../../url";
import LaptopCard, { SkeletonCard } from "../LaptopCard";

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
  const [loading, setLoading] = useState(false);

  const debouncedHandleOnChange = useCallback(
    debounce((searchText) => {
      if (!searchText) {
        setProducts([]);
        setLoading(false);
        return;
      }

      const searchProduct = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `${url}/api/filter/dataBySearch?search=${searchText}`
          );
          const data = await response.json();
          setProducts(data.data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        } finally {
          setLoading(false);
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
      <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 mt-10 py-8 place-items-center">
        {loading ? (
          // Show skeleton loading while fetching results
          Array(3).fill().map((_, index) => <SkeletonCard key={index} />)
        ) : products.length > 0 ? (
          products.map((product) => (
            <LaptopCard key={product.id} laptop={product} />
          ))
        ) : (
          <p className="text-center col-span-full">Enter a search query to begin</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

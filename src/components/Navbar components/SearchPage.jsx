import React, { useCallback, useState, useRef, useEffect } from "react";
import { url } from "../../url";
import LaptopCard, { SkeletonCard } from "../LaptopCard";
import { FiSearch, FiX } from "react-icons/fi";

const debounce = (func, delay = 500) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};

const SearchPage = () => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

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
    setValue(e.target.value);
    debouncedHandleOnChange(e.target.value);
  };

  const clearSearch = () => {
    setValue("");
    setProducts([]);
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 my-6">
      <div className=" py-12">
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              ref={inputRef}
              type="text"
              onChange={handleOnChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={value}
              className="block w-full h-14 pl-12 pr-12 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Search for laptops, accessories, and more..."
            />
            {value && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiX className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-16">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array(6).fill().map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-5">
              {products.map((product) => (
                <LaptopCard key={product.id} laptop={product} />
              ))}
            </div>
          ) : value ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900">No results found</h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900">Start searching</h3>
              <p className="mt-2 text-gray-500">
                Enter keywords to find laptops, accessories, and more.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

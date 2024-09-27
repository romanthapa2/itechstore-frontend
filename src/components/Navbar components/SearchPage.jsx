import React, { useCallback, useState } from "react";

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const SearchPage = () => {
  const [value, setvalue] = useState("");

  const debouncedHandleOnChange = useCallback(
    debounce((searchText) => {
      setvalue(searchText);
    //   trigger api call here
    }, 5000),
    []
  );

  const handleOnChange = (e) => {
    debouncedHandleOnChange(e.target.value);
  };
  return (
    <div className="h-fit">
      <div className="flex justify-center items-center my-12 h-20">
        <input
          type="text"
          onChange={handleOnChange}
          value={value}
          className="h-14 w-1/2 p-4 rounded-lg"
          placeholder="Search through products"
        />
      </div>
      <div className="h-fit"></div>
    </div>
  );
};

export default SearchPage;

import React, { useRef } from "react";
import { useState } from "react";
const FormData = require('form-data');

const Admin = () => {
  let formref=useRef(null);
  const [fomvalue, setfomvalue] = useState({
    name: "",
    type: "",
    brand: "",
    desc: "",
    price: "",
    img: null, // Store the selected image file
  });
  const handleonChange = (e) => {
    setfomvalue({ ...fomvalue, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setfomvalue({ ...fomvalue, img: e.target.files[0] }); // Capture the selected image file
  };


  // In React, FormData is a built-in JavaScript object used to construct and send data to server-side 
  // endpoints via HTTP requests, particularly when handling forms. It is commonly utilized in conjunction with the fetch() 
  // API or other libraries like Axios to submit data asynchronously.

// FormData enables you to easily gather form data from the DOM and construct a set of key-value 
// pairs representing form fields and their values. It supports files and binary data as well, making
// it suitable for handling file uploads.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const formDataToSend = new FormData();
    formDataToSend.append("name", fomvalue.name);
    formDataToSend.append("type", fomvalue.type);
    formDataToSend.append("brand", fomvalue.brand);
    formDataToSend.append("desc", fomvalue.desc);
    formDataToSend.append("price", fomvalue.price);
    formDataToSend.append("img", fomvalue.img);

    const response = await fetch("http://localhost:5000/api/admin/upload-data", {
      method: "POST",
      body: formDataToSend,
    });
    const json = await response.json();
    console.log(json);
    
    formref.current.reset();
    
  } catch (err) {
    console.log(err);
  }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          className="flex flex-col  w-96 "
          method="post"
          action="api/admin/upload-data"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          ref={formref}
          >
          <label htmlFor="name">Product-Name</label>
          <input type="text" id="name" name="name" onChange={handleonChange} minLength={3} required />
          <label htmlFor="type">Type</label>
          <input type="text" id="type" name="type" onChange={handleonChange}  minLength={3} required />
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" onChange={handleonChange}  minLength={2} required />
          <label htmlFor="brand">brand</label>
          <input type="text" id="brand" name="brand" onChange={handleonChange}  minLength={2} required />
          <label htmlFor="desc">description</label>
          <input type="text" id="desc" name="desc" onChange={handleonChange}  minLength={3} required/>
          <label htmlFor="img">Img</label>
          <input type="file" id="img" name="img"  onChange={handleFileChange} />
          <button className="mt-5 bg-black text-white p-1 w-48" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;

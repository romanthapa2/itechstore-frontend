import { url } from "../../url";
import React, { useRef } from "react";
import { useState } from "react";
const FormData = require("form-data");


const Admin = () => {
  let formref = useRef(null);
  const [fomvalue, setfomvalue] = useState({
    name: "",
    type: "",
    brand: "",
    desc: "",
    price: "",
    img: null, 
  });
  const handleonChange = (e) => {
    setfomvalue({ ...fomvalue, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setfomvalue({ ...fomvalue, img: e.target.files[0] }); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", fomvalue.name);
      formDataToSend.append("type", fomvalue.type);
      formDataToSend.append("brand", fomvalue.brand);
      formDataToSend.append("desc", fomvalue.desc);
      formDataToSend.append("price", fomvalue.price);
      formDataToSend.append("img", fomvalue.img);
      const response = await fetch(`${url}/api/admin/add-product`, {
        method: "POST",
        body: formDataToSend,
      });
      const json = await response.json();
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
          ref={formref}>
          <label htmlFor="name">Product-Name</label>
          <input type="text" id="name" name="name" onChange={handleonChange} minLength={3} required />
          <label htmlFor="type">Type</label>
          <input type="text" id="type" name="type" onChange={handleonChange} minLength={3} required />
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" onChange={handleonChange} minLength={2} required />
          <label htmlFor="brand">brand</label>
          <input type="text" id="brand" name="brand" onChange={handleonChange} minLength={2} required />
          <label htmlFor="desc">description</label>
          <input type="text" id="desc" name="desc" onChange={handleonChange} minLength={3} required />
          <label htmlFor="img">Img</label>
          <input type="file" id="img" name="img" onChange={handleFileChange} />
          <button className="mt-5 bg-black text-white p-1 w-48" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;

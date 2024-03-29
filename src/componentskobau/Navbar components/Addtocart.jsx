import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { cart,reset,deletecart} from "../../features/Laptopslice";
import Navbar from "./Navbar";
import Navabarup from "./Navabarup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus,faHeart ,faTrash } from "@fortawesome/free-solid-svg-icons";

const Addtocart = () => {
  // getting the array of laptops detail which is stored in array of reducer
  // like [{name:..,price:...}]
  const selector = useSelector(cart);
  console.log(selector);


  // store image url after mapping or fetching data from the server to imgUrls
  // like  ['http://localhost:5000/uploads\\img-23 hp_victus_15_laptop.png', 
  //'http://localhost:5000/uploads\\img-6 acer-aspire-a5…-storage-nvidia-mx-550-2gb-windows-10-2022-1.webp']
  const [imgUrls, setImgUrls] = useState([]);
  useEffect(() => {
    if (selector && selector.length > 0) {
      const fetchImages = async () => {
        try {
          // promise.all fetches the images cuncurrently or say waits untill all data is fetched
          const urls = await Promise.all(selector.map(async (data) => {
            const imageUrl = `http://localhost:5000/${data.img}`;
            const response = await fetch(imageUrl);
            // const laprice= await data.price;
            // setprice(prevPrice => prevPrice + laprice);
            if (!response.ok) {
              throw new Error("Failed to fetch image");
            }
            return imageUrl;
          }));
          setImgUrls(urls);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();
    }
  }, [selector]);
  console.log(imgUrls);

const [price,setprice]=useState(0);
useEffect(()=>{
  if (selector && selector.length > 0){
    try{
      let totalPrice = 0;
      selector.forEach((data) => {
        // removes the commas and replace by white space and trim removes the white space
        const formattedPrice = data.price.replace(/,/g, '').trim();
        // Check if data.price is a valid number before adding it to totalPrice
        // NaN fro not a number 
        if (!isNaN(formattedPrice)) {
          totalPrice += parseInt(formattedPrice);
        } else {
          console.warn("Invalid price for item:", data.name);
        }
      });
      setprice(totalPrice);
    }catch(error){
      console.error("Error fetching images:", error);
    }
  }
},[selector])


  //for resetting the array in reducer 
const dispatch=useDispatch();
const handlereset=()=>{
  dispatch(reset());
}

// dispatches the action which is deleltecart
const hanledeleteitem=(e)=>{
  dispatch(deletecart(e))
}


  return (
    <>
      <Navabarup />
      <Navbar />
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="flex flex-row justify-around my-3">
            <div className="col-md-8">
              <div className="mb-4">
                <div className="card-header py-3">
                  <h5 className=" text-2xl font-semibold">Cart Quantity {selector.length}</h5>
                </div>

                {/* cartitem */}
                {selector.map((datas, index) => (
                  <div className="card-body bg-white p-5" key={index}>
                    <div className="flex flex-row">
                      <div className="mr-10">
                        <div
                          className="bg-image"
                          data-mdb-ripple-color="light">
                          {imgUrls[index] &&
                          <img
                            src={imgUrls[index]}
                            className="w-48"
                            alt="Blue Jeans Jacket"
                          />}
                        </div>
                      </div>

                      <div className="mb-4 mr-10">
                        <p className="mb-2">
                          <strong>{datas.name}</strong>
                        </p>
                        <p className="mb-2">Color: blue</p>
                        <p className="mb-2">Size: M</p>
                        <button
                          type="button"
                          className="bg-blue-600 p-2 text-white  me-5 mb-2  rounded-md"
                          data-mdb-toggle="tooltip"
                          title="Remove item">
                          <i className="fas fa-trash" onClick={()=>hanledeleteitem(index)}><FontAwesomeIcon icon={faTrash} /></i>
                        </button>
                        <button
                          type="button"
                          className="bg-red-800 p-2 text-white mb-2  rounded-md"
                          data-mdb-toggle="tooltip"
                          title="Move to the wish list">
                          <i className="fas fa-heart"><FontAwesomeIcon icon={faHeart} /></i>
                        </button>
                      </div>

                      <div className=" mb-4 mr-10">
                        <div className="flex flex-row mb-4" style={{ maxWidth: "300px" }}>
                          ``
                          <button
                            className="p-1 bg-blue-600 px-3 me-2  rounded-md"
                           >
                            <i><FontAwesomeIcon icon={faMinus} /></i>
                          </button>
                          <div className="form-outline">
                            <label className="form-label" htmlFor="form1">
                              Quantity
                            </label>
                          </div>
                          <button
                            className="p-1 bg-blue-600 px-3 ms-2  rounded-md"
                          >
                            <i><FontAwesomeIcon icon={faPlus} /></i>
                          </button>
                        </div>

                        <p className="text-start text-md-center ml-9">
                          <strong>R.S{datas.price}</strong>
                        </p>
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                ))}

                {/* ends */}
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0 mt-14">
                <div className="flex flex-row">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2 ml-4"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2 ml-3"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2 ml-3"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className=" bg-white p-10">
                <div className="card-header py-3">
                  <h5 className="mb-2 border-b-2 text-lg font-semibold">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="mb-1 border-0 px-0 pb-0">
                      Products
                      <span className="ml-20">R.S {price}</span>
                    </li>
                    <li className="mb-1 px-0 border-b-2">
                      Shipping
                      <span className="ml-20">Gratis</span>
                    </li>
                    <li className="border-0 px-0 mb-3 flex flex-row">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span className="ml-10">
                        <strong>R.S {price}</strong>
                      </span>
                    </li>
                  </ul>

                  <button type="button" className="p-3 bg-blue-800 text-white rounded-md">
                    Go to checkout
                  </button>
                </div>
              </div>
                  <button type="button" onClick={handlereset} className="p-2 bg-red-500 text-white rounded-md ml-24 mt-4 "> Reset</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Addtocart;

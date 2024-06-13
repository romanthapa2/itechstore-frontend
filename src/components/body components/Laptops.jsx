import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LaptopCard from './LaptopCard';
import { useNavigate } from 'react-router-dom';
import { fetchlaptop,laptopError,laptopLoading,laptopdata} from '../../reduxstore/LaptopSlice';
 
const  Laptops = () => {
  // dipatch to send data from conponent to slice
const dispatch=useDispatch();
// useselctor to get data from slice
const  laptoploadings=useSelector(laptopLoading);
const laptperror=useSelector(laptopError)
// get the filtered data i.e laptop from slice
const laptopdta=useSelector(laptopdata)



useEffect(()=>{
  // useeffect to the fetch, only load when dispatch has changed
  dispatch(fetchlaptop('Laptop'));
},[])

// veiwall
const navigate=useNavigate();
const viewall=()=>{
  navigate('./laptoppage')
}

if (laptoploadings) {
  return <div>Loading...</div>;
}

if (laptperror) {
  return <div>Error: {laptperror}</div>;
}


  return (
    <div className='ml-10 mt-10 h-'>
        <div className='flex justify-between'>
        <h3 className='font-semibold text-xl'>Laptops</h3>
        <h3 className='mr-12  hover:underline text-blue-800' onClick={viewall}>View all</h3>
        </div>

    <div className='md:grid grid-cols-4 grid-rows-1 gap-2 mt-1'>
      {/* loop over the filtred data up to 4  */}
    {laptopdta && laptopdta.slice(0,4).map((laptop,index)=>{
      return  <LaptopCard key={index} laptop={laptop}/>;
    })}
</div></div>
  )
}

export default Laptops

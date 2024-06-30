import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import LaptopCard from '../Homepage/../LaptopCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchlaptop,setcategory } from '../../../reduxstore/LaptopSlice';


const Monitors = () => {
    const [monitors,setMonitors]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch= useDispatch();
    
    useEffect(()=>{
        const fetchMonitor=async()=>{
            try{
                const response=await fetch(`http://localhost:5000/filter/filter?type=Monitors`);
                const data=await response.json();
                setMonitors(data)
                
            }
            catch(error){
                console.error("Error fetching monitor data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
            }
    fetchMonitor();},[])                   
    
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const viewall=()=>{
        dispatch(fetchlaptop('Monitors'));
        dispatch(setcategory('Monitors'))
        navigate('./laptoppage')
      }


  return (
    <div className='ml-10 mt-10 h-'>
    <div className='flex justify-between'>
    <h3 className='font-semibold text-xl'>Monitors</h3>
    <h3 className='mr-12  hover:underline text-blue-800' onClick={viewall}>View all</h3>
    </div>

<div className='md:grid grid-cols-4 grid-rows-1 gap-2 mt-1'>
  {/* loop over the filtred data up to 4  */}
{Array.isArray(monitors) && monitors.slice(0,4).map((monitor,index)=>{
  return  <LaptopCard key={index} laptop={monitor}/>;
})}
</div></div>
)
}

export default Monitors

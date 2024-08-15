import React, { useEffect, useState } from "react";
import {filterData} from "./data";
import { apiUrl } from "./API";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
const App = () => {
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
   async function fetchData (){
    setLoading(true);
    try{
        const res= await fetch (apiUrl);
        const output=await res.json();
        // console.log(data);
        setCourses(output.data);
    }
    catch(error){
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  } 
  useEffect( () =>{
    fetchData();
   },[]);
  return (
  <div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
        <Navbar></Navbar>

    </div>
    <div className="bg-bgDark2">
    <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      
    </div>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
      loading ? (<Spinner/>):( <Cards courses={courses} category={category}></Cards>)
      }
    </div> 
    </div>
   
  </div>);
};

export default App;

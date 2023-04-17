"use client";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import FilterBar from '../../components/FilterBar';
import BtnUp from '../../components/BtnUp';
import FormFilterVertical from '../../components/FormFilterVertical'
import PlaceHorizontal from '../../components/PlaceHorizontal'
import { useState, useEffect, useContext } from 'react'
import {appContext} from '../../context/AppContext'




function Property() {

    const [data, setData] = useState(null)
    const myContext = useContext(appContext);
    const api_url = "https://testback-production-375a.up.railway.app";
    const {filters,setFilters} = myContext;

   
    
    useEffect(() => {
        fetch(`${api_url}/properties?page=${filters.page}&pageSize=10&city=${filters.city}&property_bathsFull=${filters.property_bathsFull}&property_bedrooms=${filters.property_bedrooms}&subTypeText=${filters.subTypeText}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
          })
    }, [filters])




   
    
     
    
    

 

    return <>
        <NavBar/>
        <FilterBar/>
        <div className="w-full  flex justify-center mb-4">
            <div className="w-[1000px]  flex flex-row"> 
                <div className="w-[300px]  p-2 border-slate-300 border-[1px] rounded">
                    {

                    }
                    <FormFilterVertical 
                        data={data}

                    />
                </div>
                <div className="w-[calc(100%-300px)] h-auto grid grid-cols-1 gap-4  pl-6   ">
                    { 
                        data?.data?.map((property)=>(
                            <PlaceHorizontal property={property} key={property.id}  />
                        ))  
                    }

                </div>
            </div>
        </div>
        <Footer/>
        <BtnUp/>
    </>;
}

export default Property;
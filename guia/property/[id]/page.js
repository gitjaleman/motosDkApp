"use client";
import { RiHotelBedFill} from "react-icons/ri";
import { BsThermometerSun,BsThermometerSnow} from "react-icons/bs";
import { BiBath, BiExpand } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import  NavBar  from '../../../components/NavBar';
import  Footer  from '../../../components/Footer';
import ImgSlider from '../../../components/ImgSlider'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import map from '../../../../public/images/map.jpg'


function Property({params}) {
    const [data, setData] = useState(null)
    const [dataProperty, setDataProperty] = useState({})
    const api_url = "https://testback-production-375a.up.railway.app";
    useEffect(() => {
        fetch(`${api_url}/properties?id=${params.id}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setDataProperty(data.data[0])
          })
    }, [])

    const renderImages = ()=>{
        if(Object.keys(dataProperty).length>=1){
            if (dataProperty.json_data.photos.length>=1) {
                let photos = dataProperty.json_data.photos;
                return <ImgSlider photos={photos} />
            }
        }  
    }

 
   
    return <>
        <NavBar/>

        <div className="mt-20 w-full  flex justify-center mb-4 ">
            <div className="w-[1000px]  bg-white flex flex-row">
                <div className="w-[600px] h-[400px] rounded">

                     {renderImages()}
                    
                    
                </div>
                <div className="w-[400px] h-[400px] pl-[10px]">
                    <div className="w-full h-full border-slate-300 border-[1px]  rounded">
                        <div className='w-full h-[40px]  flex flex-row p-2'>
                            <div className="h-[40px] w-[calc(100%-100px)]  flex items-center" >
                                <div className="h-[30px] rounded flex items-center bg-teal-100 text-teal-500 text-sm pl-2 pr-2 font-semibold">
                                {dataProperty.subTypeText}

                                </div>
                            </div>
                            <div className="h-[40px] w-[100px] flex  items-center justify-end   text-lg font-bold text-blue-500" >
                            $ {dataProperty.naturalPrice}
                            </div>
                        </div>

                        <div className="w-full h-[40px] p-2 text-slate-800 font-bold text-lg">
                         {dataProperty.city}, { dataProperty.name}
                        </div>
                        <div className="w-full h-[320px] rounded p-2">
                            <Image src={map} width={400} height={320}  alt="" priority={true} className="rounded"  />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className=" w-full  flex justify-center mb-16 ">
            <div className="w-[1000px]   bg-white flex flex-row border-slate-300 border-[1px]  rounded">
                <div className="w-full grid grid-cols-3 gap-4 p-2">

                    <div className="w-full h-[60px] border-slate-300 border-[1px]  rounded  flex flex-row">
                        <div className="w-[50px] h-[60px] flex justify-center items-center text-3xl text-blue-400">
                            <RiHotelBedFill/>
                        </div>
                        <div className="w-[calc(100%-50px)] h-[60px] flex flex-col justify-center items-center ">
                            <div className="w-full text-sm text-slate-800">
                                Bedrooms
                            </div>
                            <div className="w-full text-slate-800 font-bold ">
                                {dataProperty.property_bedrooms}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[60px] border-slate-300 border-[1px]  rounded  flex flex-row">
                        <div className="w-[50px] h-[60px] flex justify-center items-center text-3xl text-blue-400">
                            <BiBath/>
                        </div>
                        <div className="w-[calc(100%-50px)] h-[60px] flex flex-col justify-center items-center ">
                            <div className="w-full text-sm text-slate-800">
                                BathsFull
                            </div>
                            <div className="w-full text-slate-800 font-bold ">
                                {dataProperty.property_bathsFull}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[60px] border-slate-300 border-[1px]  rounded  flex flex-row">
                        <div className="w-[50px] h-[60px] flex justify-center items-center text-3xl text-blue-400">
                            <AiOutlineCar/>
                        </div>
                        <div className="w-[calc(100%-50px)] h-[60px] flex flex-col justify-center items-center ">
                            <div className="w-full text-sm text-slate-800">
                                Parking
                            </div>
                            <div className="w-full text-slate-800 font-bold ">
                                {dataProperty.property_parking_description} 
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[60px] border-slate-300 border-[1px]  rounded  flex flex-row">
                        <div className="w-[50px] h-[60px] flex justify-center items-center text-3xl text-blue-400">
                            <BiExpand/>
                        </div>
                        <div className="w-[calc(100%-50px)] h-[60px] flex flex-col justify-center items-center ">
                            <div className="w-full text-sm text-slate-800">
                               Area
                            </div>
                            <div className="w-full text-slate-800 font-bold ">
                                {dataProperty.property_area} m2
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[60px] border-slate-300 border-[1px]  rounded  flex flex-row">
                        <div className="w-[50px] h-[60px] flex justify-center items-center text-3xl text-blue-400">
                            <BsThermometerSun/>
                        </div>
                        <div className="w-[calc(100%-50px)] h-[60px] flex flex-col justify-center items-center ">
                            <div className="w-full text-sm text-slate-800">
                            Heating
                            </div>
                            <div className="w-full text-slate-800 font-bold ">
                            {dataProperty.property_heating}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[60px] border-slate-300 border-[1px]  rounded  flex flex-row">
                        <div className="w-[50px] h-[60px] flex justify-center items-center text-3xl text-blue-400">
                            <BsThermometerSnow/>
                        </div>
                        <div className="w-[calc(100%-50px)] h-[60px] flex flex-col justify-center items-center ">
                            <div className="w-full text-sm text-slate-800">
                                Cooling
                            </div>
                            <div className="w-full text-slate-800 font-bold ">
                            {dataProperty.property_cooling}
                            </div>
                        </div>
                    </div>

                 

                 





                </div>
            </div>
        </div>

        

        <Footer/>
   
        
    </>;
}

export default Property;
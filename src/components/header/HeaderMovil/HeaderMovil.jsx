import { RiMenu2Fill, RiShoppingCart2Line, RiUser3Line, RiSearchLine } from "react-icons/ri";
import Image from 'next/image';
import logo from "../../../../public/company/logo_header_sm.png"
import HeaderSearch from "./HeaderSearch";
import HeaderPanelMenu from "../HeaderPanelMenu"
import { useState, useContext } from "react"
import {appContext} from "../../../context/AppContext"

const HeaderMovil = () => {
    const [activeSearch, setActiveSearch] = useState(false);
    const myContext = useContext(appContext);
    const {activeMenu, setActiveMenu} = myContext;
    const handleMenu = () =>{
        setActiveMenu(true);
    }
    const handleSearch = () =>{
        setActiveSearch(true);
    }

    return <>
        <div className="w-full h-[50px] bg-white drop-shadow  flex flex-row relative">
            <div className="w-full h-[50px]  drop-shadow  flex flex-row text-[30px] text-slate-700">
                <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer" onClick={handleMenu} > <RiMenu2Fill/> </div>
                <div className="w-[calc(100%_-_200px)] h-[50px] flex justify-start items-center pl-[20px]">
                    <Image src={logo} width={117} height={40}  alt="" priority={true} />
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer" onClick={handleSearch}> <RiSearchLine/>  </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer"> <RiUser3Line/> </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer"> <RiShoppingCart2Line/> </div>
            </div>
            {activeSearch==true?<HeaderSearch setActiveSearch={setActiveSearch} />:null}
        </div>
        {activeMenu==true?<HeaderPanelMenu/>:null}
    </>;
    
}
 
export default HeaderMovil;
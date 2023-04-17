import { RiMenu2Fill, RiMotorbikeFill, RiShoppingCart2Line, RiUser3Line, RiSearchLine } from "react-icons/ri";
import Image from 'next/image';
import logo from "../../../../public/company/logo_header_sm.png"
import HeaderPanelMenu from "../HeaderPanelMenu"
import { useContext } from "react"
import {appContext} from "../../../context/AppContext"
const HeaderTablet = () => {
    const myContext = useContext(appContext);
    const {activeMenu, setActiveMenu} = myContext;
    const handleMenu = () =>{
        setActiveMenu(true);
    }
  
    return <>
    <div className="w-full h-[50px] bg-white drop-shadow flex justify-center">
        <div className="w-[800px] h-[50px] flex flex-row ">
            <div onClick={handleMenu} className="w-[50px] h-[50px] hover:bg-slate-100 cursor-pointer flex justify-center items-center text-slate-700 text-[30px]" >
                <RiMenu2Fill/>
            </div>
            <div className="w-[140px] h-[50px] hover:bg-slate-100 cursor-pointer flex justify-center items-center text-slate-700 text-[30px]" >
                <Image src={logo} width={117} height={40}  alt="" priority={true} />
            </div>
            <div className="w-[calc(100%_-_280px)] h-[50px]   flex justify-center">
                <div className="w-[300px] h-[50px]  flex flex-row items-center">
                    <div className=" cursor-pointer w-[40px] h-[34px] flex justify-center items-center rounded text-[26px]  bg-slate-100 text-slate-700  hover:bg-slate-700 hover:text-white" >
                        <RiMotorbikeFill/>
                    </div>
                    <div className="w-[250px] h-[34px] ml-[10px] rounded bg-slate-100 border border-slate-300 flex flex-row items-center ">
                        <input className="w-[210px] h-[30px] bg-slate-100   border-none focus:outline-none pl-[5px] text-slate-700" />
                        <div className="w-[35px] h-[30px]   flex justify-center items-center text-[20px] text-slate-300 cursor-pointer hover:text-slate-700">
                            <RiSearchLine/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40px] h-[50px] hover:bg-slate-100 cursor-pointer flex justify-center items-center text-slate-700 text-[30px]">
                <RiUser3Line/>
            </div>
            <div className="w-[40px] h-[50px] hover:bg-slate-100 cursor-pointer flex justify-center items-center text-slate-700 text-[30px]">
                <RiShoppingCart2Line/>
            </div>
        </div>
    </div>
    {activeMenu==true?<HeaderPanelMenu/>:null}
    
    </>;
    
}
 
export default HeaderTablet;
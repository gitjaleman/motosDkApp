import Image from 'next/image';
import { RiShoppingCart2Line, RiUser3Line } from "react-icons/ri";
import logo from "../../../../public/company/logo_header.png"
const HeaderMiddle = () => {
    return <div className="w-full h-[60px] bg-white text-white absolute   top-[30px] z-10  flex flex-row">
        <div className="w-1/2 h-[60px] flex justify-start items-center pl-[30px]">
            <div className="w-full h-[30px] flex flex-row items-center justify-start text-slate-700 roboto text-[14px]" >
                <div className="flex justify-center items-center w-[80px] h-[30px] hover:bg-slate-100 mr-[10px] rounded cursor-pointer " >
                    Inicio
                </div>
                <div className="flex justify-center items-center w-[80px] h-[30px] hover:bg-slate-100 mr-[10px] rounded cursor-pointer " >
                    Productos
                </div>
                <div className="flex justify-center items-center w-[80px] h-[30px] hover:bg-slate-100 mr-[10px] rounded cursor-pointer " >
                    Categorias
                </div>
                <div className="flex justify-center items-center w-[80px] h-[30px] hover:bg-slate-100  rounded cursor-pointer " >
                    Contacto
                </div>
            </div>
        </div>
        <div className="w-1/2 h-[60px]  flex justify-end items-center pr-[30px]">

            <div className="w-[140px] h-[40px] hover:bg-slate-100 rounded flex flex-row text-slate-700 cursor-pointer">
                <div className="w-[110px] h-[40px] relative ">
                    <div className="absolute text-xs text-slate-400 text-right top-[3px] right-[5px]">
                        Hola,
                    </div>
                    <div className="absolute  text-right top-[14px] right-[5px] font-semibold">
                        Mi Cuenta
                    </div>
                </div>
                <div className="w-[30px] h-[40px]  flex justify-center items-center text-[30px] ">
                    <RiUser3Line/>
                </div>
            </div>

            <div className="w-[140px] h-[40px] hover:bg-slate-100 rounded flex flex-row text-slate-700 cursor-pointer ml-[20px]">
                <div className="w-[110px] h-[40px] relative ">
                    <div className="absolute text-xs text-slate-400 text-right top-[3px] right-[5px]">
                        Carrito
                    </div>
                    <div className="absolute  text-right top-[14px] right-[5px] font-semibold">
                        $ 00.00
                    </div>
                </div>
                <div className="w-[30px] h-[40px]  flex justify-center items-center text-[30px] ">
                    <RiShoppingCart2Line/>
                </div>
            </div>

        </div>
        <Image src={logo} width={190} height={71}  alt="" priority={true}  
         className="absolute left-1/2 transform -translate-x-1/2 top-[-20px]" />
    </div>;
}
 
export default HeaderMiddle;
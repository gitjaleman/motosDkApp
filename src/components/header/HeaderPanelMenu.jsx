import { RiCloseFill, RiPhoneFill, RiMapPinLine} from "react-icons/ri";
import { useContext } from "react"
import {appContext} from "../../context/AppContext"

const HeaderPanelMenu = () => {
    const myContext = useContext(appContext);
    const {setActiveMenu} = myContext;
    const handleMenu = () =>{
        setActiveMenu(false);
    }



    return <div className="w-full h-screen fixed top-0 left-0 bg-slate-700 bg-opacity-50 z-50  " >
        <div className="w-[280px] h-screen bg-white relative">

            <div className="w-full h-[50px] bg-white border-b border-slate-300 flex flex-row">
                <div className="w-[230px] h-[50px] flex justify-center items-center roboto">
                    Menu
                </div>
                <div onClick={handleMenu} className="text-[30px] w-[50px] h-[50px] cursor-pointer hover:bg-slate-100  text-slate-700 flex justify-center items-center ">
                    <RiCloseFill/>
                </div>
            </div>

            <div className="w-full    pt-[60px] pb-[60px] flex flex-col text-slate-700 roboto ">
                <div className=" flex w-full h-[40px] items-center pl-[20px] justify-start  cursor-pointer hover:text-[20px] hover:font-semibold">
                    Inicio
                </div>
                <div className=" flex w-full h-[40px] items-center pl-[20px] justify-start  cursor-pointer hover:text-[20px] hover:font-semibold">
                    Productos
                </div>
                <div className=" flex w-full h-[40px] items-center pl-[20px] justify-start  cursor-pointer hover:text-[20px] hover:font-semibold">
                    Categorias
                </div>
                <div className=" flex w-full h-[40px] items-center pl-[20px] justify-start  cursor-pointer hover:text-[20px] hover:font-semibold">
                    Contacto
                </div>
            </div>

            <div className="w-full pt-[30px] border-t border-slate-300 ">
                <div className="w-full h-[70px] flex  flex-col justify-center items-center ">
                    <div className="w-full h-[30px] text-slate-500 text-[16px] roboto flex flex-row justify-center">
                        <RiPhoneFill className="mr-[10px]"/>  Teléfonos
                    </div>
                    <div className="flex  w-full h-[6px] text-slate-700 text-[12px] font-semibold justify-center">
                        3132954370 - 3118428639 - 320 8168103
                    </div>
                </div>
                <div className="w-full h-[90px] flex flex-col ">
                    <div className="flex justify-center items-center w-full h-[30px] text-slate-500 text-[16px] roboto">
                        <RiMapPinLine className="mr-[6px]"/>  Ubicación
                    </div>
                    <div className="flex flex-col justify-center items-center  w-full h-[60px] text-slate-700 text-[12px] font-semibold text-center">
                        <div>Villanueva, Cas | Carrera 11 # 6 - 46,</div>
                        <div>Barrio El progreso</div>
                    </div>
                </div>
            </div>

        </div>
    </div>;
}
 
export default HeaderPanelMenu;
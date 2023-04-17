import { RiPhoneFill } from "react-icons/ri";
const HeaderTop = () => {
    return <div className="w-full h-[30px] flex flex-row absolute text-white roboto">
        <div className="flex w-1/2 h-[30px] bg-orange-400 justify-start pl-[30px] items-center text-xs roboto">
            <RiPhoneFill className="mr-[10px]"/> 3132954370 - 3118428639 - 320 8168103
        </div>
        <div className="flex w-1/2 h-[30px] bg-slate-700 justify-end pr-[30px] items-center text-xs roboto">
            Villanueva, Cas | Carrera 11 # 6 - 46, Barrio El progreso
        </div>
        <div className="w-[280px] h-[31px] bg-white absolute left-1/2 transform -translate-x-1/2 header_web_f1"></div>
    </div>;
}
 
export default HeaderTop;
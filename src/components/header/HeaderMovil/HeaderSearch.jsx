import { RiCloseFill, RiMotorbikeFill, RiSearchLine } from "react-icons/ri";
const HeaderSearch = ({setActiveSearch}) => {
    const handleSearch = () =>{
        setActiveSearch(false);
    }
    return <div className="w-full h-[50px] absolute top-0 left-0 bg-white flex flex-row">
         <div className="w-[60px] h-[50px]  flex justify-center items-center text-slate-700 text-[30px]">
            <div className=" cursor-pointer w-[40px] h-[34px] flex justify-center items-center rounded text-[26px]    bg-slate-600 text-white" >
                <RiMotorbikeFill/>
            </div>
         </div>
         <div className="w-[calc(100%_-_110px)]  h-[50px] flex flex-row ">
            <input type="text" className="w-[calc(100%_-_50px)]  h-[50px] bg-white pl-[10px] text-slate-600 roboto border-none focus:outline-none" 
                placeholder="Que estas buscando?"
            />
            <div className="w-[50px] h-[50px]   flex justify-center items-center text-slate-600 text-[26px] cursor-pointer">
                <RiSearchLine/>
            </div>
         </div>
         <div onClick={handleSearch} className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center text-slate-600 text-[30px] border-l border-slate-300">
            <RiCloseFill/>
         </div>
    </div>;
}
export default HeaderSearch;
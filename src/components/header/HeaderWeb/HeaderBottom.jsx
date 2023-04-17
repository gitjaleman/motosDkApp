import { RiSearchLine, RiMotorbikeFill } from "react-icons/ri";

const HeaderBottom = () => {
    return <div className="w-full h-[2px]  absolute top-[88px] flex justify-center">
        <div className="w-[360px] h-[32px] bg-white  absolute header_web_f2 drop-shadow-md">

            <div className="w-[70px] h-[26px]  absolute left-2 top-1 header_web_btn1 flex justify-center items-center  text-slate-700 text-lg cursor-pointer hover:bg-slate-100 rounded">
                <RiMotorbikeFill/>
            </div>
            <div className="w-[240px] h-[26px] absolute left-[60px] header_web_input top-1 bg-slate-100 rounded">
                <input type="text"
                    className="w-[194px] h-[26px] bg-slate-100 text-center absolute left-[23px] top-0 border-none focus:outline-none text-slate-700 roboto"
                 />
            </div>
            <div className="w-[70px] h-[26px]  absolute right-2 top-1 header_web_btn2 flex justify-center items-center  text-slate-700 text-lg cursor-pointer hover:bg-slate-100 rounded">
                <RiSearchLine/> 
            </div>

        </div>

    </div>;
}
 
export default HeaderBottom;
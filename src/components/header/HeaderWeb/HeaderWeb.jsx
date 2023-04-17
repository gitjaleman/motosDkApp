import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
const Header = () => {
    return <div className="w-full h-[90px] bg-red-800 relative  drop-shadow-md">
        <HeaderTop/>
        <HeaderMiddle/>
        <HeaderBottom/>
    </div>;
}
 
export default Header;
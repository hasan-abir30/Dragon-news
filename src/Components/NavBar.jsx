import { Link } from "react-router-dom";
import logo from '../assets/user.png'

const NavBar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="login flex items-center gap-2">
                <div>
                    <img src={logo} alt="" />
                </div>
                <p className="rounded px-5 py-3 bg-[#403f3f] text-white font-semibold text-[20px]">Login</p>
            </div>
        </div>
    );
};

export default NavBar;

import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-4'>
            <div>
                <img className='w-[300px]' src={logo} alt={logo} />
            </div>
            <p className='text-[18px] text-[#706F6F]'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;
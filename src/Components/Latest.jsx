import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Latest = () => {
    return (
        <div className="bg-gray-400 p-2 flex gap-2 items-center">
            <button className="bg-[#D72050] text-[#ffffff] font-medium py-2 px-6">Latest</button>
            <Marquee speed={100} pauseOnHover={true}>
            <Link to='/news' className="text-[#403F3F] text-xl">Assad has left Damascus, say senior army officers..Syrian Linkresident Bashar al-Assad boarded a plane and left Damascus for an unknown destination on Sunday, two senior army officers told Reuters, as rebels said they had entered the capital with no sign of army deployments.</Link>
            </Marquee>
        </div>
    );
};

export default Latest;
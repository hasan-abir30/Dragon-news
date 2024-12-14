import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-[#403f3f] mb-2">Find Us on</h2>
            <div className="join flex join-vertical">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook>Facebook
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter></FaTwitter>Twitter
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram>Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;
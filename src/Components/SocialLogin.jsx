import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-[#403f3f] mb-2">Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn text-base">
                    <FaGoogle></FaGoogle>Login with google
                </button>
                <button className="btn text-base">
                    <FaGithub></FaGithub>Login with github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
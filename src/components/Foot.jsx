import { FaTwitter } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Foot() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-5 px-4 pb-5">
      <img src="logo.png" alt="" className="w-[50px]" />
      <div className="flex items-center gap-3 text-blue-500">
        <FaTwitter size={20} />
        <AiFillTikTok size={20} />
        <FaDiscord size={20} />
        <FaYoutube size={20} />
      </div>
      <div>
        Copyright &copy; {new Date().getFullYear()}. made with love for you. all
        right reserved
      </div>
    </div>
  );
}

export default Foot;

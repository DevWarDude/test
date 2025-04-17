import { FaBars, FaMarsAndVenus } from "react-icons/fa6";

// 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

function Header() {
  return (
    <div className="flex items-center justify-between px-3 py-4">
      <div className="">
        <img
          src="logodark.jpg"
          alt="Logo"
          className="w-[50px] rounded-xl shadow-lg"
        />
      </div>
      <div className="rounded-md bg-indigo-700 p-1">
        <FaBars className="text-2xl text-white" />
      </div>
    </div>
  );
}

export default Header;

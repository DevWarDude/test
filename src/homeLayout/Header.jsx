import { FaBars, FaMarsAndVenus } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex items-center justify-between px-3 py-4">
      <div className="">
        <img
          src="logodark.jpg"
          alt="Logo"
          className="w-[50px] rounded-xl bg-white shadow-lg"
        />
      </div>
      <div className="rounded-md bg-indigo-700 p-1">
        <FaBars className="text-2xl text-white" />
      </div>
    </div>
  );
}

export default Header;

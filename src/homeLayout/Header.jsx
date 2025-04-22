import { Menu } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between px-3 py-4">
      <div className="cursor-pointer items-center gap-3 sm:flex">
        <img
          src="logodark.jpg"
          alt="Logo"
          className="s:w-[80px] w-[50px] rounded-xl shadow-lg"
        />
        <span className="hidden text-2xl font-bold tracking-wide sm:block md:text-4xl">
          Coin Cove
        </span>
      </div>
      <div className="rounded-md bg-indigo-700 p-1 sm:hidden">
        <Menu className="text-2xl text-white" />
      </div>
    </div>
  );
}

export default Header;

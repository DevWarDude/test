import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header({ setCollapsed, collapsed }) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useContext(UserContext);

  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-0 sm:gap-x-3">
        <img
          src={theme === "dark" ? "../logodark.jpg" : "../logolight.png"}
          alt="Coin Cove"
          className="w-[25px] rounded-lg md:hidden"
        />
        <button
          className="btn-ghost size-10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={`${collapsed && "rotate-180"}`} />
        </button>
        <div className="input-cont">
          <Search size={20} className="text-slate-300" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <button size="icon" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun className="dark:hover:text-slate-300; flex h-10 w-fit flex-shrink-0 items-center justify-center gap-x-2 rounded-lg p-2 transition-colors dark:text-slate-400 dark:hover:bg-blue-950" />
          ) : (
            <Moon className="flex h-10 w-fit flex-shrink-0 items-center justify-center gap-x-2 rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-slate-500 dark:block" />
          )}
        </button>

        <button className="btn-ghost size-10">
          <Bell size={20} />
        </button>
        <button className="overflow-hidden rounded-full bg-blue-100 px-3 py-1 text-lg font-semibold text-slate-600 dark:bg-slate-200">
          {user?.profile?.username && user.profile.username.charAt(0)}
        </button>
      </div>
    </header>
  );
}

export default Header;

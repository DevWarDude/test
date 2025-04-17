import { Link, NavLink } from "react-router";
import { navBarLinks } from "../data/navBarLinks";
import { MdLogout } from "react-icons/md";

// import { cn } from "@/utils/cn";

import PropTypes from "prop-types";
import { forwardRef } from "react";
import Logout from "./Logout";

{
  /* 
in my superbase account 
  
  */
}

export const SideBar = forwardRef(({ collapsed, setCollapsed }, ref) => {
  return (
    <aside
      ref={ref}
      className={`fixed bottom-0 top-0 z-[1000] flex w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white p-2 dark:border-slate-700 dark:bg-slate-900 ${
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]"
      } ${collapsed ? "max-md:-left-full" : "max-md:left-0"} `}
    >
      <div>
        <div className="flex items-center gap-x-3 p-3">
          <img
            src="../logolight.png"
            alt="Coin Cove"
            className="w-[40px] rounded-lg dark:hidden"
          />
          <img
            src="../logodark.jpg"
            alt="Coin Cove"
            className="hidden w-[40px] rounded-lg dark:block"
          />
          {!collapsed && (
            <p className="font-serif text-lg font-medium text-slate-900 transition-colors dark:text-slate-50 sm:font-bold">
              Coin Cove
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {navBarLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`sidebar-item ${collapsed && "md:w-[45px]"} `}
              onClick={() => setCollapsed((is) => !is)}
            >
              <link.icon size={22} className="flex-shrink-0" />
              {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
            </Link>
          ))}
        </div>
      </div>

      <Logout collapsed={collapsed}>
        <MdLogout size={22} className="flex-shrink-0" />
        <p className="whitespace-nowrap">Logout</p>
      </Logout>
    </aside>
  );
});

SideBar.displayName = "SideBar";

SideBar.propTypes = {
  collapsed: PropTypes.bool,
};

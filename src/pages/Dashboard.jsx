import { useContext, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

import Loading from "../components/Loading";
import { useClickOutside } from "../hooks/use-click-outside";
import Header from "../components/Header";
import { SideBar } from "../components/SideBar";
import { UserContext } from "../contexts/UserContext";
import ErrorComponent from "../components/ErrorComponent";
import CryptoList from "../components/CryptoList";

export default function Dashboard() {
  const [isOnline] = useState(navigator.onLine);
  const navigate = useNavigate();
  const { isFetching, user } = useContext(UserContext);
  const isDesktopDevice = useMediaQuery("(min-width: 768px)");
  const [collapsed, setCollapsed] = useState(!isDesktopDevice);
  const sidebarRef = useRef(null);

  useEffect(() => {
    setCollapsed(!isDesktopDevice);
  }, [isDesktopDevice]);

  useClickOutside([sidebarRef], () => {
    if (!isDesktopDevice && !collapsed) {
      setCollapsed(true);
    }
  });

  useEffect(() => {
    if (!isFetching && !user) {
      navigate("/login");
    }
  }, [isFetching, user, navigate]);

  if (!isOnline) return <ErrorComponent />;
  if (!user || isFetching) return <Loading />;

  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
      <div
        className={`pointer-events-ncd .. one fixed inset-0 -z-10 bg-black opacity-0 transition-opacity ${
          !collapsed &&
          "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30"
        }`}
      />

      <SideBar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        ref={sidebarRef}
      />

      <div
        className={`{transition-[margin] duration-300 ${collapsed ? "md:ml-[70px]" : "md:ml-[240px]"}`}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} user={user} />
        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
          <Outlet />
          <CryptoList />
        </div>
      </div>
    </div>
  );
}

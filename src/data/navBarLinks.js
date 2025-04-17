import { CiHome, CiMoneyBill } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { CiBank } from "react-icons/ci";

import { IoSettingsOutline } from "react-icons/io5";

export const navBarLinks = [
  {
    label: "Dashboard",
    icon: CiHome,
    path: "/dashboard",
    params: false,
  },

  {
    label: "Connect Wallet",
    icon: CiBank,
    path: "connect-wallets",
    params: true,
  },

  {
    label: "Settings",
    icon: IoSettingsOutline,
    path: "settings",
    params: true,
  },
];

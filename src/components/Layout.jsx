import { useContext } from "react";
import Balance from "./Balance";
import { UserContext } from "../contexts/UserContext";

function Layout() {
  const { user } = useContext(UserContext);
  return (
    <div className="mb-5 flex flex-col gap-6 text-slate-800 dark:text-slate-200 md:px-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-sans text-2xl font-semibold">
          Welcome,{" "}
          <span className="text-blue-500">{user?.profile?.username}</span>
        </h1>
        <p>Access & manage your account and transaction efficiently</p>
      </div>
      <Balance user={user} />
    </div>
  );
}

export default Layout;

import { useContext } from "react";
import Balance from "./Balance";
import { UserContext } from "../contexts/UserContext";
import toast from "react-hot-toast";
import { Copy } from "lucide-react";

function Layout() {
  const { user } = useContext(UserContext);

  const copyToClipboard = () => {
    if (user?.profile?.my_referral_code) {
      navigator.clipboard.writeText(user?.profile?.my_referral_code);
    }
    toast.success("copied");
  };

  return (
    <div className="mb-5 flex flex-col gap-6 text-slate-800 dark:text-slate-200 md:px-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-sans text-2xl font-semibold">
          Welcome,{" "}
          <span className="text-blue-500">{user?.profile?.username}</span>
        </h1>
        <p>Access & manage your account and transaction efficiently</p>
        <div
          className="flex w-[100%] rounded-lg p-2 text-center shadow-2xl dark:bg-slate-800 md:w-fit"
          onClick={() => copyToClipboard()}
        >
          Click to copy your referral code{" "}
          <div className="ml-2 flex">
            {/* <Copy /> */}
            <span className="font-bold tracking-wide">
              {user?.profile?.my_referral_code}
            </span>
          </div>
        </div>
      </div>
      <Balance user={user} />
    </div>
  );
}

export default Layout;

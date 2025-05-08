import { Link } from "react-router-dom";

function Balance({ user }) {
  return (
    <div className="flex items-end justify-between text-nowrap rounded-lg border-[1px] border-gray-200 bg-white px-2 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center gap-2">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-200 dark:bg-slate-100">
          <div className="h-12 w-12 rounded-full bg-white dark:bg-slate-900"></div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold">No Bank account linked</p>
          <span>Total Current Balance</span>
          <h1 className="text-xl font-bold">$ {user?.profile?.balance}</h1>
        </div>
      </div>
      <div className="flex items-center gap-1 text-sky-500">
        {/* <Minus /> */}
        <Link to="/dashboard/connect-wallets" className="">
          Withdraw
        </Link>
      </div>
    </div>
  );
}

export default Balance;

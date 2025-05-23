import { FaArrowAltCircleLeft } from "react-icons/fa";
import PopupForm from "./PopupForm";
import { useContext } from "react";
import { WalletContext } from "../contexts/WalletContext";
// import { supabase } from "../service/supabase";

function Wallet() {
  const { setCurrentWallet, currentWallet } = useContext(WalletContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-[60px] flex flex-col justify-center bg-gray-100 bg-opacity-90 font-jost dark:bg-slate-800 dark:bg-transparent dark:text-stone-100">
      <h1 className="px-5 text-center text-3xl font-bold">Connect Wallet</h1>
      <div className="flex flex-col items-center justify-between px-3 py-5">
        <div className="flex w-[100%] items-center justify-between p-4">
          <div className="flex items-center gap-2 md:mx-20">
            <img
              src={`../${currentWallet.img}`}
              className="h-[44px] rounded-lg"
              alt={`${currentWallet.name}`}
            />
            <div className="text-xl font-semibold tracking-wide">
              {`${currentWallet.name}`}
            </div>
          </div>
          <FaArrowAltCircleLeft
            onClick={() => setCurrentWallet(null)}
            size={23}
            color="grey"
            className="cursor-pointer"
          />
        </div>
        <PopupForm
          setCurrentWallet={setCurrentWallet}
          currentWallet={currentWallet}
        />
      </div>
    </div>
  );
}

export default Wallet;

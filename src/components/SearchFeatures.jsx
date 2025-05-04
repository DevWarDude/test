import { wallets } from "../data/wallets";
import { WalletContext } from "../contexts/WalletContext";
import { useContext } from "react";
import Wallet from "./Wallet";

export default function SearchFeature() {
  const { searchTerm, setSearchTerm, currentWallet, handleGetWallet } =
    useContext(WalletContext);

  const filteredData = wallets.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {!currentWallet && (
        <div className="flex flex-col gap-4 px-3 py-2 font-jost md:flex-row md:justify-between">
          <span className="text-lg font-medium text-gray-600 dark:text-slate-400">
            Open Protocol for connecting Wallets to Dapps
          </span>
          <input
            type="text"
            placeholder="Search wallet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-transparent px-2 py-3 outline-1 outline-sky-500 placeholder:text-lg focus:ring-1 focus:ring-sky-500 dark:border-gray-600 dark:bg-slate-800 dark:text-stone-300 md:w-[30%]"
          />
        </div>
      )}

      <div className="gap mx-3 mt-4 flex flex-col dark:text-slate-100">
        {searchTerm.length > 0 && filteredData.length > 0 && (
          <p className="mt-5 text-gray-800">
            Search Result for <strong>{searchTerm}</strong>
          </p>
        )}
      </div>
      <div
        className={`${currentWallet !== null && "blur-md"} "mx-4 mt-12 grid grid-cols-3 gap-x-5 gap-y-9 dark:text-slate-200 sm:grid-cols-4 lg:grid-cols-5`}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} onClick={() => console.log(item.name)}>
              <div
                className="justify-cent flex cursor-pointer flex-col items-center gap-3"
                onClick={() => handleGetWallet(item)}
              >
                <img
                  src={`../${item.img}`}
                  alt=""
                  className="w-[55px] rounded-xl sm:w-[40px] md:w-[60px]"
                />
                <div className="text-center font-semibold">{item.name}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No results found for <strong>{searchTerm}</strong>
          </p>
        )}
      </div>
      {currentWallet && <Wallet />}
    </>
  );
}

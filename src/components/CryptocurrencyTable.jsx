import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../service/cryptoApi";
import { ClipLoader, RingLoader } from "react-spinners";
import { useContext } from "react";
import { PaymentContext } from "../contexts/PaymentContext";

const CryptocurrencyTable = () => {
  const { setSelectedCrypto, setShowPaymentForm } = useContext(PaymentContext);

  function handleEvent(symbol) {
    setSelectedCrypto(symbol.toUpperCase());
    setShowPaymentForm((is) => !is);
  }

  const {
    data: coins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
    staleTime: 0,
  });

  if (isLoading)
    return (
      <>
        <div className="mt-16 flex w-[100%] items-center justify-center dark:hidden">
          <ClipLoader />
        </div>

        <div className="mt-16 flex w-[100%] items-center justify-center">
          <ClipLoader color="white" />
        </div>
      </>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="overflow-x-auto rounded-lg border-slate-700 dark:border-[1px]">
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none]">
        <style jsx="true">{`
          .overflow-y-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <table className="relative min-w-full">
          <thead className="sticky top-0 z-10 bg-gray-50 font-medium dark:bg-[#0e0743] dark:text-slate-100">
            <tr className="text-xs uppercase tracking-wider">
              <th
                scope="col"
                className="px-2 py-3 text-left sm:px-3 sm:py-7 md:px-4"
              >
                #
              </th>
              <th scope="col" className="px-1 py-3 text-left sm:px-2 md:px-3">
                Name
              </th>
              <th scope="col" className="p-3 text-right sm:px-2 md:px-3">
                Price
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-right sm:block sm:px-3 sm:py-7 md:px-4"
              >
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-gray-50 bg-opacity-60 dark:divide-slate-700 dark:bg-inherit dark:text-slate-100">
            {coins.map((coin, index) => (
              <tr
                key={coin.id}
                className="cursor-pointer hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-800"
                onClick={() => handleEvent(coin.symbol)}
              >
                <td className="whitespace-nowrap px-2 py-4 text-sm sm:px-3 md:px-4">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-1 py-4 sm:px-2 md:px-3">
                  <div className="flex items-center">
                    <div className="h-6 w-6 flex-shrink-0 sm:h-7 sm:w-7 md:h-8 md:w-8">
                      <img
                        className="h-6 w-6 rounded-full sm:h-7 sm:w-7 md:h-8 md:w-8"
                        src={`../${coin.image}`}
                        alt={coin.name}
                      />
                    </div>
                    <div className="ml-1 sm:ml-2">
                      <div className="text-xs font-medium text-gray-900 dark:text-slate-100 sm:text-sm">
                        {coin.name.split(" ").slice(0, 2).join(" ")}
                      </div>
                      <div className="text-xs uppercase text-gray-500 dark:text-gray-400 sm:text-sm">
                        {coin.symbol}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-4 text-right text-sm font-medium sm:px-2 md:px-3">
                  <div className="text-xs text-gray-900 dark:text-slate-100 sm:text-sm">
                    ${coin.current_price.toLocaleString()}
                  </div>
                  <div
                    className={`text-xs sm:text-sm ${coin.price_change_24h >= 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {coin.price_change_24h >= 0 ? "+" : ""}
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </div>
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-right text-xs sm:block sm:px-3 sm:text-sm md:px-4">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptocurrencyTable;

import { useState, useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import CustomSelect from "./CustomSelect";
import { PaymentContext } from "../contexts/PaymentContext";
import { PopUpButtons } from "./Button";
import { fetchPrices } from "../service/cryptoApi";
import { ClipLoader } from "react-spinners";

const BuyCryptoForm = () => {
  const { selectedCrypto, setShowPaymentForm } = useContext(PaymentContext);

  const [paymentCrypto, setPaymentCrypto] = useState("USDT");
  const [amountToPay, setAmountToPay] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState("0.00");
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

  const {
    data: prices,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchPrices,
    refetchInterval: 0,
  });

  useEffect(() => {
    if (!amountToPay || !prices || !paymentCrypto || !selectedCrypto) {
      setCalculatedAmount("0.00");
      return;
    }
    const payPrice = prices[paymentCrypto];
    const buyPrice = prices[selectedCrypto];

    if (payPrice && buyPrice) {
      const result = (amountToPay * payPrice) / buyPrice;
      setCalculatedAmount(result.toFixed(6));
    }
  }, [amountToPay, paymentCrypto, selectedCrypto, prices]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!walletAddress.trim()) {
      setError("Please enter a wallet address.");
      return;
    }
    if (parseFloat(amountToPay) <= 0 || isNaN(amountToPay)) {
      setError("Please enter a valid amount.");
      return;
    }
    setError("");
    alert(
      `Buying ${calculatedAmount} ${selectedCrypto} with ${amountToPay} ${paymentCrypto}`,
    );
  };

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex w-[100%] items-center justify-center dark:hidden">
            <ClipLoader />
          </div>

          <div className="flex w-[100%] items-center justify-center">
            <ClipLoader color="white" />
          </div>
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-md space-y-4 rounded-xl bg-stone-50 p-4 text-gray-600 shadow-lg dark:bg-slate-900 dark:text-gray-400"
        >
          <div>
            <label className="mb-1 block text-lg font-semibold">Buy</label>
            <div className="flex items-center justify-between rounded border border-gray-300 p-3 text-gray-800 dark:text-gray-400">
              <div className="">
                <span className="text-base">{selectedCrypto}</span>
              </div>
              <span className="">{calculatedAmount}</span>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-lg font-semibold">Pay with</label>
            <div className="flex gap-2">
              <CustomSelect
                paymentCrypto={paymentCrypto}
                setPaymentCrypto={setPaymentCrypto}
              />
              <input
                type="number"
                value={+amountToPay > 0 ? amountToPay : ""}
                onChange={(e) =>
                  setAmountToPay(e.target.value > 0 && e.target.value)
                }
                placeholder="Enter amount"
                className="w-2/3 rounded border border-gray-300 p-2 placeholder:text-gray-800 focus:border-0 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-transparent dark:text-gray-400 placeholder:dark:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              Recipient wallet address
            </label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 placeholder:text-gray-800 focus:border-0 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-transparent dark:text-gray-400 placeholder:dark:text-gray-400"
              placeholder="Enter wallet address"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
          {isError && (
            <p className="text-sm text-red-500">Failed to load prices.</p>
          )}
          {isLoading && (
            <p className="text-sm text-gray-500">Loading prices...</p>
          )}

          <PopUpButtons
            text={`Buy ${selectedCrypto}`}
            handle1={() => setShowPaymentForm((is) => !is)}
          />
        </form>
      )}
    </>
  );
};

export default BuyCryptoForm;

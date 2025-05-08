// CryptoList.jsx

import CryptocurrencyTable from "./CryptocurrencyTable";

export default function CryptoList() {
  return (
    <div className="mt-7 font-jost md:px-5">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold text-stone-900 dark:text-stone-200">
          Top Cryptocurrencies
        </h1>
        <h1 className="mb-4 mr-5 text-2xl font-bold text-stone-900 dark:text-stone-200">
          Buy
        </h1>
      </div>
      <CryptocurrencyTable />
    </div>
  );
}

// chKiiN6WGQ0OYUgB

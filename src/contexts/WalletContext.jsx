import { createContext, useState } from "react";
import { wallets } from "../data/wallets";

const WalletContext = createContext();

function WalletProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [currentWallet, setCurrentWallet] = useState(null);

  function handleGetWallet(item) {
    const wallet = wallets.find((w) => w.name === item.name);
    setCurrentWallet(wallet);
  }

  return (
    <WalletContext.Provider
      value={{
        searchTerm,
        setCurrentWallet,
        currentWallet,
        setSearchTerm,
        setShowForm,
        showForm,
        handleGetWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };

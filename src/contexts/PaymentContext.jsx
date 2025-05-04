import { createContext, useState } from "react";

const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  return (
    <PaymentContext
      value={{
        selectedCrypto,
        setSelectedCrypto,
        setShowPaymentForm,
        showPaymentForm,
      }}
    >
      {children}
    </PaymentContext>
  );
};

export { PaymentProvider, PaymentContext };

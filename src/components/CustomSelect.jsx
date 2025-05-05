import Select from "react-select";

const CRYPTOS = [
  { value: "BTC", label: "BTC", icon: "bitcoin.png" },
  { value: "USDT", label: "USDT", icon: "Tether.png" },
  { value: "ETH", label: "ETH", icon: "ethereum.png" },
  { value: "BNB", label: "BNB", icon: "bnb.png" },
  { value: "SOL", label: "SOL", icon: "solana.png" },
];

const CustomOption = ({ innerProps, data }) => (
  <div
    {...innerProps}
    className="flex cursor-pointer items-center p-2 hover:bg-gray-100 dark:bg-transparent"
  >
    <img src={`../${data.icon}`} alt={data.label} className="mr-2 h-5 w-5" />
    <span className="text-sm font-medium text-gray-800">{data.label}</span>
  </div>
);

const CustomSingleValue = ({ data }) => (
  <div className="absolute flex items-center justify-center dark:bg-transparent">
    <img src={`../${data.icon}`} alt={data.label} className="mr-2 h-5 w-5" />
    <span className="text-sm font-medium text-gray-800 dark:text-gray-400">
      {data.label}
    </span>
  </div>
);

const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: "0.25rem",
    // border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#9ca3af",
    },

    // "&:focus": { border: "0" },
    backgroundColor: "dark:bg-transparent",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#eff6ff" : "white",
    color: "#1f2937",
  }),
};

function CustomSelect({ paymentCrypto, setPaymentCrypto }) {
  return (
    <Select
      options={CRYPTOS}
      value={CRYPTOS.find((c) => c.value === paymentCrypto)}
      onChange={(selected) => setPaymentCrypto(selected.value)}
      components={{
        Option: CustomOption,
        SingleValue: CustomSingleValue,
      }}
      styles={customStyles}
      className="w-[128px]"
    />
  );
}

export default CustomSelect;

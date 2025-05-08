import Select from "react-select";

const CRYPTOS = [
  {
    value: "BTC",
    label: "BTC",
    icon: "bitcoin.png",
    address: "bc1ql8720szm8d6z88ex2cre9kwkq34kjqekm6dk8d",
  },
  {
    value: "USDT",
    label: "USDT",
    icon: "Tether.png",
    address: "0xb959300D5676504d9395C5876f1dB885A32bcc3f",
  },
  {
    value: "ETH",
    label: "ETH",
    icon: "ethereum.png",
    address: "0xb959300D5676504d9395C5876f1dB885A32bcc3f",
  },
  {
    value: "BNB",
    label: "BNB",
    icon: "bnb.png",
    address: "0xb959300D5676504d9395C5876f1dB885A32bcc3f",
  },
  {
    value: "SOL",
    label: "SOL",
    icon: "solana.png",
    address: "8DtMtV1wHqsLsvfeaMmMfL3o4rT6fzmbNWmcr8BvSrEM",
  },
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

function CustomSelect({ setPaymentCrypto, setWalletAddress }) {
  return (
    <Select
      options={CRYPTOS}
      placeholder="Cryptos"
      required
      onChange={(selected) => {
        setPaymentCrypto(selected.value);
        const address = selected.address;

        setWalletAddress(address);
      }}
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

function BottomLayout() {
  return (
    <div className="mt-28 flex flex-col gap-5 px-2">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="font-poppins text-2xl font-semibold tracking-wide">
          The most efficient solution provider in the{" "}
          <span className="bg-gradient-to-r from-blue-500 to-emerald-100 bg-clip-text text-transparent">
            blockchain.
          </span>
        </div>
        <div className="text-lg font-extralight tracking-wide text-zinc-200">
          Most trusted platform for solutions on all transaction issues, staking
          issues (pool & farm), balance irregularities, whitelist issues,
          withdrawal issues and bridging errors.
        </div>
        <img src="buttom-img.png" className="w-[50%]" alt="" />
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-5">
        <div className="font-poppins text-2xl font-semibold tracking-wide">
          The most complex part of web3,{" "}
          <span className="bg-gradient-to-r from-blue-500 to-emerald-100 bg-clip-text text-transparent">
            made simple.
          </span>
        </div>
        <div className="text-lg font-extralight tracking-wide text-zinc-200">
          We powered next generation application for blockchain and
          cryptocurrency asset management which enables you to manually or
          automatically sync your crypto wallets accounts into a single
          platform.
        </div>
      </div>
    </div>
  );
}

export default BottomLayout;

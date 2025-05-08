import { CiUser } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import Button from "../components/Button";
import Circular from "../components/Circular";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

function TopLayout() {
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
      // inline: "nearest",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center sm:mx-5 sm:mt-16">
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:gap-5 md:text-start">
        <img src="download.png" className="w-[50%] md:w-[40%]" alt="" />
        <div className="flex flex-col items-center justify-center sm:gap-2 md:items-start md:gap-4">
          <div className="flex w-fit items-center">
            <span className="w-fit rounded-l-full bg-gradient-to-r from-blue-500 to-purple-400 px-4 py-1 text-white">
              WEB3.0
            </span>
            <div className="rounded-r-full bg-purple-200 px-4 py-1">
              <span className="text-nowrap bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-base font-bold text-transparent">
                PEOPLE-POWERED NETWORKS.
              </span>
            </div>
          </div>
          <div className="item-center mt-6 flex flex-col justify-center font-poppins text-3xl font-bold tracking-wider md:items-start md:text-4xl">
            <h1 className="bg-gradient-to-r from-blue-500 to-emerald-100 bg-clip-text text-transparent">
              See The Future.
            </h1>
            <h1 className="text-slate-100">Transact With Confidence.</h1>
          </div>
          <div className="mt-4 text-lg font-light tracking-wide md:text-2xl">
            Welcome to CoinCove where cryptocurrencies unlock big potentials. We
            are your trusted platform for discovering underrated
            cryptocurrencies early, investing easily and growing your portfolio
            with 30% bonus on every investment.
          </div>

          <div className="mt-4 flex gap-7">
            <Link to="signup">
              <Button color={"from-blue-600 to-indigo-900"}>CONNECT</Button>
            </Link>

            <Button
              color={"from-purple-900 to-red-600"}
              onClick={() => scrollToSection("activities")}
            >
              GET STARTED
            </Button>
          </div>
          <div className="m-5 flex items-center gap-6 font-medium sm:ml-0">
            <div className="flex items-center gap-2">
              <Circular>
                <CiWallet />
              </Circular>
              <div>
                <span className="text-blue-500">14,637</span>{" "}
                <span>+ Users</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Circular>
                <CiUser />
              </Circular>
              <div>
                <span className="text-blue-500">70</span> <span>+ Wallets</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2 mt-10 flex flex-col gap-2 rounded-md border-[1px] border-gray-500 p-5">
        <div className="text-base">
          Easily import your exiting wallets with 12 / 18 / 24 word recovery
          phrase
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-green-200 bg-clip-text text-lg text-transparent">
          Made possible with your favourites cryptocurrencies
        </div>
        <div className="flex items-center justify-between p-3 pb-0">
          <img src="icons8-bitcoin.svg" alt="" />
          <img src="icons8-ethereum.svg" alt="" />
          <img src="icons8-solana.svg" alt="" />
          <img src="icons8-tether-48.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TopLayout;

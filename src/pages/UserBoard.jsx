import React from "react";
import CryptoList from "../components/CryptoList";
import ResponsiveChart from "../components/ResponsiveChart";
import Layout from "../components/Layout";
import TransactionHistory from "../components/TranscationHistory";
import Chart from "../components/Chart";

function UserBoard() {
  return (
    <div className="flex flex-col gap-y-4 font-jost">
      <Layout />
      <div className="p- flex flex-col gap-6 bg-gray-50 dark:bg-inherit md:px-5 lg:flex-row lg:items-start">
        <Chart />
        <TransactionHistory />
      </div>
    </div>
  );
}

export default UserBoard;

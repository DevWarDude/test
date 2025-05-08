import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { format } from "date-fns";

const TransactionHistory = () => {
  const { user } = useContext(UserContext);
  const isoDate = user.created_at;
  const formattedDate = format(new Date(isoDate), "MMMM dd, yyyy");

  const allTransactions = [
    {
      id: 1,
      type: "deposit",
      amount: 100,
      date: formattedDate,
      description: "Sign up bonus",
    },
    // {
    //   id: 2,
    //   type: "withdrawal",
    //   amount: 150,
    //   date: "2023-05-16",
    //   description: "Groceries",
    // },
    // {
    //   id: 3,
    //   type: "transfer",
    //   amount: 200,
    //   date: "2023-05-17",
    //   description: "Rent",
    // },
    // {
    //   id: 4,
    //   type: "deposit",
    //   amount: 300,
    //   date: "2023-05-18",
    //   description: "Freelance",
    // },
    // {
    //   id: 5,
    //   type: "withdrawal",
    //   amount: 50,
    //   date: "2023-05-19",
    //   description: "Coffee",
    // },
    // {
    //   id: 6,
    //   type: "deposit",
    //   amount: 100,
    //   date: "2023-05-20",
    //   description: "Bonus",
    // },
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 3;
  // State for filters
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = allTransactions.filter((tx) => {
    const matchesType = filterType === "all" || tx.type === filterType;
    const matchesSearch = tx.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const indexOfLastTx = currentPage * transactionsPerPage;
  const indexOfFirstTx = indexOfLastTx - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTx,
    indexOfLastTx,
  );
  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="card w-full dark:text-stone-100 lg:w-96">
      <div className="card-header flex items-center justify-between">
        <p className="card-title md:text-xl">Transaction History</p>
      </div>

      <div className="">
        <div className="mb-4 space-y-3">
          <div className="input-cont">
            <input
              type="text"
              placeholder="Search descriptions..."
              className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-500 dark:text-slate-50 dark:placeholder:text-slate-50"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="input-cont">
            <select
              className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:bg-[#0F172A] dark:text-slate-50"
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">All Transactions</option>
              <option value="deposit">Deposits</option>
              <option value="withdrawal">Withdrawals</option>
              <option value="transfer">Transfers</option>
            </select>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          {currentTransactions.length > 0 ? (
            currentTransactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-sm text-gray-500 dark:text-stone-400">
                    {new Date(tx.date).toLocaleDateString()}
                  </p>
                </div>
                <div
                  className={`font-semibold ${
                    tx.type === "deposit"
                      ? "text-green-600"
                      : tx.type === "withdrawal"
                        ? "text-red-600"
                        : "text-blue-600"
                  }`}
                >
                  {tx.type === "deposit" ? "+" : "-"}${tx.amount}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No transactions found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`h-8 w-8 rounded dark:text-stone-800 ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-400"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;

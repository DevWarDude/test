import { Disclosure } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I connect my wallet?",
    answer:
      "Use the 'Connect Wallet' button in the top-right corner. We support MetaMask, Coinbase Wallet, and WalletConnect.",
  },
  {
    question: "What networks do you support?",
    answer:
      "Currently Ethereum Mainnet, Polygon, and Binance Smart Chain. More coming soon!",
  },
];

import React from "react";

function FAQs() {
  return (
    <div className="mx-auto mt-14 flex flex-col items-center justify-center p-6 sm:mx-20">
      <h2 className="mb-6 text-2xl font-bold">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index} as="div" className="rounded-lg border">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between p-4 text-left transition-colors">
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-stone-300`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  as={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden text-wrap px-4 pb-4 text-gray-400"
                >
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default FAQs;

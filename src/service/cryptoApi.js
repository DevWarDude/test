export const fetchCoins = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1",
  );
  const data = await response.json();
  return data;
};

// export const fetchPrices = async () => {
//   try {
//     const response = await fetch(
//       "https://coincove.vercel.app/api/top50-prices",
//     );
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching prices:", error);
//     return {};
//   }
// };

export const fetchPrices = async () => {
  const marketResponse = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1",
  );
  const top50Coins = await marketResponse.json();

  const coinIds = top50Coins.map((coin) => coin.id).join(",");

  const priceResponse = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd`,
  );
  const priceData = await priceResponse.json();

  const prices = {};
  top50Coins.forEach((coin) => {
    prices[coin.symbol.toUpperCase()] = priceData[coin.id]?.usd || 0;
  });

  return prices;
};

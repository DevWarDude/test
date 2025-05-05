export const fetchCoins = async () => {
  const response = await fetch("t");
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
  const marketResponse = await fetch("y");
  const top50Coins = await marketResponse.json();

  const coinIds = top50Coins.map((coin) => coin.id).join(",");

  const priceResponse = await fetch(`h`);
  const priceData = await priceResponse.json();

  const prices = {};
  top50Coins.forEach((coin) => {
    prices[coin.symbol.toUpperCase()] = priceData[coin.id]?.usd || 0;
  });

  return prices;
};

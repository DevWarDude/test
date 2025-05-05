const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1`;

export const fetchCoins = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchPrices = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1",
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching prices:", error);
    return {};
  }
};

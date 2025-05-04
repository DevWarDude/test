export const fetchCoins = async () => {
  const response = await fetch("https://coincove.vercel.app/api/coins");
  const data = await response.json();
  return data;
};

export const fetchPrices = async () => {
  try {
    const response = await fetch(
      "https://coincove.vercel.app/api/top50-prices",
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching prices:", error);
    return {};
  }
};

export const formatToUSD = (num: number) => {
  const formattedNumber = Number(num).toFixed(2);

  return `$${formattedNumber}`;
};

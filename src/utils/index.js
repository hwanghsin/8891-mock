export const toTenThousandUnit = (price) => {
  if (isNaN(price)) return "";
  if (price > 10000) return `${(price / 10000).toFixed(1)}萬`;
  else price;
};

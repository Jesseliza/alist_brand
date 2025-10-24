export const formatCredibility = (credibility: string) => {
  const value = parseFloat(credibility);
  if (isNaN(value)) {
    return "N/A";
  }
  return `${(value * 100).toFixed(2)}%`;
};

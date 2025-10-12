export const formatDate = (dateString: string) => {
  if (!dateString) {
    return null;
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
export const formatDate = (dateString: string | null) => {
  if (!dateString) {
    return "N/A";
  }
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};
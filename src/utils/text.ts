export const getInitials = (name: string): string => {
  if (!name) {
    return "";
  }

  // Split by whitespace or ampersand, and filter out any empty strings
  const words = name.trim().split(/[\s&]+/).filter(word => word.length > 0);

  if (words.length > 1) {
    return (words[0][0] + words[1][0]).toUpperCase();
  } else if (words[0]) {
    return words[0].substring(0, 2).toUpperCase();
  }

  return "";
};
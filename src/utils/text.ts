export const getInitials = (name: string): string => {
  if (!name) {
    return "";
  }

  const words = name.trim().split(/\s+/);
  if (words.length > 1) {
    return (words[0][0] + words[1][0]).toUpperCase();
  } else if (words[0]) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return "";
};
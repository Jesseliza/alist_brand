export const getInitials = (name: string) => {
  if (!name) return "";
  const names = name.split(" ");
  if (names.length === 1) {
    return names[0].slice(0, 2).toUpperCase();
  }
  return names[0][0].toUpperCase() + names[names.length - 1][0].toUpperCase();
};
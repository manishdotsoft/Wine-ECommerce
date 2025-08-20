export const formatDate = (value: string) => {
  // remove non-digits
  const digits = value.replace(/\D/g, "");
  const parts = [];

  if (digits.length > 0) parts.push(digits.substring(0, 2));
  if (digits.length > 2) parts.push(digits.substring(2, 4));
  if (digits.length > 4) parts.push(digits.substring(4, 8));

  return parts.join("/");
};

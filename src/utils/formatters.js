export function capitalize(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

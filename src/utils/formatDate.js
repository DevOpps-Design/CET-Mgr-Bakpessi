export function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

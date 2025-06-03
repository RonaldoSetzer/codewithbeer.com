export function getReadingTime(text: string): string {
  const cleanText = text.replace(/<\/?[^>]+(>|$)/g, '');
  const words = cleanText.split(/\s+/).length;

  const minutes = Math.ceil(words / 200);
  return minutes === 1 ? '1 min' : `${minutes} min`;
}

export const isPangram = (sentence) => {
  return (new Set(sentence.toLowerCase().replace(/[^a-z]/g, '')).size === 26);
};
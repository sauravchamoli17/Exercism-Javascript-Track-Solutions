export const countWords = (phrase) => {
  const count = {};  
  phrase.toLowerCase().match(/\w+(\'\w)?/g).forEach(word => count[word] = count[word] ? ++count[word] : 1);
  return count;
};
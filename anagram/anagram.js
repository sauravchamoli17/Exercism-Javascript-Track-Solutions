export const findAnagrams = (word,anagrams) => {
  anagrams = anagrams.filter(anagram => anagram.toLowerCase() != word.toLowerCase());
  return anagrams.filter(anagram => word.toLowerCase().split('').sort().join() === anagram.toLowerCase().split('').sort().join());
};
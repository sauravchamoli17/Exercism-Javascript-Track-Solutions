export const isIsogram = (word) => {
   word = word.replace(/[-\s]/g,'').toLowerCase();
   return word.split('').every((char, index) => word.indexOf(char) ===      index);
};
export const convert = (number) => {
  const sounds = {3: 'Pling',5: 'Plang',7: 'Plong'};
  let factors = [];
  const oddNumbers = [3,5,7];
  factors = oddNumbers.filter(odd => number % odd === 0);
  if(factors.length === 0)
   return number.toString();
  factors = factors.map(factor => sounds[factor]).join('');
   return factors; 
};
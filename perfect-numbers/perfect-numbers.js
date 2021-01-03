export const classify = (number) => {
   if(number === 0 || Math.sign(number) === -1)
    throw new Error('Classification is only possible for natural numbers.');
   let factors = [];
   for(let i =0; i<=(number -1); i++){
     if(number % i === 0)
      factors.push(i);
   }
   const sum = factors.reduce((acc,currentVal) => acc + currentVal,0);
   if(number === sum)
    return 'perfect';
   else if(sum > number)
    return 'abundant';
   else
    return 'deficient';
};
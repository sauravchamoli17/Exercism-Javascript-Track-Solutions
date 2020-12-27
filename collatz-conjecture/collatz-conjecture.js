export const steps = (number) => {
  let count = 0;
  if (number <= 0)
   throw new Error ("Only positive numbers are allowed");
  
  while(number !== 1){
    count++;
    if(number % 2 === 0)
      number = (number/2);
    else
      number = (3*number+1);
  }
  return count;
};
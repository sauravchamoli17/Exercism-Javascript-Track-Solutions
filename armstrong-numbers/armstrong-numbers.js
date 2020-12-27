export const isArmstrongNumber = (number) => {
  const digits = number.toString().split('');
  const digitCount = digits.length;
  let sum = 0; 
  digits.forEach(digit => sum = sum + Math.pow(digit, digitCount));
  if (number === sum)
    return true;
  else
    return false;
};
export const compute = (a,b) => { 
   if(a === '' && b === '')
    return 0;
   else if(a === '')
    throw new Error('left strand must not be empty');
   else if(b === '')
    throw new Error('right strand must not be empty');
   else if(a.length != b.length)
    throw new Error('left and right strands must be of equal length');
  else if(a === b)
    return 0;
   else{
     [a,b] = [Array.from(a),Array.from(b)];
     return a.filter(char => char != b.shift()).length;
  }
};
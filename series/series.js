export class Series {
  constructor(series) {
    if(series === '')
     throw new Error('series cannot be empty');
    this.series = series;
  }

  slices(sliceLength) {
   const iterations = (this.series.length - sliceLength) + 1; 
   let substrings = []; 
   let series = this.series.split('');
   series = series.map(num => Number(num)); 
   if(sliceLength === 0)
     throw new Error('slice length cannot be zero'); 
   if(sliceLength < 0)
     throw new Error('slice length cannot be negative');
   if(sliceLength > this.series.length) 
   throw new Error('slice length cannot be greater than series length');
    for(let i =0; i < iterations; i++){
      substrings.push(series.slice(0,sliceLength));
      series.shift();
    } 
    return substrings;
  }
}
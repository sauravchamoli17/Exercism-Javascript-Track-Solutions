export class Squares {
  constructor(nTerm) {
    this.term = nTerm;
    this.naturalNum = [];
    for(let i=1;i<=this.term;i++)
     this.naturalNum.push(i);
  }

  get sumOfSquares() {
     this.sumSquare = this.naturalNum.map(num => (num * num))
                      .reduce((acc,currentValue) => acc + currentValue,0);    
    return this.sumSquare;
  }

  get squareOfSum() {
   this.squareSum = Math.pow((this.term * (this.term + 1) / 2),2);
    return this.squareSum;
  }

  get difference() {
    return Math.abs(this.sumSquare - this.squareSum);
  }
}
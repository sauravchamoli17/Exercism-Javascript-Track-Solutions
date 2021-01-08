// throw new Error('Remove this statement and implement this function');

class Matrix {
  constructor(matrixNotation) {
    this.row = matrixNotation.split('\n');
  }  
  get rows() {
    let matrixRow = this.row.map(element => element.split(' '));
    console.log(typeof matrixRow);
  }
  
  get columns() {
    
  }
}

new Matrix('1 2\n10 20').row;
export class Triangle {
  constructor(firstSide,secondSide,thirdSide) {
    this.first = firstSide;
    this.second = secondSide;
    this.third = thirdSide;
    this.zero = false;
    this.inequality = false;
    if(this.first === 0 && this.second === 0 && this.third === 0)
     this.zero = true; 
    
    if(this.first < (this.second + this.third) && 
       this.second < (this.first + this.third) && 
       this.third < (this.first + this.second))
      this.inequality = true;
  }

  isEquilateral() {
    if(!this.zero && this.inequality){
      if (this.first === this.second && this.second === this.third)
      return true;
      return false; 
    }
    return false;
  }

  isIsosceles() {
    if(!this.zero && this.inequality){
       if(this.first === this.second || this.second === this.third ||             this.third=== this.first)             
      return true;
      return false; 
    }
    return false;
  }

  isScalene() {
    if(!this.zero && this.inequality){
     if(this.first !== this.second && this.second !== this.third &&             this.third !== this.first)
      return true;
      return false;      
    }
    return false;
  }
}
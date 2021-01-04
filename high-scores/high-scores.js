export class HighScores {
  constructor(scoreCard) {
    this.score = scoreCard; 
  }
  
  get scores() {
    return this.score;
  }

  get latest() {
    return this.score.pop();
  }

  get personalBest() {
    return Math.max(...this.score);
  }

  get personalTopThree() {
   let topScores = [];
   let best;
   if(this.score.length <= 2)
    return this.score.sort((a,b) => b-a);
   for(let i= 0; i<3; i++){
     best = Math.max(...this.score);
     topScores.push(best);
     this.score.splice(this.score.indexOf(best),1);
   }
   return topScores; 
  }
}
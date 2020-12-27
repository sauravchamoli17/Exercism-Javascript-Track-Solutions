export const abilityModifier = (input) => {
  if(input < 3)
    throw new Error('Ability scores must be at least 3');
  else if(input > 18)
    throw new Error ("Ability scores can be at most 18");
  return Math.floor((input - 10)/2);
};

export class Character {
  constructor (){
     this.strength_score = Character.rollAbility();
     this.dexterity_score = Character.rollAbility();
     this.constitution_score = Character.rollAbility();
     this.intelligence_score = Character.rollAbility();
     this.wisdom_score = Character.rollAbility();
     this.charisma_score = Character.rollAbility();
     this.hitpoints_score = 10 + abilityModifier(this.constitution);
  }
  
  static rollAbility() {
    let rolls= [0, 0, 0, 0].map(x => Math.floor(Math.random() * 6 + 1));
    rolls.sort().shift();
    return rolls.reduce((acc,val) => acc + val,0);
  }

  get strength() {
    return this.strength_score;
  }

  get dexterity() {
    return this.dexterity_score;
  }

  get constitution() {
     return this.constitution_score;
  }

  get intelligence() {
     return this.intelligence_score;
  }

  get wisdom() {
    return this.wisdom_score;
  }

  get charisma() {
    return this.charisma_score;
  }

  get hitpoints() {
    return this.hitpoints_score;
  }
}
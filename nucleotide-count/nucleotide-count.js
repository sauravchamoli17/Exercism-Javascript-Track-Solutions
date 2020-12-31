export class NucleotideCounts {
  static parse(strand) {
    const count = {A: 0, C: 0, G: 0, T: 0};
    const invalid = strand.match(/[^ACGT]/g);
    if(invalid != null && invalid.length > 0)
     throw new Error('Invalid nucleotide in strand');
    Object.keys(count).forEach(key => count[key] = strand.split('').filter(char => char === key).length);
    return `${count.A} ${count.C} ${count.G} ${count.T}`;
  }
}
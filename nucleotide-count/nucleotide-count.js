export class NucleotideCounts {
  static parse(strand) {
    const count = {A: 0, C: 0, G: 0, T: 0};
    if(/[^ACGT]/g.test(strand))
     throw new Error('Invalid nucleotide in strand');
    Object.keys(count).forEach(key => count[key] = strand.split('').filter(char => char === key).length);
    return `${count.A} ${count.C} ${count.G} ${count.T}`;
  }
}
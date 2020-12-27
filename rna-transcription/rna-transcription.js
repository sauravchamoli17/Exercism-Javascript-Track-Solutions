export const strand = {'G':'C','C':'G','T':'A', 'A': 'U'};
export const toRna = (dna) => dna.replace(/[GCTA]/g, m => strand[m]);
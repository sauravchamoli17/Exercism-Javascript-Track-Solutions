export const translate = (rna = '') => {
  //Breaks the rna string into substrings of 3 and returns an array of them
  const codons = rna.match(/.{1,3}/g);
  const protein = [];

  //Empty RNA has no proteins
  if (rna === '') {
     return protein;
  }
   
  //Iterate rna array and push equivalent protein value in the protein array
  for(let codon of codons) {
    if (codon === 'AUG') {
      protein.push('Methionine');
    } else if (codon === 'UUU' || codon === 'UUC') {
      protein.push('Phenylalanine');
    } else if (codon === 'UUA' || codon === 'UUG') {
      protein.push('Leucine');
    } else if (codon === 'UCU' || codon === 'UCC' || codon === 'UCA' ||       codon === 'UCG') {
      protein.push('Serine');
    } else if (codon === 'UAU' || codon === 'UAC') {
      protein.push('Tyrosine');
    } else if (codon === 'UGU' || codon === 'UGC') {
      protein.push('Cysteine');
    } else if (codon === 'UGG') {
      protein.push('Tryptophan');
    } else if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA') {
      break;
    } else{
       throw 'Invalid codon';
    }    
  }
  //Return protein array at the end
  return protein;
};
export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

export const decodedValue = (color) => {
  let [a,b] = color;
  return COLORS.indexOf(a)*10 + COLORS.indexOf(b);
};
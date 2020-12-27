export const transform = (old) => {
  const newObj = {};
  for (const prop in old) {
    const values = old[prop].map(value => value.toLowerCase());
    values.forEach(value => newObj[value] = parseFloat(prop));
  }
  return newObj;
};
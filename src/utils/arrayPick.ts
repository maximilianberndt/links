const arrayPick = (array, index = Math.random()) =>
  array[Math.floor(index * array.length)];

export { arrayPick };

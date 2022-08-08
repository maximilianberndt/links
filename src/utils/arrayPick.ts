/**
 * Pick an item from an array
 */
const arrayPick = <T>(array: Array<T>, index = Math.random()): T =>
  array[Math.floor(index * array.length)];

export { arrayPick };

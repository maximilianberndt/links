// Seed generating function from string
// From https://github.com/bryc/code/blob/master/jshash/PRNGs.md#addendum-a-seed-generating-functions
// @ts-ignore
const xmur3 = (str) => {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
};

// Generate random number based on seed
// From https://stackoverflow.com/a/47593316
// @ts-ignore
const mulberry32 = (a) => {
  let t = (a += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/**
 * Generate a pseudo random number that will always return the same value for the same input
 */
const prng = (seed: string): number => mulberry32(xmur3(seed)());

export { prng };

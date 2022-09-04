/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  let buffer = s[s.length - 1];
  for (let i = s.length - 1, j = 0; i >= s.length / 2; i--, j++) {
    s[i] = s[j];
    s[j] = buffer;
    buffer = s[i - 1];
  }
  return s;
};

export default reverseString;

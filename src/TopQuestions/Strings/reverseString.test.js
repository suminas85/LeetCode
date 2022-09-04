import reverseString from "./reverseString";

test("reverseString", () => {
  expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"]);
  expect(reverseString(["f","o","o","b","a","r"])).toEqual(["r","a","b","o","o", "f"]);
  expect(reverseString(["H","a","n","n","a","h"])).toEqual(["h","a","n","n","a","H"]);
});

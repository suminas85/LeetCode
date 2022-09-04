import removeDuplicates from "./removeDuplicates";

test("removeDuplicates", () => {
  expect(removeDuplicates([0, 1, 2, 3, 4])).toBe(5);
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});

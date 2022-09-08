import LinkedList from "./LinkedList";

test("LinkedList: fromArray toArray", () => {
  const arr1 = [2, 4, 6, 8];

  expect(
    new LinkedList()
      .fromArray(arr1)
      .toArray()
      .map(({ value }) => value)
  ).toEqual(arr1);
});

test("LinkedList: delete Node", () => {
  const arr1 = [2, 4, 6, 8];
  const linkedList = new LinkedList();
  linkedList.fromArray(arr1).delete(4);

  expect(linkedList.toArray().map(({ value }) => value)).toEqual(
    arr1.filter((item) => item !== arr1[1])
  );
});

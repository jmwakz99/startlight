import { reduceDescriptionWords, convertToString } from "./general";

test("reduceDescriptionWords", () => {
  expect(reduceDescriptionWords("I will go to school tomorrow morning and I will make sure I carry my food")).toBe("I will go to school tomorrow morning and I")
  expect(reduceDescriptionWords("I will go to school")).toBe("I will go to school")


});

test("convertToString", () => {
  expect(convertToString(4)).toBe("4");


})


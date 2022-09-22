import { checkTeenagerStatus } from "./teenager.js";

const testData = [
  [10, false],
  [12, true],
  [15, true],
  [20, true],
  [25, false],
];

test.each(testData)("returns correct names", (inputAge, expectedCheck) => {
  expect(checkTeenagerStatus(inputAge)).toBe(expectedCheck);
});

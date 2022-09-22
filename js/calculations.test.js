import { cubicVolume } from "./calculations";

const testData = [
  [1, 1, 1, 1],
  [1, 4, 5, 20],
  [0, 1, 1, 0],
  [100, 10, 1, 1000],
  [-100, 10, 1, 0],
];

test.each(testData)(
  "returns Volume",
  (length, width, depth, epxectedVolume) => {
    expect(cubicVolume(length, width, depth)).toBe(epxectedVolume);
  }
);



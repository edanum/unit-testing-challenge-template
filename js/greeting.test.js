import { greet } from "./greeting";

const testData = [
  ["Martin", "Howdy Coach!"],
  ["Marc", "Howdy Coach!"],
  ["Ernst", "Howdy Coach!"],
  ["Dalia", "Howdy Boss!"],
  ["Herbert", "Howdy Herbert"],
];


test.each(testData)("TESTIMESTI", (inputName, expetedMessage) => {
    expect(greet(inputName)).toBe(expetedMessage);
})
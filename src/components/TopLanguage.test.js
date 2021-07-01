import React from "react";
import { getTopLanguages } from "./TopLanguage";

describe("tests topLanguages function outputs", () => {
  it("returns an array of object", () => {
    let data = [{}];
    expect(getTopLanguages(data)).toStrictEqual([
      { language: "undefined", percentage: 1, quantity: 1 },
    ]);
  });
  it("if the argument passed is different type of an array or the argument is empty returns undefined", () => {
    expect(getTopLanguages("")).toBe(undefined);
  });
  it("returns an ordered array of objects", () => {
    let data = [
      { language: "JavaScript" },
      { language: "Python" },
      { language: "JavaScript" },
    ];
    expect(getTopLanguages(data)).toStrictEqual([
      { language: "JavaScript", quantity: 2, percentage: 0.6666666666666666 },
      { language: "Python", quantity: 1, percentage: 0.3333333333333333 },
    ]);
  });
});

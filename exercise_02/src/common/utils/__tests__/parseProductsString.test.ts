import parseProductsString from "../parseProductsString";

describe("parseProductsString", () => {
  it("returns an object with format {[productName]: [quantity]}", () => {
    const samepleInput = "milk, bread, banana";
    const parsedValue = parseProductsString(samepleInput);
    expect(parsedValue).toEqual({
      Milk: 1,
      Bread: 1,
      Banana: 1,
    });
  });

  it("returns the accumulated count for banana", () => {
    const samepleInput = "banana, milk, bread, banana";
    const parsedValue = parseProductsString(samepleInput);
    expect(parsedValue).toEqual({
      Milk: 1,
      Bread: 1,
      Banana: 2,
    });
  });

  it("returns the keys with uppercase", () => {
    const samepleInput = "banana, milk, bread, banana";
    const parsedValue = parseProductsString(samepleInput);
    expect(
      Object.keys(parsedValue).find((value) => value === "Banana")
    ).not.toBeNull();
  });
});

export default {};

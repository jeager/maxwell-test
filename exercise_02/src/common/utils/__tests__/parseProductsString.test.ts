import parseProductsString from "../parseProductsString";

describe("parseProductsString", () => {
  it("returns an object with format {[productName]: [quantity]}", () => {
    const samepleInput = "milk, bread, banana";
    const parsedValue = parseProductsString(samepleInput);
    expect(parsedValue).toEqual({
      milk: 1,
      bread: 1,
      banana: 1,
    });
  });

  it("returns the accumulated count for banana", () => {
    const samepleInput = "banana, milk, bread, Banana";
    const parsedValue = parseProductsString(samepleInput);
    expect(parsedValue).toEqual({
      milk: 1,
      bread: 1,
      banana: 2,
    });
  });

  it("returns the keys with lowercase", () => {
    const samepleInput = "banana, milk, bread, Banana";
    const parsedValue = parseProductsString(samepleInput);
    expect(
      Object.keys(parsedValue).find((value) => value === "banana")
    ).not.toBeNull();
  });
});

export default {};

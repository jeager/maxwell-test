import { TProduct } from "../../../../type";
import calculateBill from "../calculateBill";

const products: TProduct[] = [
  { name: "milk", price: 3.97, sale: { quantity: 2, price: 5 } },
  { name: "bread", price: 2.17, sale: { quantity: 3, price: 6 } },
  { name: "banana", price: 0.99 },
  { name: "apple", price: 0.89 },
];

describe("calculateBill", () => {
  it("calculates the sum of each product", () => {
    const productSummary = {
      banana: 2,
      milk: 1,
      apple: 2,
      bread: 1,
    };
    const bill = calculateBill(products, productSummary);
    expect(bill).toContainEqual({
      name: "banana",
      total: 1.98,
      quantity: 2,
    });
    expect(bill).toContainEqual({
      name: "apple",
      total: 1.78,
      quantity: 2,
    });
    expect(bill).toContainEqual({
      name: "bread",
      total: 2.17,
      quantity: 1,
    });
    expect(bill).toContainEqual({
      name: "milk",
      total: 3.97,
      quantity: 1,
    });
    expect(bill).toHaveLength(4);
  });

  it("calculates the sum of each product including the sales", () => {
    const productSummary = {
      banana: 2,
      milk: 2,
      apple: 2,
      bread: 3,
    };
    const bill = calculateBill(products, productSummary);
    expect(bill).toContainEqual({
      name: "banana",
      total: 1.98,
      quantity: 2,
    });
    expect(bill).toContainEqual({
      name: "apple",
      total: 1.78,
      quantity: 2,
    });
    expect(bill).toContainEqual({
      name: "bread",
      total: 6,
      quantity: 3,
    });
    expect(bill).toContainEqual({
      name: "milk",
      total: 5,
      quantity: 2,
    });
    expect(bill).toHaveLength(4);
  });
});

export default {};

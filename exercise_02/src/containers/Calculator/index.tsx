import { useState } from "react";
import parseProductsString from "../../common/utils/parseProductsString";
import Button from "../../components/Button";
import { TProduct } from "../../type";
import calculateBill from "./helpers/calculateBill";
import "./style.scss";

type TBill = {
  name: string;
  total: number;
  quantity: number;
};

export default function Calculator({
  products,
}: {
  products: TProduct[];
}): React.ReactElement {
  const [productsString, setProductsString] = useState("");
  const [bill, setBill] = useState<TBill[]>([]);
  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductsString(event.target.value);
  };

  const handleClick = (productName: string) => {
    const separator: string =
      // check if its first input
      productsString.length === 0 ||
      productsString.charAt(productsString.length - 1) === ","
        ? ""
        : ",";
    setProductsString(productsString.concat(separator).concat(productName));
  };

  const handleCalculate = () => {
    const productsSummary = parseProductsString(productsString);
    const actualBill = calculateBill(products, productsSummary);
    setBill(actualBill);
  };

  const handleClearInput = () => {
    setProductsString("");
    setBill([]);
  };

  return (
    <div className="calculator-layout">
      <div className="input-container">
        <input
          className="products-input"
          onChange={handleProductChange}
          value={productsString}
        />
        <Button small onClick={handleClearInput}>
          X
        </Button>
      </div>
      <div className="buttons-container">
        {products.map((product: any) => (
          <Button onClick={() => handleClick(product.name)}>
            {product.name}
          </Button>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <Button onClick={handleCalculate}>Calculate</Button>
      </div>
      <div className="results-container">
        {bill.length > 0 && (
          <table>
            <thead>
              <th>Name</th>
              <th>Qty.</th>
              <th>Total</th>
            </thead>
            <tbody>
              {bill.map((billRow) => {
                return (
                  <tr>
                    <td>{billRow.name}</td>
                    <td>{billRow.quantity}</td>
                    <td>{billRow.total.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

import { TProduct } from "../../../type";
import { TProductSummary } from "../../../common/utils/parseProductsString";

/**
 *
 * @param products array of products
 * @param productsSummary a summary of products that have been bought
 * @returns an array of sales with name, quantity and total value for each product
 */
export default function calculateBill(
  products: TProduct[],
  productsSummary: TProductSummary
) {
  return products
    .filter((product) => productsSummary[product.name])
    .map((product) => {
      // if it has a sale property
      if (product.sale) {
        const numberOfSalesAchieved = Math.floor(
          productsSummary[product.name] / product.sale.quantity
        );
        const notAchieved =
          productsSummary[product.name] -
          numberOfSalesAchieved * product.sale.quantity;

        const saleValue = numberOfSalesAchieved * product.sale.price;
        const normalValue = notAchieved * product.price;
        return {
          name: product.name,
          total: Number(Math.fround(saleValue + normalValue).toFixed(2)),
          quantity: productsSummary[product.name],
        };
      }
      return {
        name: product.name,
        total: Number(
          Math.fround(product.price * productsSummary[product.name]).toFixed(2)
        ),
        quantity: productsSummary[product.name],
      };
    });
}

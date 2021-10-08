export type TProductSummary = Record<string, number>;

export default function parseProductsString(
  productsString: string
): TProductSummary {
  const productsArray: string[] = productsString
    .replace(/ /g, "")
    .split(",")
    .map((product) => product.toLowerCase());

  const productsSummary: TProductSummary = productsArray.reduce(
    (summary: TProductSummary, product) => {
      if (summary[product]) {
        return { ...summary, [product]: summary[product] + 1 };
      } else {
        return {
          ...summary,
          [product]: 1,
        };
      }
    },
    {}
  );
  return productsSummary;
}

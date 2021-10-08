export type TSale = {
  price: number;
  quantity: number;
};

export type TProduct = {
  name: string;
  price: number;
  sale?: TSale;
};

export interface ProductData {
  id: string;
  imageUrl: string;
  productCount: number;
  productName: string;
}

import { category_img1, category_img2, category_img3, category_img4 } from "../assets";

export const PRODUCT_DATA: ProductData[] = [
  {
    id: "1",
    imageUrl: category_img1,
    productCount: 128,
    productName: "Red Wines",
  },
  {
    id: "2",
    imageUrl: category_img2,
    productCount: 65,
    productName: "Beer",
  },
  {
    id: "3",
    imageUrl: category_img3,
    productCount: 40,
    productName: "Liquor",
  },
  {
    id: "4",
    imageUrl: category_img4,
    productCount: 112,
    productName: "White Wines",
  },
];

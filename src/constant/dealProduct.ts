interface Product {
  id: string;
  name: string;
  year: number;
  region: string;
  volume: string;
  rating: number;
  vipPrice: number;
  regularPrice: number;
  imageUrl: string;
  isFavorite?: boolean;
}

import { deal_img2, deal_img3, deal_img4 } from "../assets";

export const DEAL_PRODUCT: Product[] = [
  {
    id: "1",
    name: "Meiomi Pinot Noir",
    year: 2021,
    region: "California",
    volume: "750 ML",
    rating: 4.8,
    vipPrice: 12.62,
    regularPrice: 16.53,
    imageUrl: deal_img4,
  },
  {
    id: "2",
    name: "Josh Cellars Cabernet",
    year: 2021,
    region: "California",
    volume: "750 ML",
    rating: 4.8,
    vipPrice: 12.62,
    regularPrice: 16.53,
    imageUrl: deal_img2,
  },
  {
    id: "3",
    name: "Jim Bean Bourbon Whiskey",
    year: 2021,
    region: "California",
    volume: "750 ML",
    rating: 4.8,
    vipPrice: 12.62,
    regularPrice: 16.53,
    imageUrl: deal_img3,
  },
  {
    id: "4",
    name: "La Marca Prosecco Sparkling",
    year: 2021,
    region: "California",
    volume: "750 ML",
    rating: 4.8,
    vipPrice: 12.62,
    regularPrice: 16.53,
    imageUrl: deal_img2,
  },
  // Additional products for carousel
  {
    id: "5",
    name: "Kendall Jackson Chardonnay",
    year: 2021,
    region: "California",
    volume: "750 ML",
    rating: 4.7,
    vipPrice: 14.99,
    regularPrice: 18.99,
    imageUrl: deal_img4,
  },
  {
    id: "6",
    name: "Woodford Reserve Bourbon",
    year: 2021,
    region: "Kentucky",
    volume: "750 ML",
    rating: 4.9,
    vipPrice: 35.99,
    regularPrice: 42.99,
    imageUrl: deal_img3,
  },
  {
    id: "7",
    name: "Jim Bean Bourbon Whiskey",
    year: 2021,
    region: "California",
    volume: "750 ML",
    rating: 4.8,
    vipPrice: 12.62,
    regularPrice: 16.53,
    imageUrl: deal_img2,
  },
  {
    id: "8",
    name: "La Marca Prosecco Sparkling",
    year: 2021,
    region: "California",
    volume: "750 ML",
    rating: 4.8,
    vipPrice: 12.62,
    regularPrice: 16.53,
    imageUrl: deal_img4,
  },
];

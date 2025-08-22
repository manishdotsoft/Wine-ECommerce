interface OfferData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  highlight?: string;
}
import { Offer_img1, Offer_img2, Offer_img3 } from "../assets";

export const OFFERS: OfferData[] = [
  {
    id: 1,
    image: Offer_img1,
    title: "10% OFF",
    subtitle: "any 6 bottles\nmix & match reds & whites\nuse your bottles anytime",
  },
  {
    id: 2,
    image: Offer_img2,
    title: "all organic",
    subtitle: "wines over $25\nhealthy for you\n& the planet",
    highlight: "$5 off",
  },
  {
    id: 3,
    image: Offer_img3,
    title: "buy 2 get 1 free",
    subtitle: "SPARKLING\nWINES\nPerfect for celebrations and\n3 is such a sweet crowd to treat",
  },
  {
    id: 4,
    image: Offer_img1,
    title: "Premium Collection",
    subtitle: "RED WINES\nCurated selection of\nfine vintage bottles",
    highlight: "20% OFF",
  },
  {
    id: 5,
    image: Offer_img2,
    title: "White Wine Special",
    subtitle: "CRISP & REFRESHING\nPerfect for summer\ndinners and gatherings",
    highlight: "Buy 3 Get 1",
  },
  {
    id: 6,
    image: Offer_img3,
    title: "Rosé Collection",
    subtitle: "ELEGANT ROSÉ\nLight and fruity\nideal for any occasion",
    highlight: "15% OFF",
  },
];

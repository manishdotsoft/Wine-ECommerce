export interface SlideData {
  id: number;
  backgroundImage: string;
  title: string;
  subtitle: string;
  firstBtnText: string;
  secondBtnText: string;
  onFirstBtnClick: () => void;
  onSecondBtnClick: () => void;
  tagText?: string;
  tagActionText: string;
}
import { banner_img1, banner_img2, banner_img3 } from "../assets";

export const HERO_BANNER_SLIDES: SlideData[] = [
  {
    id: 1,
    backgroundImage: banner_img1,
    title: "Tonight's Wine? Ready for Pickup.",
    subtitle: "Order online and pick up from your local store — just in time for dinner.",
    firstBtnText: "Browse Wines",
    secondBtnText: "Find a Store",
    onFirstBtnClick: () => console.log("Browse Wines clicked"),
    onSecondBtnClick: () => console.log("Find a Store clicked"),
    tagText: "Discover",
    tagActionText: "Fresh from Our Shelves",
  },
  {
    id: 2,
    backgroundImage: banner_img2,
    title: "Premium Collection Awaits",
    subtitle: "Discover our curated selection of fine wines from around the world.",
    firstBtnText: "Shop The Collection",
    secondBtnText: "View Staff Picks",
    onFirstBtnClick: () => console.log("Shop Premium clicked"),
    onSecondBtnClick: () => console.log("Learn More clicked"),
    tagText: "Curated",
    tagActionText: "The Finest, Selected for You",
  },
  {
    id: 3,
    backgroundImage: banner_img3,
    title: "Fast & Reliable Delivery",
    subtitle: "Get your favorite wines delivered to your doorstep in under 2 hours.",
    firstBtnText: "Browse New Arrivals",
    secondBtnText: "Explore New Regions",
    onFirstBtnClick: () => console.log("Order Now clicked"),
    onSecondBtnClick: () => console.log("View Areas clicked"),
    tagText: "New",
    tagActionText: "Wines Worth Discovering",
  },
];

import { facebook, twitter, instagram, linkedin } from "../assets";
export const FOOTER_DATA = {
  companyInfo: {
    title: "Company Info",
    links: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Store Locator", href: "#" },
    ],
  },
  customerService: {
    title: "Customer Service",
    links: [
      { text: "Contact Us", href: "#" },
      { text: "FAQs", href: "#" },
      { text: "Pickup Process", href: "#" },
      { text: "Return & Refund Policy", href: "#" },
    ],
  },
  shopByCategory: {
    title: "Shop By Category",
    links: [
      { text: "Wines", href: "#" },
      { text: "Beer", href: "#" },
      { text: "Liquor", href: "#" },
      { text: "Events", href: "#" },
    ],
  },
  legalInfo: {
    title: "Legal & Info",
    links: [
      { text: "Terms & Conditions", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Accessibility Statement", href: "#" },
      { text: "Contact: info@wineoutlet.com", href: "mailto:info@wineoutlet.com" },
    ],
  },
} as const;

export const LOGO_TEXT = "LOGO TEXT";

export const SOCIAL_ICONS = [
  { icon: instagram, href: "#", label: "Instagram" },
  { icon: facebook, href: "#", label: "Facebook" },
  { icon: linkedin, href: "#", label: "LinkedIn" },
  { icon: twitter, href: "#", label: "Twitter" },
] as const;

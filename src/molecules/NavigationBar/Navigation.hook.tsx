import { useState } from "react";

export const useNavigation = () => {
  const [anchorEl, setAnchorEl] = useState<{ [key: string]: HTMLElement | null }>({
    store: null,
    Wine: null,
    Beer: null,
    Liquor: null,
    delivery: null,
  });

  const menus: { [key: string]: string[] } = {
    Wine: ["Red Wine", "White Wine", "Rose Wine", "Sparkling Wine"],
    Beer: ["Lager", "Ale", "Stout", "IPA"],
    Liquor: ["Whiskey", "Vodka", "Rum", "Gin"],
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl((prev) => ({ ...prev, [key]: event.currentTarget }));
  };

  const handleMenuClose = (key: string) => {
    setAnchorEl((prev) => ({ ...prev, [key]: null }));
  };

  return {
    anchorEl,
    menuOpen: {
      store: Boolean(anchorEl.store),
      Wine: Boolean(anchorEl.Wine),
      Beer: Boolean(anchorEl.Beer),
      Liquor: Boolean(anchorEl.Liquor),
      delivery: Boolean(anchorEl.delivery),
    },
    handleMenuOpen,
    handleMenuClose,
    menus,
  };
};

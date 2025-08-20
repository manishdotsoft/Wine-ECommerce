import { useState } from "react";

type MenuState = {
  [key: string]: boolean;
};

type AnchorState = {
  [key: string]: HTMLElement | null;
};

export const useNavigation = (menuKeys: string[]) => {
  const [menuOpen, setMenuOpen] = useState<MenuState>(
    menuKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );

  const [anchorEl, setAnchorEl] = useState<AnchorState>(
    menuKeys.reduce((acc, key) => ({ ...acc, [key]: null }), {})
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl((prev) => ({ ...prev, [key]: event.currentTarget }));
    setMenuOpen((prev) => ({ ...prev, [key]: true }));
  };

  const handleMenuClose = (key: string) => {
    setAnchorEl((prev) => ({ ...prev, [key]: null }));
    setMenuOpen((prev) => ({ ...prev, [key]: false }));
  };

  return {
    menuOpen,
    anchorEl,
    handleMenuOpen,
    handleMenuClose,
  };
};

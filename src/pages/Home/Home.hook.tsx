import { useState } from "react";

export const useHomeLogic = () => {
  const [agePopupOpen, setAgePopupOpen] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  const handleVerifyAge = () => {
    setAgePopupOpen(false);
    setIsAgeVerified(true);
  };
  const handleCategoryClick = () => {
    console.log("category clicked");
  };
  return {
    agePopupOpen,
    isAgeVerified,
    handleVerifyAge,
    handleCategoryClick,
  };
};

import { useState } from "react";

export const useHomeLogic = () => {
  const [agePopupOpen, setAgePopupOpen] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  const handleVerifyAge = () => {
    setAgePopupOpen(false);
    setIsAgeVerified(true);
  };
  return {
    agePopupOpen,
    isAgeVerified,
    handleVerifyAge,
  };
};

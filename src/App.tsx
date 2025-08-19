import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import Home from "./pages/Home/Home";
import { AgePopup } from "./molecules/AgePopup";

function App() {
  const [agePopupOpen, setAgePopupOpen] = useState(false);

  const handleOpenAgePopup = () => {
    setAgePopupOpen(true);
  };

  const handleCloseAgePopup = () => {
    setAgePopupOpen(false);
  };

  const handleVerifyAge = () => {
    console.log("Age verified successfully!");
    setAgePopupOpen(false);
  };
  return (
    <>
      <Home />
      <Button variant="contained" onClick={handleOpenAgePopup} size="large">
        Open Age Verification Popup
      </Button>
      <AgePopup open={agePopupOpen} onClose={handleCloseAgePopup} onVerify={handleVerifyAge} />
    </>
  );
}

export default App;

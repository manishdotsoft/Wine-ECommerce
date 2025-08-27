import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";
import { CustomTextField, CustomDropdown, CustomButton } from "../../atoms";
import { countryOptions, storeOptions, alcoholPreferences } from "../../constant/newsletterData";
import {
  NewsletterContainer,
  BtnWrapperBox,
  WrapperBox,
  CustomizedGrid,
  CustomizeUnsubscribeText,
  CustomizeTitleText,
} from "./Newsletter.style";

const Newsletter: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "US",
    phoneNumber: "",
    email: "",
    preferredStore: "",
    alcoholPreferences: "",
  });

  const handleInputChange = (field: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <NewsletterContainer>
      <WrapperBox>
        <CustomizeTitleText>Newsletter</CustomizeTitleText>
        <CustomizedGrid>
          {/* First Row */}
          <CustomTextField
            label="Full Name"
            value={formData.fullName}
            onChange={handleInputChange("fullName")}
            placeholder="John Cena"
            startIcon={<PersonIcon sx={{ color: "#666" }} />}
          />

          <CustomTextField
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange("phoneNumber")}
            placeholder="954589334"
            type="tel"
            isPhoneInput={true}
            countryValue={formData.countryCode}
            onCountryChange={handleInputChange("countryCode")}
            countryOptions={countryOptions}
          />

          <CustomTextField
            label="Email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder="youcanseeme@gmail.com"
            type="email"
          />

          {/* Second Row */}
          <CustomDropdown
            label="Preferred Store"
            value={formData.preferredStore}
            onChange={handleInputChange("preferredStore")}
            options={storeOptions}
            placeholder="Select Store"
          />

          <CustomDropdown
            label="Alcohol Preferences"
            value={formData.alcoholPreferences}
            onChange={handleInputChange("alcoholPreferences")}
            options={alcoholPreferences}
            placeholder="Select Preferences"
          />

          <BtnWrapperBox>
            <CustomButton
              text={"Subscribe"}
              bgColor={theme.palette.primary.dark}
              onClick={() => console.log("subscribe")}
              color={""}
              border={""}
              btnBorderColor={""}
            />
            <CustomizeUnsubscribeText>
              Unsubscribe anytime. We respect your privacy.
            </CustomizeUnsubscribeText>
          </BtnWrapperBox>
        </CustomizedGrid>
      </WrapperBox>
    </NewsletterContainer>
  );
};

export default Newsletter;

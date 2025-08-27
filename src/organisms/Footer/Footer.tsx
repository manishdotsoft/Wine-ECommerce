import type React from "react";
import { Grid, Box } from "@mui/material";
import {
  FooterContainer,
  SocialIconsContainer,
  StyledIconButton,
  SectionTitle,
  LinksContainer,
  StyledLink,
  InnerWrapper,
  LogoImage,
  CustomizedGrid,
} from "./Footer.style";
import { FOOTER_DATA, SOCIAL_ICONS } from "../../constant/footerData";
import { logo } from "../../assets";

const Footer: React.FC = () => {
  const renderFooterSection = (sectionData: (typeof FOOTER_DATA)[keyof typeof FOOTER_DATA]) => (
    <>
      <SectionTitle variant="h6">{sectionData.title}</SectionTitle>
      <LinksContainer>
        {sectionData.links.map((link, index) => (
          <StyledLink key={index} href={link.href}>
            {link.text}
          </StyledLink>
        ))}
      </LinksContainer>
    </>
  );

  return (
    <FooterContainer>
      <InnerWrapper>
        {/* Logo and Social Media Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ mb: 2 }}>
            <LogoImage src={logo} />
          </Box>

          <SocialIconsContainer>
            {SOCIAL_ICONS.map((social, index) => (
              <StyledIconButton
                key={index}
                component="a"
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} />
              </StyledIconButton>
            ))}
          </SocialIconsContainer>
        </Grid>

        <Box sx={{ display: "flex", width: "60%", justifyContent: "space-between" }}>
          {Object.values(FOOTER_DATA).map((section, index) => (
            <CustomizedGrid key={index} item xs={12} sm={6} md={2}>
              {renderFooterSection(section)}
            </CustomizedGrid>
          ))}
        </Box>
      </InnerWrapper>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { bike, bag, map, cart, userprofile, logo, star } from "../../assets";
import { useTheme } from "@mui/material";

import { useNavigation } from "./Navigation.hook";
import {
  TopBar,
  TopBarContent,
  Logo,
  SearchBox,
  StyledInput,
  NavWrapper,
  NavMenu,
  HighlightMenu,
  StyledMenu,
  DropdownTriggerNoBorder,
  DropdownTriggerWithGap,
  DropdownTriggerWithIconMargin,
  DropdownMenuItem,
  RightNavSection,
  CustomiseOfferText,
  CustomizeIconButton,
  StyledAppBar,
  StyledToolbar,
  BottomToolbar,
  IconGroup,
} from "./Navigation.style";

const Navigation = () => {
  const theme = useTheme();
  const { anchorEl, menuOpen, handleMenuOpen, handleMenuClose, menus } = useNavigation();

  return (
    <div>
      <TopBar>
        <TopBarContent>
          <CustomiseOfferText>
            🎉 Free Gift with Every $100+ Order — This Week Only <span>Learn More</span>
          </CustomiseOfferText>
        </TopBarContent>
      </TopBar>

      <StyledAppBar>
        <StyledToolbar>
          {/* Logo */}
          <Logo src={logo} alt="Wine Outlet" />

          <IconGroup>
            <SearchBox>
              <SearchIcon sx={{ color: "gray" }} />
              <StyledInput
                placeholder="Search wines, brands, or regions"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchBox>

            <DropdownTriggerWithIconMargin
              sx={{ color: theme?.palette.grey.main }}
              onClick={(e) => handleMenuOpen(e, "store")}
            >
              <img src={map} alt="map" />
              Uptown Store
              {menuOpen.store ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DropdownTriggerWithIconMargin>
            <StyledMenu
              anchorEl={anchorEl.store}
              open={menuOpen.store}
              onClose={() => handleMenuClose("store")}
              PaperProps={{
                sx: {
                  top: "95px !important",
                  position: "absolute",
                },
              }}
            >
              <DropdownMenuItem>Uptown Store</DropdownMenuItem>
              <DropdownMenuItem>Downtown Store</DropdownMenuItem>
              <DropdownMenuItem>Suburban Store</DropdownMenuItem>
            </StyledMenu>
            {/* Icons */}
            <RightNavSection>
              <CustomizeIconButton>
                <img src={cart} alt="cart" />
              </CustomizeIconButton>
              <CustomizeIconButton>
                <img src={userprofile} alt="userProfile" />
              </CustomizeIconButton>
            </RightNavSection>
          </IconGroup>
        </StyledToolbar>
      </StyledAppBar>

      <BottomToolbar>
        <NavWrapper>
          {/* Static Dropdowns */}
          {["Wine", "Beer", "Liquor"].map((item) => (
            <div key={item}>
              <DropdownTriggerNoBorder onClick={(e) => handleMenuOpen(e, item)}>
                {item} {menuOpen[item] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </DropdownTriggerNoBorder>
              <StyledMenu
                anchorEl={anchorEl[item]}
                open={menuOpen[item]}
                onClose={() => handleMenuClose(item)}
              >
                {menus[item].map((val: string) => (
                  <DropdownMenuItem key={val}>{val}</DropdownMenuItem>
                ))}
              </StyledMenu>
            </div>
          ))}

          <NavMenu>Tastings</NavMenu>
          <NavMenu>Events</NavMenu>
          <HighlightMenu>
            <img src={star} alt="star" /> New Arrivals
          </HighlightMenu>
          <NavMenu>Promotions</NavMenu>
        </NavWrapper>

        <RightNavSection>
          {/* Delivery Dropdown */}
          <DropdownTriggerWithGap onClick={(e) => handleMenuOpen(e, "delivery")}>
            <img src={bike} alt="bike" /> Delivery{" "}
            {menuOpen.delivery ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </DropdownTriggerWithGap>
          <StyledMenu
            anchorEl={anchorEl.delivery}
            open={menuOpen.delivery}
            onClose={() => handleMenuClose("delivery")}
            PaperProps={{
              sx: {
                top: "170px !important",
                position: "absolute",
              },
            }}
          >
            <DropdownMenuItem>Standard Delivery</DropdownMenuItem>
            <DropdownMenuItem>Express Delivery</DropdownMenuItem>
            <DropdownMenuItem>Pickup</DropdownMenuItem>
          </StyledMenu>

          {/* Hiring Now */}
          <DropdownTriggerWithGap>
            <img src={bag} alt="bag" /> Hiring Now
          </DropdownTriggerWithGap>
        </RightNavSection>
      </BottomToolbar>
    </div>
  );
};

export default Navigation;

"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Chip,
  useTheme,
} from "@mui/material";
import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import { empty_star } from "../../assets";
import { Container } from "./RecentlyView.style";
import { expandIcon, calendar, cityMap } from "../../assets";

const RecentlyViewed: React.FC = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(DEAL_PRODUCT.length / 4);

  const getCurrentProducts = () => {
    const startIndex = currentSlide * 4;
    return DEAL_PRODUCT.slice(startIndex, startIndex + 4);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleAddToCart = (productId: string) => {
    console.log("Add to cart:", productId);
  };

  const handleToggleFavorite = (productId: string) => {
    console.log("Toggle favorite:", productId);
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: theme.palette.black[800] }}>
            Recently Viewed
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3, mb: 3, mt: 7 }}>
        {getCurrentProducts().map((product) => (
          <Card
            key={product.id}
            sx={{
              position: "relative",
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              "&:hover": {
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {/* Favorite Button */}
            <IconButton
              sx={{
                position: "absolute",
                top: 20,
                right: 22,
                backgroundColor: "white",
                border: `1px solid ${theme.palette.success.main}`,
                borderRadius: "4px",
                zIndex: 1,
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              onClick={() => handleToggleFavorite(product.id)}
            >
              <FavoriteBorder sx={{ color: "#666" }} />
            </IconButton>

            {/* Product Image */}
            <CardMedia
              component="img"
              height="400"
              image={product.imageUrl}
              alt={product.name}
              sx={{ objectFit: "contain", p: 2 }}
            />

            <CardContent sx={{ p: 2 }}>
              {/* Product Name */}
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: "1rem" }}>
                {product.name}
              </Typography>

              {/* Product Details */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  mb: 1,
                }}
              >
                <Box>
                  <img
                    src={calendar}
                    alt={"calendar icon"}
                    style={{ width: "12px", height: "12px", marginRight: "5px" }}
                  />
                  <Chip
                    label={product.year}
                    size="small"
                    sx={{ backgroundColor: "#f5f5f5", fontSize: "0.75rem" }}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: "#666", fontSize: "0.75rem" }}>
                  <img
                    src={cityMap}
                    alt={"city map "}
                    style={{ width: "12px", height: "12px", marginRight: "5px" }}
                  />
                  {product.region}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Typography variant="body2" sx={{ color: "#666", fontSize: "0.75rem" }}>
                  <img
                    src={expandIcon}
                    alt={"expand icon"}
                    style={{ width: "12px", height: "12px", marginRight: "5px" }}
                  />
                  {product.volume}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <img
                    src={empty_star}
                    alt="empty-star"
                    style={{ height: "12px", marginBottom: "2px" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      lineHeight: 0,
                    }}
                  >
                    {product.rating}
                  </Typography>
                </Box>
              </Box>

              {/* Pricing */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.black[800],
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    ${product.regularPrice.toFixed(2)}
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<ShoppingCart />}
                    onClick={() => handleAddToCart(product.id)}
                    sx={{
                      borderColor: theme.palette.primary.dark,
                      color: theme.palette.primary.dark,
                      backgroundColor: theme.palette.primary.light,
                      padding: "12px 0px",
                      textTransform: "none",
                      fontWeight: 600,
                      width: "50%",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: currentSlide === index ? 24 : 12,
              height: 12,
              borderRadius: currentSlide === index ? 4 : "50%",
              backgroundColor:
                currentSlide === index ? theme.palette.primary.dark : theme.palette.warning.light,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor:
                  currentSlide === index ? theme.palette.primary.dark : theme.palette.warning.light,
              },
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default RecentlyViewed;

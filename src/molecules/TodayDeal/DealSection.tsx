"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Chip,
  useTheme,
} from "@mui/material";
import {
  FavoriteBorder,
  ShoppingCart,
  LocalFireDepartment,
  Star,
  ThumbUp,
  PersonOutline,
} from "@mui/icons-material";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import { empty_star } from "../../assets";
import { Container, Dot } from "./DealSection.style";

interface Product {
  id: string;
  name: string;
  year: number;
  region: string;
  volume: string;
  rating: number;
  vipPrice: number;
  regularPrice: number;
  imageUrl: string;
  isFavorite?: boolean;
}

interface FilterButton {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const DealsSection: React.FC = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 9,
    minutes: 17,
    seconds: 45,
  });

  const filterButtons: FilterButton[] = [
    { id: "trending", label: "Trending", icon: <LocalFireDepartment />, isActive: true },
    { id: "staff", label: "Staff Picks", icon: <Star />, isActive: false },
    { id: "popular", label: "Most Popular", icon: <ThumbUp />, isActive: false },
    { id: "foryou", label: "Just For You", icon: <PersonOutline />, isActive: false },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: theme.palette.black[800] }}>
            Today's Deal for you!
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {[
              { value: timeLeft.hours.toString().padStart(2, "0"), label: "hours" },
              { value: timeLeft.minutes.toString().padStart(2, "0"), label: "minutes" },
              { value: timeLeft.seconds.toString().padStart(2, "0"), label: "seconds" },
            ].map((time, index) => (
              <React.Fragment key={time.label}>
                <Box
                  sx={{
                    backgroundColor: "#d32f2f",
                    color: theme.palette.white.main,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  {time.value}
                </Box>
                {index < 2 && (
                  <Typography sx={{ color: "#d32f2f", fontWeight: "bold", fontSize: "1.1rem" }}>
                    :
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {filterButtons.map((filter) => (
            <Button
              key={filter.id}
              variant={filter.isActive ? "contained" : "outlined"}
              startIcon={filter.icon}
              sx={{
                backgroundColor: filter.isActive ? "transparent" : "#fff",
                borderColor: filter.isActive ? "#ff6b35" : "#ddd",
                color: filter.isActive ? theme.palette.primary.dark : theme.palette.black[800],
                "&:hover": {
                  backgroundColor: filter.isActive ? "#e55a2b" : "#f5f5f5",
                },
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              {filter.label}
            </Button>
          ))}
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
                <Chip
                  label={product.year}
                  size="small"
                  sx={{ backgroundColor: "#f5f5f5", fontSize: "0.75rem" }}
                />
                <Typography variant="body2" sx={{ color: "#666", fontSize: "0.75rem" }}>
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
                  {product.volume}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <img src={empty_star} alt="empty-star" style={{ height: "12px" }} />
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
              <Box sx={{ mb: 2 }}>
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
                      color: theme.palette.warning.light,
                      fontWeight: 600,
                      fontSize: "0.85rem",
                    }}
                  >
                    VIP: ${product.vipPrice.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.black[800],
                      fontWeight: 600,
                      fontSize: "0.85rem",
                    }}
                  >
                    ${product.regularPrice.toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              {/* Add to Cart Button */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ShoppingCart />}
                onClick={() => handleAddToCart(product.id)}
                sx={{
                  borderColor: "#d32f2f",
                  color: "#d32f2f",
                  backgroundColor: theme.palette.primary.light,
                  padding: "12px 0px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Add to Cart
              </Button>
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

export default DealsSection;

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

interface TouchState {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  isDragging: boolean;
}

export const useHeroBanner = (totalSlides: number, autoPlayInterval = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchState = useRef<TouchState>({
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    isDragging: false,
  });

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);
  }, [totalSlides, autoPlayInterval]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  // Navigation functions
  const goToSlide = useCallback(
    (slideIndex: number) => {
      if (slideIndex >= 0 && slideIndex < totalSlides) {
        setCurrentSlide(slideIndex);
        stopAutoPlay();
        setTimeout(() => {
          if (isAutoPlaying) {
            startAutoPlay();
          }
        }, 3000);
      }
    },
    [totalSlides, isAutoPlaying, startAutoPlay, stopAutoPlay]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  }, [currentSlide, totalSlides, goToSlide]);

  // Touch/swipe handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      touchState.current = {
        startX: touch.clientX,
        startY: touch.clientY,
        currentX: touch.clientX,
        currentY: touch.clientY,
        isDragging: true,
      };
      stopAutoPlay();
    },
    [stopAutoPlay]
  );

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchState.current.isDragging) return;

    const touch = e.touches[0];
    touchState.current.currentX = touch.clientX;
    touchState.current.currentY = touch.clientY;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchState.current.isDragging) return;

    const deltaX = touchState.current.startX - touchState.current.currentX;
    const deltaY = Math.abs(touchState.current.startY - touchState.current.currentY);
    const minSwipeDistance = 50;

    // Only trigger swipe if horizontal movement is greater than vertical
    if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > deltaY) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchState.current.isDragging = false;

    // Restart auto-play after touch interaction
    setTimeout(() => {
      if (isAutoPlaying) {
        startAutoPlay();
      }
    }, 3000);
  }, [nextSlide, prevSlide, isAutoPlaying, startAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        case " ":
          e.preventDefault();
          setIsAutoPlaying((prev) => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Auto-play management
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  // Pause auto-play on hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => stopAutoPlay();
    const handleMouseLeave = () => {
      if (isAutoPlaying) {
        startAutoPlay();
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  return {
    currentSlide,
    isAutoPlaying,
    setIsAutoPlaying,
    goToSlide,
    nextSlide,
    prevSlide,
    containerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

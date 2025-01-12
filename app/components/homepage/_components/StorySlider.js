"use client";

import { useRef, useState, useEffect } from "react";

export default function StorySlider({ children }) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    // To handle touch events for mobile users
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const touchX = e.touches[0].pageX;
      const walk = touchX - startX;
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const container = containerRef.current;
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, startX, scrollLeft]);

  // Mouse event handlers
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="flex gap-4 p-2 !overflow-x-hidden scroll-smooth"
      onMouseDown={handleMouseDown}
      ref={containerRef}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        overflowX: "auto",
      }}
    >
      {children}
    </div>
  );
}

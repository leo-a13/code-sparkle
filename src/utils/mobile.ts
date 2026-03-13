import { useEffect, useState } from "react";

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export type Breakpoint = keyof typeof breakpoints;

export function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: screenWidth,
    isMobile: screenWidth < breakpoints.md,
    isTablet: screenWidth >= breakpoints.md && screenWidth < breakpoints.lg,
    isDesktop: screenWidth >= breakpoints.lg,
  };
}

export function useMobile() {
  const { isMobile } = useScreenSize();
  return isMobile;
}

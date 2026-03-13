import { useEffect, useState } from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia(`(min-width: ${breakpoints[breakpoint]}px)`);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return mounted ? matches : false;
}

export function useResponsive() {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setState({
        isMobile: w < breakpoints.sm,
        isTablet: w >= breakpoints.sm && w < breakpoints.lg,
        isDesktop: w >= breakpoints.lg,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  let currentBreakpoint: Breakpoint = "xs";
  if (state.isDesktop) currentBreakpoint = "lg";
  else if (state.isTablet) currentBreakpoint = "md";
  else currentBreakpoint = "sm";

  return { ...state, currentBreakpoint };
}

export function useViewportHeight() {
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
}

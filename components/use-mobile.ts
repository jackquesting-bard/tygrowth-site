"use client";
import { useState, useEffect } from "react";

/** Client-only viewport check. Starts as desktop (false) to avoid SSR mismatch. */
export function useMobile(breakpoint = 860) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return mobile;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export default function useScrollRestore() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Restore scroll if exists
    if (scrollPositions[path] !== undefined) {
      window.scrollTo(0, scrollPositions[path]);
    }

    return () => {
      scrollPositions[path] = window.scrollY;
    };
  }, [location.pathname]);
}

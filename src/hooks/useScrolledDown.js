import { useEffect, useState } from "react";

function useScrolledDown() {
  const [scrolledDown, setScrollDirection] = useState(null);

  useEffect(() => {
    const checkScrolledDown = () => {
      const scrollY = window.scrollY;
      setScrollDirection(scrollY > 0);
    };
    window.addEventListener("scroll", checkScrolledDown);
    return () => {
      window.removeEventListener("scroll", checkScrolledDown);
    };
  }, [scrolledDown]);

  return scrolledDown;
}
export default useScrolledDown;

import { useState, useEffect } from 'react';

export default function useScreeWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
        }
          window.addEventListener("resize", handleResize);
          return () =>
          window.removeEventListener("resize", handleResize);
      }, [width]);
      return width;
}
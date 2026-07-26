import { useEffect, useRef, useCallback } from "react";

interface ParallaxOptions {
  speed?: number;
  reverse?: boolean;
}

export default function useParallax(
  deps: unknown[] = [],
  options: ParallaxOptions = {}
) {
  const { speed = 0.3, reverse = false } = options;
  const positionsRef = useRef<Map<HTMLElement, number>>(new Map());
  const tickingRef = useRef(false);

  const updatePositions = useCallback(() => {
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll<HTMLElement>("[data-parallax]");
    elements.forEach((el) => {
      const spd = parseFloat(el.dataset.parallaxSpeed || String(speed));
      const initialTop = positionsRef.current.get(el) || 0;
      const offset =
        (scrollY - initialTop) * spd * 0.08 * (reverse ? -1 : 1);
      el.style.transform = `translateY(${offset}px)`;
    });
    tickingRef.current = false;
  }, [speed, reverse]);

  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true;
      requestAnimationFrame(updatePositions);
    }
  }, [updatePositions]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-parallax]"
    );

    // Add will-change hint for GPU compositing
    elements.forEach((el) => {
      el.style.willChange = "transform";
      positionsRef.current.set(
        el,
        el.getBoundingClientRect().top + window.scrollY
      );
    });

    // Initial position
    updatePositions();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      elements.forEach((el) => {
        el.style.willChange = "";
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

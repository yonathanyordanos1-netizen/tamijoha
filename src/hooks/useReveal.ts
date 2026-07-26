import { useEffect, useRef } from "react";

type AnimType = "fade-up" | "fade-left" | "fade-right" | "scale-in";

interface Options {
  threshold?: number;
  type?: AnimType;
  stagger?: number;
}

export default function useReveal(
  deps: unknown[] = [],
  options: Options = {}
) {
  const { threshold = 0.1, type = "fade-up", stagger = 0 } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animClass = el.dataset.revealType || `reveal-${type}`;
            const delay = el.dataset.revealDelay
              ? parseFloat(el.dataset.revealDelay)
              : 0;
            el.style.animationDelay = `${delay}s`;
            el.classList.add(animClass);
            // Only add backward-compat animate-in if no specific type
            if (!el.dataset.revealType && type === "fade-up") {
              el.classList.add("animate-in");
            }
            observerRef.current?.unobserve(el);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(
      ".reveal, [data-reveal]"
    );
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      if (stagger > 0 && !htmlEl.dataset.revealDelay) {
        htmlEl.style.animationDelay = `${i * stagger}s`;
      }
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

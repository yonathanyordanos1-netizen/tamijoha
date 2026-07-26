import { useEffect, useState, useRef } from "react";

interface CounterOptions {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function useCounter(
  options: CounterOptions
): [string, React.RefObject<HTMLDivElement | null>] {
  const { end, duration = 2000, suffix = "", prefix = "" } = options;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasRun = useRef(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const steps = Math.min(duration / 16, 60);
          const stepDuration = duration / steps;

          let step = 0;
          intervalRef.current = window.setInterval(() => {
            step++;
            const progress = Math.min((step * stepDuration) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * end);
            setCount(current);

            if (step >= steps) {
              if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
              setCount(end);
            }
          }, stepDuration);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [end, duration]);

  const display =
    end > 999 && count === end
      ? `${prefix}${end}+${suffix}`
      : `${prefix}${count}${suffix}`;

  return [display, ref];
}

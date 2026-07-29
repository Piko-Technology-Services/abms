"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed hairline at the top of the viewport that fills as the reader
 * scrolls down the page. Pure CSS/JS, no dependency on the template's
 * jQuery bundle, so it's safe to mount once in the root layout.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="abms-scroll-progress" aria-hidden="true">
      <div className="abms-scroll-progress__bar" ref={barRef} />
    </div>
  );
}

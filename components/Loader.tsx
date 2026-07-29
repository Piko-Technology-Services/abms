"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, 900));
    const ready =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });

    Promise.all([minDelay, ready]).then(() => setHidden(true));

    // Safety net in case 'load' never fires for some reason.
    const fallback = setTimeout(() => setHidden(true), 4000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <div className="abms-loader" data-hidden={hidden} aria-hidden={hidden}>
      <div className="abms-loader__stage">
        <div className="abms-loader__ring abms-loader__ring--outer" />
        <div className="abms-loader__ring" />
        <div className="abms-loader__badge">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="abms-loader__label">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </div>
  );
}

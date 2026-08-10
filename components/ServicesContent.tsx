"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface ServiceItem {
  id: string;
  code: string;
  rl: string;
  title: string;
  intro: string;
  items: string[];
}

interface ServicesContentProps {
  services: ServiceItem[];
  targetIndustries: string[];
}

export default function ServicesContent({
  services,
  targetIndustries,
}: ServicesContentProps) {
  const galleryImages = ["services/mining.jpg", "services/mining_support.jpg", "services/tading.jpg", "services/logistics.jpg"];

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const railFillRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? "");
  const [query, setQuery] = useState("");

  const filteredIndustries = useMemo(
    () =>
      targetIndustries.filter((ind) =>
        ind.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [targetIndustries, query]
  );

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Track which service section is in view, for the rail + quick links
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
    );
    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [services]);

  // Fill the rail like a core-sample depth log as the page scrolls
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    let ticking = false;
    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      if (railFillRef.current) railFillRef.current.style.height = `${pct}%`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Fade/slide elements in as they enter the viewport
  useEffect(() => {
    const revealEls = document.querySelectorAll(".svc-reveal");
    if (reducedMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [reducedMotion]);

  const jumpTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="services-page">
      {/* CORE-SAMPLE RAIL (desktop only) --------------------------------- */}
      <nav className="svc-rail" aria-label="Jump to a service">
        <div className="svc-rail-track">
          <div className="svc-rail-fill" ref={railFillRef} />
        </div>
        <ul>
          {services.map((s) => (
            <li key={s.id} className={activeId === s.id ? "is-active" : ""}>
              <a href={`#${s.id}`} onClick={jumpTo(s.id)}>
                <span className="svc-rail-dot" />
                <span className="svc-rail-label">
                  <span className="svc-rail-code">{s.code}</span>
                  {s.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div ref={wrapperRef}>
        {/* MOBILE QUICK NAV (sticky pill bar) ---------------------------- */}
        <div className="svc-mobile-nav">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={jumpTo(s.id)}
              className={activeId === s.id ? "is-active" : ""}
            >
              {s.code}
            </a>
          ))}
        </div>

        {/* QUICK LINKS (service-2 gallery repurposed) --------------------- */}
        <div className="section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6 mx-auto text-center">
                <div className="heading-content" data-aos="fade-up">
                  <h2>Our Core Services</h2>
                  <p>Jump straight to the service line you need.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {services.map((s, i) => (
                <div
                  className="col-lg-3"
                  key={s.id}
                  data-aos="fade-up"
                  data-aos-delay={String((i + 1) * 100)}
                >
                  <div
                    className="service-2 svc-card left-0 mb-5"
                    onClick={jumpTo(s.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        (e as unknown as React.MouseEvent).preventDefault();
                        document
                          .getElementById(s.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <div className="svc-card-media">
                      <img
                        src={`/images/${galleryImages[i]}`}
                        alt={s.title}
                        className="img-fluid mb-4 rounded"
                      />
                      <span className="svc-card-count">
                        {s.items.length} capabilities
                      </span>
                    </div>
                    <div>
                      <span className="svc-card-code">{s.code}</span>
                      <h3>{s.title}</h3>
                      <p>{s.intro}</p>
                      <p>
                        <a href={`#${s.id}`} className="more" onClick={jumpTo(s.id)}>
                          Learn More <span aria-hidden="true">&rarr;</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DETAILED SERVICE BLOCKS ----------------------------------------- */}
        {services.map((s, i) => (
          <div
            className={`section service-section-1 svc-reveal${
              i % 2 === 1 ? " bg-light" : ""
            }`}
            id={s.id}
            key={s.id}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mb-4 mb-lg-0">
                  <div className="heading-content" data-aos="fade-up">
                    <span className="subheading d-inline-block mb-2 svc-tag">
                      {s.code} &middot; {s.rl}
                    </span>
                    <h2>{s.title}</h2>
                    <p>{s.intro}</p>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    {s.items.map((item, idx) => (
                      <div
                        className="col-md-6 mb-3"
                        key={item}
                        style={{ "--i": idx } as React.CSSProperties}
                      >
                        <div className="d-flex svc-item">
                          <span className="icon-checkmark me-2"></span>
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* TARGET INDUSTRIES ------------------------------------------------ */}
        <div className="section service-section-1 svc-reveal">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mb-4 mb-lg-0">
                <div className="heading-content" data-aos="fade-up">
                  <h2>
                    Target <span className="d-block">Industries</span>
                  </h2>
                  <p>
                    Our services are tailored to meet the needs of a broad
                    range of sectors.
                  </p>
                  <div className="svc-filter">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search a sector&hellip;"
                      aria-label="Filter industries"
                    />
                    <span className="svc-filter-count">
                      {filteredIndustries.length} of {targetIndustries.length}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                {filteredIndustries.length > 0 ? (
                  <div className="row">
                    {filteredIndustries.map((ind, i) => (
                      <div
                        key={ind}
                        className="col-6 col-md-6 col-lg-4 mb-4"
                        data-aos="fade-up"
                        data-aos-delay={String((i + 1) * 100)}
                      >
                        <div className="service-1 svc-industry">
                          <div>
                            <h3>{ind}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="svc-empty">
                    <p>
                      No sectors match &ldquo;{query}&rdquo;. Try a different
                      term, or{" "}
                      <button type="button" onClick={() => setQuery("")}>
                        clear the search
                      </button>
                      .
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA -------------------------------------------------------------- */}
        <div className="py-5 bg-primary svc-cta">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center mb-3 mb-lg-0 text-lg-start">
                <h3 className="text-white m-0">
                  Need a service tailored to your operation?
                </h3>
              </div>
              <div className="col-lg-5 text-center text-lg-end">
                <a href="/contact" className="btn btn-outline-white">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap");

        .services-page {
          --svc-ink: #14181d;
          --svc-copper: #b8702e;
          --svc-copper-light: #d98f4c;
          --svc-amber: #e8a33d;
          --svc-steel: #5b6670;
          --svc-steel-light: #aab2ba;
          --svc-paper: #eeece6;
          position: relative;
        }

        .services-page h2,
        .services-page h3,
        .services-page .heading {
          font-family: "Space Grotesk", sans-serif;
          letter-spacing: -0.01em;
        }

        .services-page p,
        .services-page a,
        .services-page span,
        .services-page input,
        .services-page button {
          font-family: "IBM Plex Sans", sans-serif;
        }

        /* ---------- Core-sample rail (desktop) ---------- */
        .svc-rail {
          position: fixed;
          top: 50%;
          right: 28px;
          transform: translateY(-50%);
          z-index: 40;
          display: flex;
          align-items: stretch;
        }

        .svc-rail-track {
          position: relative;
          width: 2px;
          margin-right: 14px;
          background: rgba(91, 102, 112, 0.25);
          border-radius: 2px;
        }

        .svc-rail-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background: linear-gradient(
            to bottom,
            var(--svc-amber),
            var(--svc-copper)
          );
          border-radius: 2px;
          transition: height 0.1s linear;
        }

        .svc-rail ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .svc-rail li {
          margin: 14px 0;
        }

        .svc-rail a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--svc-steel);
          group: rail-item;
        }

        .svc-rail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--svc-steel-light);
          border: 2px solid transparent;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .svc-rail li.is-active .svc-rail-dot {
          background: var(--svc-copper);
          box-shadow: 0 0 0 3px rgba(184, 112, 46, 0.2);
        }

        .svc-rail-label {
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0;
          margin-left: 0;
          font-size: 12.5px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: max-width 0.25s ease, opacity 0.2s ease,
            margin-left 0.25s ease;
        }

        .svc-rail-code {
          font-family: "IBM Plex Mono", monospace;
          font-size: 10.5px;
          letter-spacing: 0.04em;
          color: var(--svc-copper);
          background: rgba(184, 112, 46, 0.1);
          padding: 2px 5px;
          border-radius: 3px;
        }

        .svc-rail li:hover .svc-rail-label,
        .svc-rail li.is-active .svc-rail-label {
          max-width: 220px;
          opacity: 1;
          margin-left: 4px;
        }

        .svc-rail li.is-active a,
        .svc-rail li:hover a {
          color: var(--svc-ink);
        }

        @media (max-width: 1200px) {
          .svc-rail {
            display: none;
          }
        }

        /* ---------- Mobile quick nav ---------- */
        .svc-mobile-nav {
          display: none;
        }

        @media (max-width: 1200px) {
          .svc-mobile-nav {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding: 12px 16px;
            position: sticky;
            top: 0;
            z-index: 30;
            background: #fff;
            border-bottom: 1px solid rgba(91, 102, 112, 0.15);
            -webkit-overflow-scrolling: touch;
          }

          .svc-mobile-nav a {
            flex-shrink: 0;
            font-family: "IBM Plex Mono", monospace;
            font-size: 11px;
            letter-spacing: 0.04em;
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid rgba(91, 102, 112, 0.3);
            color: var(--svc-steel);
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .svc-mobile-nav a.is-active {
            background: var(--svc-ink);
            border-color: var(--svc-ink);
            color: #fff;
          }
        }

        /* ---------- Quick link cards ---------- */
        .svc-card {
          cursor: pointer;
          transition: transform 0.25s ease;
        }

        .svc-card:hover,
        .svc-card:focus-visible {
          transform: translateY(-6px);
          outline: none;
        }

        .svc-card-media {
          position: relative;
          overflow: hidden;
          border-radius: 6px;
        }

        .svc-card-media img {
          transition: transform 0.4s ease;
        }

        .svc-card:hover .svc-card-media img {
          transform: scale(1.06);
        }

        .svc-card-count {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(20, 24, 29, 0.82);
          color: #fff;
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.03em;
          padding: 5px 10px;
          border-radius: 999px;
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.25s ease;
        }

        .svc-card:hover .svc-card-count {
          opacity: 1;
          transform: translateY(0);
        }

        .svc-card-code {
          display: inline-block;
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.05em;
          color: var(--svc-copper);
          margin-bottom: 6px;
        }

        .svc-card .more {
          color: var(--svc-copper);
          font-weight: 600;
          transition: gap 0.2s ease;
        }

        .svc-card .more span {
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .svc-card:hover .more span {
          transform: translateX(4px);
        }

        /* ---------- Scroll reveal ---------- */
        .svc-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .svc-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .svc-tag {
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: var(--svc-copper);
        }

        .svc-item {
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid transparent;
          transition: border-color 0.2s ease, background 0.2s ease,
            transform 0.2s ease;
        }

        .svc-item:hover {
          border-color: rgba(184, 112, 46, 0.35);
          background: rgba(184, 112, 46, 0.06);
          transform: translateX(3px);
        }

        .svc-item .icon-checkmark {
          color: var(--svc-copper);
        }

        /* ---------- Industries filter ---------- */
        .svc-filter {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .svc-filter input {
          border: 1px solid rgba(91, 102, 112, 0.35);
          border-radius: 6px;
          padding: 10px 14px;
          font-size: 14px;
          min-width: 200px;
          background: #fff;
          color: var(--svc-ink);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .svc-filter input:focus {
          outline: none;
          border-color: var(--svc-copper);
          box-shadow: 0 0 0 3px rgba(184, 112, 46, 0.15);
        }

        .svc-filter-count {
          font-family: "IBM Plex Mono", monospace;
          font-size: 11.5px;
          color: var(--svc-steel);
        }

        .svc-industry {
          cursor: default;
          border-top: 3px solid transparent;
          transition: transform 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .svc-industry:hover {
          transform: translateY(-4px);
          border-top-color: var(--svc-copper);
          box-shadow: 0 10px 24px rgba(20, 24, 29, 0.08);
        }

        .svc-empty {
          border: 1px dashed rgba(91, 102, 112, 0.4);
          border-radius: 8px;
          padding: 28px;
          color: var(--svc-steel);
        }

        .svc-empty button {
          background: none;
          border: none;
          padding: 0;
          color: var(--svc-copper);
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
        }

        /* ---------- CTA ---------- */
        .svc-cta {
          background: linear-gradient(
            120deg,
            var(--svc-ink) 0%,
            #23303a 100%
          ) !important;
        }

        .svc-cta .btn-outline-white {
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .svc-cta .btn-outline-white:hover {
          transform: translateY(-2px);
          background: var(--svc-copper);
          border-color: var(--svc-copper);
        }

        @media (prefers-reduced-motion: reduce) {
          .svc-reveal,
          .svc-card,
          .svc-card-media img,
          .svc-industry,
          .svc-rail-fill {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}

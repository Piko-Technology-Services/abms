import type { Metadata } from "next";
import Header from "@/components/Header";
import BackgroundNetwork from "@/components/BackgroundNetwork";
import {
  whoWeAre,
  vision,
  mission,
  coreValues,
  expertiseTeams,
  targetIndustries,
  provinces,
  commitmentQuote,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about African Brotherhood Mining Services & General Trading Limited — our story, vision, mission, core values and nationwide coverage across Zambia.",
};

export default function AboutPage() {
  const firstFour = coreValues.slice(0, 4);
  const restFour = coreValues.slice(4);

  return (
    <>
      <Header active="about" />


      {/* HERO ------------------------------------------------------- */}
      <div className="hero overlay">
        <div className="img-bg rellax">
          <img src="/images/hero_1.jpg" alt="ABMS Limited" className="img-fluid" />
        </div>
                <BackgroundNetwork />

        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">
                About Us
              </h1>
              <p className="mb-5" data-aos="fade-up">
                A Zambian-registered company, established in 2026 by
                nineteen African professionals &mdash; united in strength,
                driven by excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE ----------------------------------------------------- */}
      <div className="section section-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="image-stack mb-5 mb-lg-0">
                <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                  <img src="/images/img_v_1.jpg" alt="ABMS Limited team" className="img-fluid rellax" />
                </div>
                <div
                  className="image-stack__item image-stack__item--top"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-rellax-percentage="0.5"
                >
                  <img src="/images/img_v_2.jpg" alt="ABMS Limited on site" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">
                Who We Are
              </h2>
              {whoWeAre.map((p, i) => (
                <p key={i} data-aos="fade-up" data-aos-delay={String(200 + i * 100)}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VISION & MISSION -------------------------------------------------- */}
      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
              <div className="heading-content">
                <h2>Our Vision</h2>
                <p>{vision}</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="heading-content">
                <h2>Our Mission</h2>
                <p>{mission}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE VALUES ------------------------------------------------------ */}
      <div className="section service-section-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="heading-content" data-aos="fade-up">
                <h2>
                  Our <span className="d-block">Core Values</span>
                </h2>
                <p>
                  Eight principles that guide every service we deliver and
                  every partnership we build.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {firstFour.map((v, i) => (
                  <div
                    key={v.code}
                    className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={String((i + 1) * 100)}
                  >
                    <div className="service-1">
                      <span className="icon">
                        <img src={`/images/svg/0${i + 1}.svg`} alt="" className="img-fluid" />
                      </span>
                      <div>
                        <h3>{v.label}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row mt-4">
                {restFour.map((v) => (
                  <div className="col-lg-12 mb-3" key={v.code}>
                    <div className="bg-white p-4 rounded job-position">
                      <div className="row align-items-center">
                        <div className="col-lg-9">
                          <span className="block subtitle">Core Value {v.code}</span>
                          <h2 className="m-0">{v.label}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERTISE (person cards repurposed) -------------------------------- */}
      <div className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <div className="heading-content" data-aos="fade-up">
                <h2 className="heading">Our Core Expertise</h2>
                <p>
                  Combined expertise of nineteen founding professionals
                  across mining, engineering, construction, logistics and
                  procurement.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {expertiseTeams.map((t) => (
              <div className="col-lg-4" key={t.title}>
                <div className="person">
                  <img src={`/images/${t.image}`} alt={t.title} className="img-fluid mb-4" />
                  <span className="subheading d-inline-block">{t.label}</span>
                  <h3 className="mb-3">{t.title}</h3>
                  <p className="text-muted">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TARGET INDUSTRIES (job-position rows repurposed) -------------------- */}
      <div className="section service-section-1">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <div className="heading-content" data-aos="fade-up">
                <h2 className="heading">Industries We Serve</h2>
                <p>
                  Our services are tailored to meet the needs of a broad
                  range of sectors.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {targetIndustries.map((ind, i) => (
              <div className="col-lg-12" key={ind}>
                <div className="bg-white p-4 rounded job-position">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <span className="block subtitle">Sector {String(i + 1).padStart(2, "0")}</span>
                      <h2 className="m-0">{ind}</h2>
                    </div>
                    <div className="col-lg-5 text-lg-end">
                      <a href="/services" className="d-inline-flex align-items-center">
                        <span className="me-2">Our Services</span>
                        <span className="icon-link2"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COVERAGE ----------------------------------------------------------- */}
      <div className="section bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0" data-aos="fade-up">
              <h2 className="heading mb-3">Geographical Coverage</h2>
              <p>
                Headquartered in Lusaka, we serve clients across all ten
                provinces of Zambia, providing timely logistics
                coordination and dependable service support nationwide
                &mdash; from Lusaka to the mining regions across the
                country.
              </p>
            </div>
            <div className="col-lg-6 offset-lg-1" data-aos="fade-up" data-aos-delay="100">
              <div className="row">
                {provinces.map((p) => (
                  <div className="col-6 col-md-4 mb-3" key={p}>
                    <div className="d-flex align-items-center">
                      <span className="icon-room me-2"></span>
                      <span>{p}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMMITMENT QUOTE ----------------------------------------------------- */}
      <div className="section">
        <div className="container text-center">
          <div className="col-lg-8 mx-auto">
            <div className="quote mb-3">&ldquo;</div>
            <p className="lead">{commitmentQuote}</p>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import {
  company,
  services,
  whoWeAre,
  whyChooseUs,
  targetIndustries,
  coreValues,
  commitmentQuote,
  faqs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  const industryImages = [
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.jpg",
  ];

  return (
    <>
      <Header active="home" />

      {/* HERO ------------------------------------------------------- */}
      <div className="hero overlay">
        <div className="img-bg rellax">
          <img src="/images/hero_1.jpg" alt="ABMS Limited mining operations" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-6">
              <h1 className="heading" data-aos="fade-up">
                United in Strength. Driven by Excellence.
              </h1>
              <p className="mb-5" data-aos="fade-up">
                {company.name} is a Zambian-registered company delivering
                reliable mining services, mining support, general trading
                and logistics solutions &mdash; built by nineteen African
                professionals and serving clients across Zambia and the
                wider African region.
              </p>
              <div data-aos="fade-up">
                <a href="/contact" className="btn btn-primary me-3">
                  Request a Quote
                </a>
                <a href="/services" className="btn btn-outline-white">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE --------------------------------------------------- */}
      <div className="section section-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="image-stack mb-5 mb-lg-0">
                <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                  <img src="/images/img_v_1.jpg" alt="ABMS Limited field operations" className="img-fluid rellax" />
                </div>
                <div
                  className="image-stack__item image-stack__item--top"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-rellax-percentage="0.5"
                >
                  <img src="/images/img_v_2.jpg" alt="ABMS Limited equipment" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <div>
                <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">
                  Who We Are
                </h2>
                <p data-aos="fade-up" data-aos-delay="200">
                  {whoWeAre[0]}
                </p>
                <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                  <a href="/about" className="btn btn-primary">
                    More About Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES ------------------------------------------------------ */}
      <div className="section service-section-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="heading-content" data-aos="fade-up">
                <h2>
                  Our <span className="d-block">Services</span>
                </h2>
                <p>
                  An integrated range of services spanning mining
                  operations, mining support, general trading, and
                  logistics &amp; advisory solutions.
                </p>
                <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                  <a href="/services" className="btn btn-primary">
                    View All
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {services.map((s, i) => (
                  <div
                    key={s.id}
                    className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={String((i + 1) * 100)}
                  >
                    <a href={`/services#${s.id}`} className="service-1">
                      <span className="icon">
                        <img
                          src={`/images/svg/0${i + 1}.svg`}
                          alt=""
                          className="img-fluid"
                        />
                      </span>
                      <div>
                        <h3>{s.title}</h3>
                        <p>{s.intro}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TARGET INDUSTRIES SLIDER --------------------------------------- */}
      <div className="section section-3" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="heading mb-3">Industries We Serve</h2>
              <p>
                Our services are tailored to meet the needs of a broad
                range of sectors across Zambia&rsquo;s mining and
                industrial economy.
              </p>
            </div>
            <div className="col-lg-5 text-md-end" data-aos="fade-up" data-aos-delay="100">
              <div id="destination-controls">
                <span className="prev me-3" data-controls="prev">
                  <span className="icon-chevron-left"></span>
                </span>
                <span className="next" data-controls="next">
                  <span className="icon-chevron-right"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="destination-slider-wrap">
          <div className="destination-slider">
            {targetIndustries.map((ind, i) => (
              <div className="destination" key={ind}>
                <div className="thumb">
                  <img src={`/images/${industryImages[i]}`} alt={ind} className="img-fluid" />
                </div>
                <div className="mt-4">
                  <h3>
                    <a href="/services">{ind}</a>
                  </h3>
                  <span className="meta">Zambia &amp; the wider African region</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMMITMENT ------------------------------------------------------- */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0 order-lg-2" data-aos="fade-up">
              <img src="/images/img-1.jpg" alt="ABMS Limited site operations" className="img-fluid" />
            </div>
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <h2 className="heading mb-4">Our Commitment to Excellence</h2>
              <p>{commitmentQuote}</p>
              <p className="my-4" data-aos="fade-up" data-aos-delay="200">
                <a href="/contact" className="btn btn-primary">
                  Get In Touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US (repurposed testimonial slider) --------------------- */}
      <div className="section bg-light">
        <h2 className="heading mb-5 text-center">Why Choose Us</h2>

        <div className="text-center mb-5">
          <div id="prevnext-testimonial">
            <span className="prev me-3" data-controls="prev">
              <span className="icon-chevron-left"></span>
            </span>
            <span className="next" data-controls="next">
              <span className="icon-chevron-right"></span>
            </span>
          </div>
        </div>

        <div className="wide-slider-testimonial-wrap">
          <div className="wide-slider-testimonial">
            {whyChooseUs.map((point, i) => (
              <div className="item" key={i}>
                <blockquote className="block-testimonial">
                  <div className="author">
                    <h3>{company.shortName}</h3>
                    <p className="position mb-5">Our Commitment</p>
                  </div>
                  <p>
                    <span className="quote">&ldquo;</span>
                    &ldquo;{point}&rdquo;
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ ------------------------------------------------------------- */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <img src="/images/img_v_2.jpg" alt="ABMS Limited operations" className="img-fluid" />
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
              <h2 className="heading mb-5">
                Frequently Asked <br /> Questions
              </h2>

              <div className="custom-accordion" id="accordion_1">
                {faqs.map((item, i) => (
                  <div className="accordion-item" key={i}>
                    <h2 className="mb-0">
                      <button
                        className={`btn btn-link${i !== 0 ? " collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqCollapse${i}`}
                        aria-expanded={i === 0}
                        aria-controls={`faqCollapse${i}`}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`faqCollapse${i}`}
                      className={`collapse${i === 0 ? " show" : ""}`}
                      data-bs-parent="#accordion_1"
                    >
                      <div className="accordion-body">{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE VALUES (recent-posts layout repurposed) ------------------------ */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="0">
              <h2 className="heading mb-5">Our Core Values</h2>
            </div>
          </div>
          <div className="row align-items-stretch">
            {coreValues.slice(0, 4).map((v, i) => (
              <div
                className="col-6 col-sm-6 col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={String((i + 1) * 100)}
                key={v.code}
              >
                <div className="media-entry">
                  <a href="/about">
                    <img src={`/images/gal_${i + 1}.jpg`} alt={v.label} className="img-fluid" />
                  </a>
                  <div className="bg-white m-body">
                    <span className="date">{v.code}</span>
                    <h3>
                      <a href="/about">{v.label}</a>
                    </h3>
                    <a href="/about" className="more d-flex align-items-center float-start">
                      <span className="label">Learn More</span>
                      <span className="arrow">
                        <span className="icon-keyboard_arrow_right"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA -------------------------------------------------------------- */}
      <div className="py-5 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center mb-3 mb-lg-0 text-lg-start">
              <h3 className="text-white m-0">
                Let&rsquo;s discuss your project requirements.
              </h3>
            </div>
            <div className="col-lg-5 text-center text-lg-end">
              <a href="/contact" className="btn btn-outline-white">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

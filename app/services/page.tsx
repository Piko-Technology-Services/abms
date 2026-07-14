import type { Metadata } from "next";
import Header from "@/components/Header";
import { services, targetIndustries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mining services, mining support services, general trading & supply, and logistics, procurement & advisory services offered by ABMS Limited across Zambia.",
};

export default function ServicesPage() {
  const galleryImages = ["gal_5.jpg", "gal_6.jpg", "gal_3.jpg", "gal_4.jpg"];

  return (
    <>
      <Header active="services" />

      {/* HERO ------------------------------------------------------- */}
      <div className="hero overlay">
        <div className="img-bg rellax">
          <img src="/images/hero_2.jpg" alt="ABMS Limited services" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">
                Services
              </h1>
              <p className="mb-5" data-aos="fade-up">
                An integrated range of services spanning mining
                operations, mining support, general trading, and
                logistics and advisory solutions &mdash; delivered to
                strict safety and performance standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK LINKS (service-2 gallery repurposed) --------------------------- */}
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
              <div className="col-lg-3" key={s.id}>
                <div className="service-2 left-0 mb-5">
                  <img src={`/images/${galleryImages[i]}`} alt={s.title} className="img-fluid mb-4 rounded" />
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.intro}</p>
                    <p>
                      <a href={`#${s.id}`} className="more">
                        Learn More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DETAILED SERVICE BLOCKS ------------------------------------------------ */}
      {services.map((s, i) => (
        <div
          className={`section service-section-1${i % 2 === 1 ? " bg-light" : ""}`}
          id={s.id}
          key={s.id}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mb-4 mb-lg-0">
                <div className="heading-content" data-aos="fade-up">
                  <span className="subheading d-inline-block mb-2">
                    {s.code} &middot; {s.rl}
                  </span>
                  <h2>{s.title}</h2>
                  <p>{s.intro}</p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {s.items.map((item) => (
                    <div className="col-md-6 mb-3" key={item}>
                      <div className="d-flex">
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

      {/* TARGET INDUSTRIES ------------------------------------------------------ */}
      <div className="section service-section-1">
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
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {targetIndustries.map((ind, i) => (
                  <div
                    key={ind}
                    className="col-6 col-md-6 col-lg-4 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={String((i + 1) * 100)}
                  >
                    <div className="service-1">
                      <div>
                        <h3>{ind}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA -------------------------------------------------------------- */}
      <div className="py-5 bg-primary">
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
    </>
  );
}

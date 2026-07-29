import Header from "@/components/Header";
import BackgroundNetwork from "@/components/BackgroundNetwork";

export default function HSEPage() {
  return (
    <>
              <Header active="hse" />
              <BackgroundNetwork />
        
              {/* HERO ------------------------------------------------------- */}
              <div className="hero overlay">
                <div className="img-bg rellax">
                  <img src="/images/hero_2.jpg" alt="Contact ABMS Limited" className="img-fluid" />
                </div>
                <div className="container">
                  <div className="row align-items-center justify-content-start">
                    <div className="col-lg-6 mx-auto text-center">
                      <h1 className="heading" data-aos="fade-up">
                        Contact
                      </h1>
                      <p data-aos="fade-up">
                        Speak with our team about mining services, mining support,
                        general trading or logistics requirements anywhere in
                        Zambia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        {/* Hero Section */}
        <section className="hero-section  my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <span className="eyebrow">ABMS LIMITED</span>

                <h1>Health, Safety & Environment</h1>

                <p>
                  Safety, responsible operations, environmental awareness, and
                  regulatory compliance are central to how we deliver our
                  services.
                </p>
              </div>

              <div className="col-lg-5">
                {/* Placeholder for HSE hero image */}
                <div className="content-placeholder">
                  HSE Hero Image
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HSE Introduction */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                {/* Placeholder for HSE image */}
                <div className="content-placeholder">
                  HSE Operations Image
                </div>
              </div>

              <div className="col-lg-6">
                <span className="eyebrow">OUR COMMITMENT</span>

                <h2>Safety Is an Operational Priority</h2>

                <p>
                  Placeholder content describing ABMS Limited’s commitment to
                  protecting employees, clients, contractors, communities, and
                  the environment.
                </p>

                <p>
                  Placeholder content describing how safety requirements are
                  incorporated into planning, operations, supervision, and
                  project delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HSE Pillars */}
        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <span className="eyebrow">OUR HSE APPROACH</span>

                <h2>Our Key Commitments</h2>

                <p>
                  Placeholder introduction to the company’s HSE principles and
                  operational standards.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">01</div>

                  <h3>Health & Wellbeing</h3>

                  <p>
                    Placeholder content covering employee health, wellbeing,
                    workplace conditions, and occupational health practices.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">02</div>

                  <h3>Workplace Safety</h3>

                  <p>
                    Placeholder content covering hazard identification, risk
                    assessment, safety procedures, and incident prevention.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">03</div>

                  <h3>Environmental Responsibility</h3>

                  <p>
                    Placeholder content covering environmental protection,
                    responsible resource use, and waste management.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">04</div>

                  <h3>Training & Awareness</h3>

                  <p>
                    Placeholder content covering HSE training, employee
                    awareness, inductions, and continuous improvement.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">05</div>

                  <h3>Risk Management</h3>

                  <p>
                    Placeholder content covering operational risk assessment,
                    control measures, monitoring, and reporting.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">06</div>

                  <h3>Compliance</h3>

                  <p>
                    Placeholder content covering compliance with applicable
                    laws, regulations, client requirements, and industry
                    standards.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* HSE Policy */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <span className="eyebrow">HSE POLICY</span>

                <h2>Our Responsibility</h2>

                <p>
                  Placeholder for the official ABMS Health, Safety and
                  Environmental Policy statement.
                </p>

                <p>
                  The final policy can be added here once it has been approved
                  by management.
                </p>

                <a
                  href="#"
                  className="btn btn-outline-primary"
                  aria-disabled="true"
                >
                  Download HSE Policy
                </a>
              </div>

              <div className="col-lg-5">
                {/* Placeholder for policy or safety image */}
                <div className="content-placeholder">
                  HSE Policy Document / Image
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="cta-section text-center">
              <span className="eyebrow">ABMS LIMITED</span>

              <h2>Committed to Safe and Responsible Operations</h2>

              <p>
                Contact us to learn more about our operational standards and
                HSE approach.
              </p>

              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
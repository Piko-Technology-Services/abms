import Header from "@/components/Header";
import BackgroundNetwork from "@/components/BackgroundNetwork";

export default function CareersPage() {
  return (
     <>
          <Header active="careers" />
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
          
        <section className="hero-section my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <span className="eyebrow">CAREERS AT ABMS</span>

                <h1>Build Your Career With Us</h1>

                <p>
                  Join a growing Zambian company delivering mining services,
                  operational support, logistics, procurement, and general
                  trading solutions across Zambia and the wider African region.
                </p>
              </div>

              <div className="col-lg-5">
                <div className="content-placeholder">
                  Careers Hero Image
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="content-placeholder">
                  ABMS Team Image
                </div>
              </div>

              <div className="col-lg-6">
                <span className="eyebrow">WORKING AT ABMS</span>

                <h2>Grow With a Team Built on Unity</h2>

                <p>
                  Placeholder content describing the ABMS work environment,
                  professional culture, teamwork, and career-development
                  opportunities.
                </p>

                <p>
                  Placeholder content describing the company’s commitment to
                  professional growth, safety, innovation, and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Benefits */}
        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <span className="eyebrow">WHY JOIN ABMS</span>

                <h2>Opportunities to Learn and Grow</h2>

                <p>
                  Placeholder introduction to the benefits of working with
                  ABMS Limited.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="career-card">
                  <div className="career-number">01</div>

                  <h3>Professional Growth</h3>

                  <p>
                    Placeholder content about training, mentorship, and career
                    development.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="career-card">
                  <div className="career-number">02</div>

                  <h3>Industry Exposure</h3>

                  <p>
                    Placeholder content about exposure to mining, logistics,
                    procurement, and industrial projects.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="career-card">
                  <div className="career-number">03</div>

                  <h3>Collaborative Culture</h3>

                  <p>
                    Placeholder content about teamwork, unity, and shared
                    professional goals.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <span className="eyebrow">CURRENT OPPORTUNITIES</span>

                <h2>Available Positions</h2>

                <p>
                  Current employment opportunities will be published here.
                </p>
              </div>
            </div>

            {/* Empty State */}
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="empty-state text-center">
                  <h3>No Current Vacancies</h3>

                  <p>
                    There are currently no open positions. Please check this
                    page again for future opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Future job card example */}
            {/*
            <div className="job-card">
              <div>
                <span>FULL-TIME</span>
                <h3>Mining Operations Officer</h3>
                <p>Lusaka, Zambia</p>
              </div>

              <a href="/careers/mining-operations-officer">
                View Position
              </a>
            </div>
            */}
          </div>
        </section>

        {/* General Application */}
        <section className="section bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="eyebrow">GENERAL APPLICATION</span>

                <h2>Interested in Working With ABMS?</h2>

                <p>
                  Placeholder content inviting qualified professionals to
                  submit their CVs for future opportunities.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <a href="/contact" className="btn btn-primary">
                  Submit Your CV
                </a>
              </div>
            </div>
          </div>
        </section>
      {/* </main> */}
    </>
  );
}
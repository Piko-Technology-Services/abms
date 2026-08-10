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
                  <img src="/images/new/hse.jpg" alt="Contact ABMS Limited" className="img-fluid" />
                </div>
                <div className="container">
                  <div className="row align-items-center justify-content-start">
                    <div className="col-lg-6 mx-auto text-center">
                      <h1 className="heading" data-aos="fade-up">
                        Health, Safety & Environment
                      </h1>
                      <p data-aos="fade-up">
                        At ABMS Limited we prioritise the health and safety of
                        our people, partners and the communities where we
                        operate. We embed environmental stewardship and
                        regulatory compliance into every stage of project
                        delivery to ensure safe, sustainable outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    
        

        {/* HSE Introduction */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                {/* HSE image */}
                <figure>
                  <img src="/images/new/hse1.jpg" alt="HSE Operations" className="img-fluid" />
                </figure>
              </div>

              <div className="col-lg-6">
                <span className="eyebrow">OUR COMMITMENT</span>

                <h2>Safety Is an Operational Priority</h2>

                <p>
                  ABMS Limited is committed to protecting the wellbeing of
                  employees, clients and contractors by maintaining robust
                  safety systems, clear accountabilities and proactive
                  incident prevention. We work closely with local
                  stakeholders to minimise community and environmental
                  impacts.
                </p>

                <p>
                  Safety requirements are integrated into planning and
                  operations through risk-based procedures, permit-to-work
                  controls, competency assurance and on-site supervision.
                  Continuous monitoring and lessons-learned activities drive
                  ongoing improvement.
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
                  Our HSE framework is built on leadership, risk
                  management, training and compliance. We set measurable
                  targets, audit performance regularly and ensure full
                  regulatory alignment across all operations.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">01</div>

                  <h3>Health & Wellbeing</h3>

                  <p>
                      We promote physical and mental wellbeing through health
                      surveillance, access to occupational health services,
                      fatigue management and wellness programmes.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">02</div>

                  <h3>Workplace Safety</h3>

                  <p>
                    Our safety programme focuses on hazard identification,
                    rigorous risk assessment, standardised procedures and
                    behaviour-based safety to prevent incidents on site.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">03</div>

                  <h3>Environmental Responsibility</h3>

                  <p>
                    We minimise environmental impact by controlling
                    emissions, protecting biodiversity, conserving resources
                    and applying waste-reduction and recycling practices.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">04</div>

                  <h3>Training & Awareness</h3>

                  <p>
                    Training and competency development ensure employees
                    and contractors understand risks, operate safely and
                    contribute to continuous HSE improvement.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">05</div>

                  <h3>Risk Management</h3>

                  <p>
                    Our risk management approach combines quantitative and
                    qualitative assessments, control implementation,
                    performance monitoring and transparent reporting.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="hse-card">
                  <div className="hse-number">06</div>

                  <h3>Compliance</h3>

                  <p>
                    We maintain compliance with all applicable legislation,
                    client requirements and recognised industry standards,
                    supported by regular audits and corrective action plans.
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
                  ABMS Limited’s HSE Policy commits to zero harm, legal
                  compliance and continual improvement. We will identify
                  and control risks, consult with our workforce, and
                  allocate resources to maintain safe and environmentally
                  responsible operations.
                </p>

                <p>
                  The policy is supported by measurable objectives, regular
                  training and a governance structure ensuring senior
                  management accountability for HSE performance.
                </p>

                
              </div>

              <div className="col-lg-5">
                {/* Placeholder for policy or safety image */}
                <figure>
                  <img src="/images/new/hse2.jpg" alt="HSE Policy" className="img-fluid" />
                </figure>
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
                For enquiries about our HSE systems, training or to discuss
                site-specific requirements, contact our HSE team. We
                provide tailored support to meet client and regulatory
                expectations.
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
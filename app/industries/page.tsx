import BackgroundNetwork from "@/components/BackgroundNetwork";
import Header from "@/components/Header";

export default function IndustriesPage() {
  return (
   <>
             <Header active="industries" />
       
             {/* HERO ------------------------------------------------------- */}
             <div className="hero overlay">
               <div className="img-bg rellax">
                 <img src="/images/new/manufacturing.jpg" alt="Contact ABMS Limited" className="img-fluid" />
               </div>
                       <BackgroundNetwork />

               <div className="container">
                 <div className="row align-items-center justify-content-start">
                   <div className="col-lg-6 mx-auto text-center">
                     <h1 className="heading" data-aos="fade-up">
                       Industries We Serve
                     </h1>
                     <p data-aos="fade-up">
                       We partner with organisations across Zambia and the wider
                       African region to deliver integrated mining support,
                       strategic procurement, supply chain logistics and on-site
                       operational services tailored to local conditions.
                     </p>
                   </div>
                 </div>
               </div>
             </div>

        {/* Introduction */}
        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
                <span className="eyebrow">OUR INDUSTRIES</span>

                <h2>Supporting Zambia’s Industrial Growth</h2>

                <p>
                  ABMS Limited delivers industry-specific services — from
                  equipment supply and materials procurement to onsite project
                  management and logistics — designed to improve uptime, reduce
                  costs and comply with regional regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section bg-light">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="industry-card">
                  <div className="industry-icon">
                    {/* Mining icon placeholder */}
                    ⛏
                  </div>

                  <h3>Mining Companies</h3>

                  <p>
                    We provide exploration and production support, heavy-duty
                    equipment supply and rental, spare parts procurement, and
                    logistics solutions including mine-site transport and
                    staged deliveries to maximise production continuity.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="industry-card">
                  <div className="industry-icon">
                    {/* Construction icon placeholder */}
                    🏗
                  </div>

                  <h3>Construction Firms</h3>

                  <p>
                    Services for contractors include bulk materials supply,
                    specialist plant hire, site logistics coordination,
                    scaffold and temporary works procurement, and safety
                    compliance support for large civil and building projects.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="industry-card">
                  <div className="industry-icon">
                    {/* Manufacturing icon placeholder */}
                    ⚙
                  </div>

                  <h3>Manufacturing Industries</h3>

                  <p>
                    Support for manufacturers spans raw material sourcing,
                    spare parts provisioning, inventory management,
                    preventative maintenance programs and just-in-time
                    logistics to reduce downtime and working capital.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="industry-card">
                  <div className="industry-icon">
                    {/* Government icon placeholder */}
                    🏛
                  </div>

                  <h3>Government Institutions</h3>

                  <p>
                    Procurement and project support for public sector bodies —
                    including tender advisory, compliant supply solutions,
                    asset management and technical advisory to deliver
                    transparent, cost-effective outcomes.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="industry-card">
                  <div className="industry-icon">
                    {/* Agriculture icon placeholder */}
                    🌾
                  </div>

                  <h3>Agricultural Enterprises</h3>

                  <p>
                    Agricultural support services include bulk fertiliser and
                    seed supply, cold-chain and farm-to-market logistics,
                    equipment servicing and seasonal procurement planning to
                    improve yields and farm profitability.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="industry-card">
                  <div className="industry-icon">
                    {/* Energy icon placeholder */}
                    ⚡
                  </div>

                  <h3>Energy & Utility Companies</h3>

                  <p>
                    We assist energy and utility firms with critical spares
                    procurement, transformer and generator supply, field
                    service technicians and logistics for remote site
                    maintenance and emergency response.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="cta-section text-center">
              <span className="eyebrow">WORK WITH ABMS</span>

              <h2>Let’s Discuss Your Industry Requirements</h2>

              <p>
                Contact our commercial team to discuss a tailored scope,
                receive a project quotation or arrange a site survey and
                feasibility assessment.
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
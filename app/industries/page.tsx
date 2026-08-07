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
                       Supporting businesses and institutions across Zambia and the
                  wider African region with reliable mining, supply, logistics,
                  procurement, and operational solutions.
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
                  ABMS Limited provides flexible and integrated solutions
                  designed around the operational requirements of different
                  industries.
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
                    Placeholder content describing mining services, operational
                    support, equipment, supply, and logistics solutions.
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
                    Placeholder content describing construction support,
                    materials supply, procurement, and logistics services.
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
                    Placeholder content describing industrial supply,
                    procurement, operational support, and logistics solutions.
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
                    Placeholder content describing supply, procurement, project
                    support, and advisory services.
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
                    Placeholder content describing agricultural supply,
                    logistics, procurement, and operational solutions.
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
                    Placeholder content describing supply, logistics,
                    procurement, and technical support services.
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
                Contact our team to discuss tailored solutions for your
                organisation or project.
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
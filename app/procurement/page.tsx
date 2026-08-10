import Header from "@/components/Header";
import BackgroundNetwork from "@/components/BackgroundNetwork";

export default function ProcurementPage() {
  return (
   <>
             <Header active="procurement" />
             <BackgroundNetwork />
       
             {/* HERO ------------------------------------------------------- */}
             <div className="hero overlay">
               <div className="img-bg rellax">
                 <img src="/images/new/procurement.jpg" alt="Contact ABMS Limited" className="img-fluid" />
               </div>
               <div className="container">
                 <div className="row align-items-center justify-content-start">
                   <div className="col-lg-6 mx-auto text-center">
                     <h1 className="heading" data-aos="fade-up">
                       Procurement & Supply
                     </h1>
                     <p data-aos="fade-up">
                       Work with our procurement specialists to source industrial
                       materials, equipment and services for mining, construction,
                       logistics and general trade across Zambia and Southern Africa.
                       We manage supplier selection, tendering, contract compliance
                       and reliable delivery.
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

                <h1>Suppliers & Procurement</h1>

                <p>
                  Building reliable supplier relationships and strengthening
                  procurement capability to support mining, industrial,
                  construction, logistics, and general supply requirements.
                </p>
              </div>

              <div className="col-lg-5">
                                <img src="/images/new/procurement1.jpg" alt="Careers at ABMS Limited" className="img-fluid rounded" />

              </div>
            </div>
          </div>
        </section>

        {/* Supplier Introduction */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                                <img src="/images/new/procurement.png" alt="Careers at ABMS Limited" className="img-fluid rounded" />

              </div>

              <div className="col-lg-6">
                <span className="eyebrow">SUPPLIER PARTNERSHIPS</span>

                <h2>Working With Reliable Suppliers</h2>

                <p>
                  ABMS Limited partners with accredited suppliers across Zambia
                  and southern Africa to supply essential materials, equipment
                  and services for mining, construction and logistics projects.
                </p>

                <p>
                  Our procurement process focuses on compliance, delivery
                  performance, competitive pricing and long-term supplier
                  relationships that support safe, efficient operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supplier Categories */}
        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <span className="eyebrow">SUPPLY CATEGORIES</span>

                <h2>Areas of Supplier Interest</h2>

                <p>
                  ABMS is looking for suppliers who can support operational
                  requirements with dependable products and services across
                  mining, industrial, construction and logistics categories.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Mining Equipment</h3>

                  <p>
                    Providers of excavators, haul trucks, drills, conveyors,
                    wear parts and specialist mining machinery for site work.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Industrial Supplies</h3>

                  <p>
                    Suppliers of safety equipment, electrical components,
                    hydraulics, fasteners, welding consumables and maintenance
                    materials.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Construction Materials</h3>

                  <p>
                    Suppliers of concrete, steel reinforcement, piping,
                    aggregates, formwork and construction supplies for project
                    works.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Transport & Logistics</h3>

                  <p>
                    Freight, haulage, warehousing and logistics support for the
                    movement of goods, materials and equipment to project sites.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Professional Services</h3>

                  <p>
                    Engineering, surveying, environmental consultancy, project
                    management and technical advisory services.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>General Trading</h3>

                  <p>
                    Providers of office supplies, PPE, general consumables,
                    packaging and support goods for site and office operations.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Supplier Requirements */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <span className="eyebrow">SUPPLIER REQUIREMENTS</span>

                <h2>Supplier Registration</h2>

                <p>
                  To become an approved ABMS supplier, companies must complete
                  our registration process and provide documentation for
                  verification and prequalification.
                </p>
              </div>

              <div className="col-lg-7">
                <div className="requirements-card">
                  <h3>Required Supplier Information</h3>

                  <ul>
                    <li>Company registration documentation</li>
                    <li>Valid tax and statutory documentation</li>
                    <li>Company profile</li>
                    <li>Product or service catalogue</li>
                    <li>Relevant industry certifications</li>
                    <li>Previous project or supply references</li>
                    <li>Banking and contact information</li>
                  </ul>

                  <p>
                    Our procurement team uses this information to confirm the
                    supplier’s capability, compliance and readiness for ABMS
                    supply contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="section bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="eyebrow">BECOME A SUPPLIER</span>

                <h2>Register Your Company With ABMS</h2>

                <p>
                  If your business can supply quality goods or services for
                  mining, construction or logistics operations, send your
                  company details for evaluation by the ABMS procurement team.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <a href="/contact" className="btn btn-primary">
                  Supplier Registration
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Procurement Contact */}
        {/* <section className="section">
          <div className="container">
            <div className="cta-section text-center">
              <span className="eyebrow">PROCUREMENT ENQUIRIES</span>

              <h2>Contact the Procurement Team</h2>

              <p>
                For procurement enquiries or supplier onboarding information,
                please visit our contact page to speak with the ABMS
                procurement office.
              </p>

              <a href="/contact" className="btn btn-outline-primary">
                Contact Us
              </a>
            </div>
          </div>
        </section> */}
      
    </>
  );
}
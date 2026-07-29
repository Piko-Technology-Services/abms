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

                <h1>Suppliers & Procurement</h1>

                <p>
                  Building reliable supplier relationships and strengthening
                  procurement capability to support mining, industrial,
                  construction, logistics, and general supply requirements.
                </p>
              </div>

              <div className="col-lg-5">
                <div className="content-placeholder">
                  Procurement Hero Image
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supplier Introduction */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="content-placeholder">
                  Supplier Partnership Image
                </div>
              </div>

              <div className="col-lg-6">
                <span className="eyebrow">SUPPLIER PARTNERSHIPS</span>

                <h2>Working With Reliable Suppliers</h2>

                <p>
                  Placeholder content describing ABMS supplier partnerships,
                  sourcing requirements, supplier evaluation, and procurement
                  standards.
                </p>

                <p>
                  Placeholder content describing the company’s commitment to
                  quality, reliability, competitive pricing, transparency, and
                  responsible procurement.
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
                  Placeholder introduction to the products and services ABMS
                  may procure from qualified suppliers.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Mining Equipment</h3>

                  <p>
                    Placeholder content for mining equipment, machinery,
                    components, tools, and related supplies.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Industrial Supplies</h3>

                  <p>
                    Placeholder content for industrial materials, consumables,
                    equipment, and operational supplies.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Construction Materials</h3>

                  <p>
                    Placeholder content for construction materials, equipment,
                    and project-related supplies.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Transport & Logistics</h3>

                  <p>
                    Placeholder content for transportation, freight,
                    warehousing, and logistics support services.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>Professional Services</h3>

                  <p>
                    Placeholder content for technical, engineering, advisory,
                    consulting, and specialist services.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="procurement-card">
                  <h3>General Trading</h3>

                  <p>
                    Placeholder content for general goods, office supplies,
                    consumables, and other products.
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
                  Placeholder content explaining the ABMS supplier registration
                  and prequalification process.
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
                    Final supplier requirements will be confirmed by the ABMS
                    procurement department.
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
                  Placeholder content inviting qualified suppliers and service
                  providers to submit their company information.
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
        <section className="section">
          <div className="container">
            <div className="cta-section text-center">
              <span className="eyebrow">PROCUREMENT ENQUIRIES</span>

              <h2>Contact the Procurement Team</h2>

              <p>
                Placeholder procurement contact details and enquiry
                information.
              </p>

              <a href="/contact" className="btn btn-outline-primary">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      
    </>
  );
}
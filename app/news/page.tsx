import Header from "@/components/Header";
import BackgroundNetwork from "@/components/BackgroundNetwork";

export default function NewsPage() {
  return (
    
     <>
               <Header active="news" />
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

                <h1>News & Insights</h1>

                <p>
                  Stay informed about ABMS activities, company developments,
                  industry insights, operational updates, and important
                  announcements.
                </p>
              </div>

              <div className="col-lg-5">
                <div className="content-placeholder">
                  News & Insights Hero Image
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="content-placeholder">
                  Featured Article Image
                </div>
              </div>

              <div className="col-lg-6">
                <span className="eyebrow">FEATURED UPDATE</span>

                <p className="article-date">
                  Placeholder Date
                </p>

                <h2>Featured ABMS Company Update</h2>

                <p>
                  Placeholder content for an important ABMS announcement,
                  company milestone, project update, partnership, or industry
                  development.
                </p>

                <a href="#" className="btn btn-outline-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <span className="eyebrow">LATEST UPDATES</span>

                <h2>Latest News</h2>

                <p>
                  Company announcements and industry-related updates will be
                  published here.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="news-card">
                  <div className="news-image-placeholder">
                    News Image
                  </div>

                  <div className="news-content">
                    <span className="news-category">
                      COMPANY NEWS
                    </span>

                    <p className="article-date">
                      Placeholder Date
                    </p>

                    <h3>
                      Placeholder Company Announcement
                    </h3>

                    <p>
                      Placeholder summary for an ABMS company announcement or
                      operational update.
                    </p>

                    <a href="#">
                      Read Article
                    </a>
                  </div>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="news-card">
                  <div className="news-image-placeholder">
                    News Image
                  </div>

                  <div className="news-content">
                    <span className="news-category">
                      INDUSTRY INSIGHT
                    </span>

                    <p className="article-date">
                      Placeholder Date
                    </p>

                    <h3>
                      Placeholder Mining Industry Insight
                    </h3>

                    <p>
                      Placeholder summary covering mining, logistics,
                      procurement, or industrial developments.
                    </p>

                    <a href="#">
                      Read Article
                    </a>
                  </div>
                </article>
              </div>

              <div className="col-md-6 col-lg-4">
                <article className="news-card">
                  <div className="news-image-placeholder">
                    News Image
                  </div>

                  <div className="news-content">
                    <span className="news-category">
                      OPERATIONS
                    </span>

                    <p className="article-date">
                      Placeholder Date
                    </p>

                    <h3>
                      Placeholder Operations Update
                    </h3>

                    <p>
                      Placeholder summary covering ABMS operations, projects,
                      equipment, or service delivery.
                    </p>

                    <a href="#">
                      Read Article
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section">
          <div className="container">
            <div className="newsletter-section text-center">
              <span className="eyebrow">STAY INFORMED</span>

              <h2>Receive ABMS Updates</h2>

              <p>
                Placeholder content inviting visitors to subscribe to company
                and industry updates.
              </p>

              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                />

                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
   
    </>
  );
}
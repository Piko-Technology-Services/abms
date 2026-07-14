import type { Metadata } from "next";
import Header from "@/components/Header";
import { company, businessHours } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ABMS Limited in Lusaka, Zambia for mining services, mining support, general trading and logistics enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />

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

      {/* GET IN TOUCH ------------------------------------------------- */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="0">
              <h2 className="heading mb-5">Get In Touch</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info">
                <div className="address mt-4">
                  <i className="icon-room"></i>
                  <h4 className="mb-2">Location:</h4>
                  <p>{company.address}</p>
                </div>

                <div className="open-hours mt-4">
                  <i className="icon-clock-o"></i>
                  <h4 className="mb-2">Open Hours:</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${businessHours.days}:<br>${businessHours.hours}`,
                    }}
                  />
                </div>

                <div className="email mt-4">
                  <i className="icon-envelope"></i>
                  <h4 className="mb-2">Email:</h4>
                  <p>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </p>
                </div>

                <div className="phone mt-4">
                  <i className="icon-phone"></i>
                  <h4 className="mb-2">Call:</h4>
                  <p>
                    <a href={`tel:${company.phone.replace(/\s+/g, "")}`}>{company.phone}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <form action="#" method="POST">
                <div className="row">
                  <div className="col-6 mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-6 mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={7}
                      className="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <input type="submit" value="Send Message" className="btn btn-primary" />
                  </div>
                </div>
              </form>
              <p className="text-muted mt-3 small">
                This form is not yet wired to a backend &mdash; connect it
                to a service such as Formspree, Resend, or a custom API
                route to start receiving submissions. In the meantime,
                reach us directly at{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

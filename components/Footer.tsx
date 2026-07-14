import { company, services } from "@/lib/content";

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3>
                {company.shortName}
                <span className="text-primary">.</span>
              </h3>
              <p>
                A Zambian-registered mining services and general trading
                company headquartered in Lusaka, serving clients across
                Zambia and the wider African region.
              </p>
            </div>
            <div className="widget">
              <h3>Connect</h3>
              <ul className="list-unstyled social">
                <li>
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 ml-auto">
            <div className="widget">
              <h3>Links</h3>
              <ul className="list-unstyled float-left links">
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <h3>Services</h3>
              <ul className="list-unstyled float-left links">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href={`/services#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <h3>Contact</h3>
              <address>{company.address}</address>
              <ul className="list-unstyled links mb-4">
                <li>
                  <a href={`tel:${company.phone.replace(/\s+/g, "")}`}>
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="mb-0">
              Copyright &copy; {new Date().getFullYear()}. All Rights
              Reserved &mdash; {company.name}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

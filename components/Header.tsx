import { company } from "@/lib/content";
import BackgroundNetwork from "./BackgroundNetwork";

export type Page =
  | "home"
  | "about"
  | "services"
  | "industries"
  | "hse"
  | "careers"
  | "news"
  | "procurement"
  | "contact";

type HeaderProps = {
  active: Page;
};

export default function Header({ active }: HeaderProps) {
  const cls = (page: Page) => (active === page ? "active" : "");

  return (
    <nav className="site-nav">
      <BackgroundNetwork />

      <div className="container">
        <div className="site-navigation">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-6 col-lg-3">
              <a href="/" className="d-inline-block abms-logo-spiral">
                <div
                  className="abms-logo__stage"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    aspectRatio: "1 / 1",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.25rem",
                  }}
                >
                    <span className="abms-logo-spiral__ring abms-logo-spiral__ring--outer" aria-hidden="true"></span>
                    <span className="abms-logo-spiral__ring abms-logo-spiral__ring--inner" aria-hidden="true"></span>
                    <img src="/images/logo.png" alt={company.name} className="site-logo"/>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="col-lg-7 d-none d-lg-inline-block text-center nav-center-wrap">
              <ul className="js-clone-nav text-center site-menu p-0 m-0">
                <li className={cls("home")}>
                  <a href="/">Home</a>
                </li>

                <li className={cls("about")}>
                  <a href="/about">About Us</a>
                </li>

                <li className={cls("services")}>
                  <a href="/services">Services</a>
                </li>

                <li className={cls("industries")}>
                  <a href="/industries">Industries</a>
                </li>

                <li className={cls("hse")}>
                  <a href="/hse">HSE</a>
                </li>
                <li className={cls("careers")}>
                  <a href="/careers">Careers</a>
                </li>

                <li className={cls("news")}>
                  <a href="/news">News</a>
                </li>

                <li className={cls("procurement")}>
                  <a href="/procurement">Procurement</a>
                </li>
              </ul>
            </div>

            {/* Contact Button */}
            <div className="col-6 col-lg-2 text-lg-end">
              <ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu p-0 m-0">
                <li className={`cta-button ${cls("contact")}`}>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <a
                href="#"
                className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-label="Open navigation menu"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
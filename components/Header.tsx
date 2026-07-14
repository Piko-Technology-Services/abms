import { company } from "@/lib/content";

type Page = "home" | "about" | "services" | "contact";

export default function Header({ active }: { active: Page }) {
  const cls = (page: Page) => (active === page ? "active" : "");

  return (
    <nav className="site-nav mt-3">
      <div className="container">
        <div className="site-navigation">
          <div className="row">
            <div className="col-6 col-lg-3">
              <a href="/" className="logo m-0 float-start">
                {company.shortName}
              </a>
            </div>
            <div className="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap">
              <ul className="js-clone-nav text-center site-menu p-0 m-0">
                <li className={cls("home")}>
                  <a href="/">Home</a>
                </li>
                <li className={cls("about")}>
                  <a href="/about">About us</a>
                </li>
                <li className={cls("services")}>
                  <a href="/services">Services</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 text-lg-end">
              <ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu">
                <li className="cta-button">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>

              <a
                href="#"
                className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                data-toggle="collapse"
                data-target="#main-navbar"
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

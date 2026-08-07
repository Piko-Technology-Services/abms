import type { Metadata } from "next";
import Header from "@/components/Header";
import BackgroundNetwork from "@/components/BackgroundNetwork";
import { services, targetIndustries } from "@/lib/content";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mining services, mining support services, general trading & supply, and logistics, procurement & advisory services offered by ABMS Limited across Zambia.",
};

export default function ServicesPage() {
  return (
    <>
      <Header active="services" />

      {/* HERO ------------------------------------------------------- */}
      <div className="hero overlay">
        <div className="img-bg rellax">
          <img src="/images/new/service.jpg" alt="ABMS Limited services" className="img-fluid" />
        </div>
        <BackgroundNetwork />
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">
                Services
              </h1>
              <p className="mb-5" data-aos="fade-up">
                An integrated range of services spanning mining
                operations, mining support, general trading, and
                logistics and advisory solutions &mdash; delivered to
                strict safety and performance standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Everything below the hero is interactive and lives client-side */}
      <ServicesContent services={services} targetIndustries={targetIndustries} />
    </>
  );
}
import { Ecosystem } from "@/components/Ecosystem";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Industries } from "@/components/Industries";
import { InquiryForm } from "@/components/InquiryForm";
import { PainPoints } from "@/components/PainPoints";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Services />
        <Ecosystem />
        <Process />
        <WhyUs />
        <Industries />
        <Highlights />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}

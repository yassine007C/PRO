import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Subjects } from "@/components/Subjects";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-slate-900 selection:bg-primary/10 selection:text-primary">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Subjects />
        <Process />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

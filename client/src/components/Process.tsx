import { motion } from "framer-motion";
import { MessageCircle, Calendar, Video } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Contact",
      desc: "Send a message via WhatsApp or the contact form with your subject and goals."
    },
    {
      icon: Calendar,
      title: "Schedule",
      desc: "We'll agree on a time slot that works for you. Flexibility is key."
    },
    {
      icon: Video,
      title: "Learn",
      desc: "Join the Zoom link sent to you. We'll use a shared whiteboard to solve problems live."
    }
  ];

  return (
    <section id="process" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How It Works
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-accent mx-auto rounded-full" 
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/20" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center relative"
            >
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-xl relative z-10">
                <step.icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/80 max-w-xs mx-auto leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

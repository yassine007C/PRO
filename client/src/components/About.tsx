import { motion } from "framer-motion";
import { CheckCircle2, Award, BookOpen } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const credentials = [
    { icon: Award, text: "M.Sc. in Applied Mathematics" },
    { icon: BookOpen, text: "5+ Years Teaching Experience" },
    { icon: CheckCircle2, text: "Certified Python Instructor" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Unsplash: Professional tutor or academic setting */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80" 
                alt="Tutor Profile" 
                className="rounded-full object-cover w-full h-full shadow-2xl relative z-10 bg-slate-100"
              />
            </div>
          </motion.div>

          <div>
            <SectionHeading 
              title="About the Tutor" 
              subtitle="Bridging the gap between theory and application." 
              alignment="left"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-slate-600"
            >
              <p>
                Hello! I'm James, a dedicated educator specializing in simplifying complex STEM subjects. 
                My goal isn't just to help you pass exams—it's to help you truly understand the fundamental 
                principles that govern our universe.
              </p>
              <p>
                With a background in computational physics and years of experience mentoring high school 
                and university students, I've developed a teaching style that adapts to your unique way of learning.
                No question is too small, and no problem is too difficult when broken down correctly.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {credentials.map((cred, idx) => (
                <Card key={idx} className="border-none shadow-md bg-slate-50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <cred.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium text-slate-900">{cred.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

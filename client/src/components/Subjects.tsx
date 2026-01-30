import { motion } from "framer-motion";
import { Calculator, Atom, Terminal, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Subjects() {
  const subjects = [
    {
      title: "Mathematics",
      icon: Calculator,
      color: "text-blue-500",
      bg: "bg-blue-50",
      topics: ["Calculus I, II, & III", "Linear Algebra", "Differential Equations", "Statistics & Probability", "Discrete Math"]
    },
    {
      title: "Physics",
      icon: Atom,
      color: "text-purple-500",
      bg: "bg-purple-50",
      topics: ["Classical Mechanics", "Electromagnetism", "Thermodynamics", "Quantum Mechanics Intro", "Optics & Waves"]
    },
    {
      title: "Programming",
      icon: Terminal,
      color: "text-green-500",
      bg: "bg-green-50",
      topics: ["Python for Data Science", "JavaScript & Web Dev", "Algorithms & Data Structures", "Object-Oriented Programming", "SQL & Databases"]
    }
  ];

  return (
    <section id="subjects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Subjects Offered" 
          subtitle="Comprehensive coverage of high school and university curriculum." 
        />

        <div className="grid md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden group">
                <div className={`h-2 w-full ${subject.bg.replace('bg-', 'bg-gradient-to-r from-transparent via-') /* Hacky gradient line */}`} />
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${subject.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <subject.icon className={`h-8 w-8 ${subject.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{subject.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {subject.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3 text-slate-600">
                        <Check className={`h-5 w-5 ${subject.color} shrink-0 mt-0.5`} />
                        <span className="text-sm font-medium">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

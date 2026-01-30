import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
              Accepting New Students for Fall 2025
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight">
              Master Complexity. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Learn with Confidence.
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-lg leading-relaxed"
          >
            Personalized tutoring in Advanced Mathematics, Physics, and Computer Science. Break down complex concepts into understandable blocks.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white rounded-xl h-14 px-8 text-lg shadow-lg hover:shadow-green-600/20 transition-all hover:-translate-y-1"
              onClick={() => window.open("https://wa.me/15550000000", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Learning via WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-xl h-14 px-8 text-lg border-2 hover:bg-slate-100 text-slate-700"
              onClick={() => document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Subjects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 text-sm text-muted-foreground pt-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p>Trusted by 50+ students this year</p>
          </motion.div>
        </div>

        {/* Hero Image / Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-[600px] w-full hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] rotate-6 backdrop-blur-sm" />
             {/* Academic/Tutor placeholder image */}
             {/* Unsplash: Student studying with laptop and books, clean academic vibe */}
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" 
              alt="Student Learning" 
              className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
            />
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
            >
              <div className="font-mono text-xs text-primary mb-1">def success():</div>
              <div className="font-bold text-slate-900">100% Pass Rate</div>
              <div className="text-xs text-muted-foreground mt-1">For regular students</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

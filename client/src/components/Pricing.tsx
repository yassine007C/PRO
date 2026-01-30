import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Simple, Transparent Pricing" 
          subtitle="Invest in your education with flexible options designed for your goals."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hourly Option */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-slate-200 shadow-md hover:border-primary/50 transition-colors relative">
              <CardHeader>
                <h3 className="text-2xl font-bold text-slate-900">Pay As You Go</h3>
                <p className="text-muted-foreground">Perfect for exam prep or specific homework help.</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-slate-900">$50</span>
                  <span className="text-slate-500">/ hour</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>1-on-1 Zoom Session</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Personalized Notes Included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Flexible Scheduling</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-400">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="line-through">Priority Email Support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-lg"
                  onClick={() => window.open("https://wa.me/15550000000", "_blank")}
                >
                  Book 1 Hour
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Package Option */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-primary shadow-xl bg-slate-50/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-xl font-medium text-sm">
                Best Value
              </div>
              <CardHeader>
                <h3 className="text-2xl font-bold text-primary">Mastery Package</h3>
                <p className="text-muted-foreground">For dedicated students aiming for top grades.</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-slate-900">$450</span>
                  <span className="text-slate-500">/ 10 lessons</span>
                </div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                  Save $50 instantly
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">10 x 1-on-1 Zoom Sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Customized Study Plan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Priority Scheduling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-accent" />
                    <span className="text-slate-900 font-medium">WhatsApp Support Between Lessons</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-lg shadow-lg shadow-primary/20"
                  onClick={() => window.open("https://wa.me/15550000000", "_blank")}
                >
                  Get Package via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Mail, Phone, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl tracking-tight">
                Tutor<span className="text-primary">Pro</span>
              </span>
            </div>
            <p className="max-w-xs text-slate-400 leading-relaxed">
              Democratizing access to high-quality STEM education. Building confidence one problem at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@tutorpro.com">hello@tutorpro.com</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                <a href="https://wa.me/15550000000" target="_blank" rel="noreferrer">WhatsApp Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} TutorPro Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

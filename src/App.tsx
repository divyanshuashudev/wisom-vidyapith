import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Bell, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronRight,
  Award
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="text-white" size={28} />
              </div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                WISDOM VIDYAPITH
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#notices" className="hover:text-blue-600 transition-colors">Notices</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <a
                href="https://api.whatsapp.com/send/?phone=919534635091&text=Hello%2C+I+am+interested+in+Wisdom+Vidyapeeth+admissions.&type=phone_number&app_absent=0" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
  <MessageCircle size={16} /> {/* If you have icons */}
  WhatsApp
</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Award size={16} />
              Premier Institute of Begusarai
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
              Shaping the Future of <span className="text-blue-600">Education.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Wisdom Vidyapith is dedicated to academic excellence and character building. 
              We provide a modern tech-focused curriculum rooted in traditional values 
              right here in the heart of Begusarai, Bihar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
  href="https://forms.gle/TxRBXm5yCUvkFeTZ9" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-200 text-center"
>
  Enroll Now
</a>
              <button className="bg-white border-2 border-slate-200 hover:border-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all">
                View Gallery
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </header>

      {/* Notice Board Section */}
      <section id="notices" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 flex items-center gap-3">
                <Bell className="text-blue-600" />
                Notice Board
              </h2>
              <p className="text-slate-500 mt-2 text-lg">Stay updated with the latest school events.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: '26 April', title: 'Admissions Open 2026-27', tag: 'Enrollment' },
              { date: '15 May', title: 'Annual Sports Meet', tag: 'Event' },
              { date: '01 June', title: 'Summer Vacations Start', tag: 'Holiday' }
            ].map((notice, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md mb-4 uppercase tracking-wider">
                  {notice.tag}
                </span>
                <p className="text-sm font-bold text-slate-400 mb-2">{notice.date}</p>
                <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {notice.title}
                </h4>
                <button className="text-blue-600 font-bold flex items-center gap-1 text-sm">
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-slate-200 rounded-[40px] overflow-hidden">
               {/* Replace with school image later */}
               <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white p-20 text-center font-bold text-2xl">
                 [School Campus Photo]
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <p className="text-4xl font-black text-blue-600">15+</p>
              <p className="text-slate-500 font-bold text-sm uppercase">Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Legacy</h3>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              A Tradition of Excellence in Begusarai
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Located in the heart of Bihar, Wisdom Vidyapith has been a beacon of learning for over a decade. 
              We focus on holistic development, ensuring our students are equipped with both 
              technical skills and strong moral character.
            </p>
            <div className="space-y-4">
              {[
                { icon: <BookOpen />, title: 'Advanced Curriculum' },
                { icon: <Users />, title: 'Expert Faculty' },
                { icon: <Award />, title: 'Modern Facilities' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-blue-600">{item.icon}</div>
                  <span className="font-bold text-slate-800">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <GraduationCap size={32} />
              <span className="text-2xl font-black">WISDOM VIDYAPITH</span>
            </div>
            <p className="max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of students in Begusarai through quality education and discipline.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Alumni</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Contact Us</h5>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Begusarai, Bihar, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>info@wisdomvidyapeeth.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 text-center text-sm">
          © 2026 Wisdom Vidyapith. All rights reserved.
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
<a 
  href="https://api.whatsapp.com/send/?phone=919534635091&text=Hello%2C+I+am+interested+in+Wisdom+Vidyapeeth+admissions.&type=phone_number&app_absent=0" 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce md:animate-none"
  style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
  </svg>
</a>
    </div>
  );
}

export default App;

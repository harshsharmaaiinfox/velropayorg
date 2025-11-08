import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero (dark) */}
      <section className="bg-[#001233] pt-28 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">Get in touch and let us know how we can help.</p>
        </div>
      </section>

      {/* Contact section matching mock: left contact info, right form card (white background) */}
      <section className="pt-12 pb-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left column: Contact methods with green accent */}
            <div className="text-left">
              <div className="text-sm font-semibold text-emerald-500 mb-4">GET IN TOUCH</div>
              <h2 className="text-[40px] md:text-[56px] font-extrabold text-[#06243a] leading-tight mb-4">Contact methods</h2>
              <p className="text-lg text-slate-600 mb-12">Choose a channel and we'll respond as soon as possible.</p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-[#06243a]">Email ID</div>
                    <a href="mailto:hello@velropay.com" className="text-base text-slate-500 hover:text-emerald-500 transition-colors">
                      hello@velropay.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-[#06243a]">WhatsApp</div>
                    <a href="https://wa.me/1234567890" className="text-base text-slate-500 hover:text-emerald-500 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-[#06243a]">Telegram ID</div>
                    <a href="https://t.me/yourtelegramid" className="text-base text-slate-500 hover:text-emerald-500 transition-colors">
                      @yourtelegramid
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: form card */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <div className="text-sm font-semibold text-emerald-500 mb-3">SEND US A MESSAGE</div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#06243a] mb-6">We will be in touch shortly.</h3>

                <form onSubmit={(e) => { e.preventDefault(); /* handle submit here */ }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <Input placeholder="Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                      <Input placeholder="Company" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                      <Input placeholder="Phone" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input placeholder="Email" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <Input placeholder="Subject" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea placeholder="Message" className="min-h-[120px]" />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full py-3">Send Message</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content section will be added here */}
      
      <Footer />
    </div>
  );
};

export default ContactUs;

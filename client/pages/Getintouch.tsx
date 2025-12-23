import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  PhoneCall,
  Mail as MailIcon,
  CheckCircle2,
} from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-[#DBEAFE] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 max-w-[1920px] flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F7bcf3b6829fc467ea4a0c747871be1c5?format=webp&width=800" 
            alt="Crestcode Logo" 
            className="w-11 h-11 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-[19px] font-bold leading-7 text-[#111827]">Crestcode</span>
            <span className="text-[13px] font-normal leading-5 text-[#9CA3AF]">(India)</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-base font-normal leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">
            Services
          </Link>
          <Link to="/AboutUs" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            About Us
          </Link>
          <Link to="/Blogs" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            Blogs
          </Link>
        </nav>
        <Button className="bg-[#111827] text-[#DBEAFE] px-5 py-2 rounded font-semibold text-[15px] leading-6 hover:bg-[#1f2937] transition-colors">
          <Link to="/Getintouch">Get In Touch</Link>
        </Button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#DBEAFE] py-12">
      <div className="container mx-auto px-8 max-w-[1462px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F7bcf3b6829fc467ea4a0c747871be1c5?format=webp&width=800" 
                alt="Crestcode Logo" 
                className="w-11 h-11 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[19px] font-bold leading-7 text-[#111827]">Crestcode</span>
                <span className="text-[13px] font-normal leading-5 text-[#9CA3AF]">(India)</span>
              </div>
            </div>
            <p className="text-[15px] leading-6 text-[#111827] mb-6 max-w-md">
              Engineering digital products that matter. From idea to launch -
              we build reliable, scalable, human-centered products for
              startups, businesses, and entrepreneurs.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-base font-bold leading-6 text-[#111827] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Internships</a></li>
              <li><a href="#" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Privacy policy</a></li>
              <li><Link to="/Getintouch" className="text-[15px] leading-6 text-[#111827] font-bold hover:text-[#2563EB] transition-colors">Get In Touch</Link></li>
              <li><Link to="/Hackathon" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Hackathon</Link></li>
              <li><a href="#" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Careers</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-[15px] font-bold leading-6 text-[#111827] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                  <path d="M13.3335 2.66663H2.66683C1.93045 2.66663 1.3335 3.26358 1.3335 3.99996V12C1.3335 12.7363 1.93045 13.3333 2.66683 13.3333H13.3335C14.0699 13.3333 14.6668 12.7363 14.6668 12V3.99996C14.6668 3.26358 14.0699 2.66663 13.3335 2.66663Z" stroke="#111827" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.6668 4.66663L8.68683 8.46663C8.48101 8.59558 8.24304 8.66397 8.00016 8.66397C7.75729 8.66397 7.51932 8.59558 7.3135 8.46663L1.3335 4.66663" stroke="#111827" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:contact@crestcode.in" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">contact@crestcode.in</a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                  <path d="M13.3332 6.66671C13.3332 10.6667 7.99984 14.6667 7.99984 14.6667C7.99984 14.6667 2.6665 10.6667 2.6665 6.66671C2.6665 5.25222 3.22841 3.89567 4.2286 2.89547C5.2288 1.89528 6.58535 1.33337 7.99984 1.33337C9.41433 1.33337 10.7709 1.89528 11.7711 2.89547C12.7713 3.89567 13.3332 5.25222 13.3332 6.66671Z" stroke="#111827" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z" stroke="#111827" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[15px] leading-5 text-[#111827]">Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#4B5563] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] leading-5 text-[#6B7280]">© 2025 Crestcode India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] leading-5 text-[#6B7280] hover:text-[#111827] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[13px] leading-5 text-[#6B7280] hover:text-[#111827] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Getintouch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow -mt-16">
        <Layout className ="!pt-0">
          <section className="w-full bg-[#9BB4C2] pt-32 pb-24 flex flex-col items-center gap-14">
            <div className="flex flex-col items-center gap-7 max-w-3xl px-4 text-center w-full">
              <h1 className="text-gray-900 font-bold text-[59px] leading-[60px]">
                Get In Touch
              </h1>
              <p className="text-gray-900 text-[22px] leading-8 max-w-2xl">
                Ready to bring your idea to life? Let's discuss your project and
                create something amazing together.
              </p>
            </div>
            <Button
              onClick={() => {
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gray-900 hover:bg-gray-800 text-white h-[70px] px-24 text-xl font-semibold rounded"
            >
              Contact Us
            </Button>
          </section>
        </Layout>
        
        <div className="bg-white">
          <Layout>
            <section id="contact-form" className="w-full py-24 px-4">
              <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-gray-900 font-bold text-[29px] leading-9 mb-6">
                    Build Your Project
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-700 text-[13px] leading-5 block mb-2">
                          Full Name *
                        </label>
                        <Input
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="h-[50px] border-gray-300 rounded-lg text-[15px]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-gray-700 text-[13px] leading-5 block mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="h-[50px] border-gray-300 rounded-lg text-[15px]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-700 text-[13px] leading-5 block mb-2">
                          Company
                        </label>
                        <Input
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="h-[50px] border-gray-300 rounded-lg text-[15px]"
                        />
                      </div>
                      <div>
                        <label className="text-gray-700 text-[13px] leading-5 block mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="h-[50px] border-gray-300 rounded-lg text-[15px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-700 text-[13px] leading-5 block mb-2">
                        Project Type *
                      </label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, projectType: value })
                        }
                      >
                        <SelectTrigger className="h-11 border-gray-300 rounded-lg text-[15px]">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="mobile">Mobile App</SelectItem>
                          <SelectItem value="design">UI/UX Design</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-700 text-[13px] leading-5 block mb-2">
                          Budget Range
                        </label>
                        <Select
                          value={formData.budgetRange}
                          onValueChange={(value) =>
                            setFormData({ ...formData, budgetRange: value })
                          }
                        >
                          <SelectTrigger className="h-11 border-gray-300 rounded-lg text-[15px]">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">$5,000 - $10,000</SelectItem>
                            <SelectItem value="medium">$10,000 - $25,000</SelectItem>
                            <SelectItem value="large">$25,000 - $50,000</SelectItem>
                            <SelectItem value="enterprise">$50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-gray-700 text-[13px] leading-5 block mb-2">
                          Timeline
                        </label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            setFormData({ ...formData, timeline: value })
                          }
                        >
                          <SelectTrigger className="h-11 border-gray-300 rounded-lg text-[15px]">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">1-2 weeks</SelectItem>
                            <SelectItem value="short">1-2 months</SelectItem>
                            <SelectItem value="medium">3-6 months</SelectItem>
                            <SelectItem value="long">6+ months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-700 text-[13px] leading-5 block mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        className="min-h-[170px] border-gray-300 rounded-lg text-[15px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl rounded-lg flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-gray-900 font-bold text-[23px] leading-8 mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-gray-900 font-bold text-base leading-6 mb-2">
                            Our Office
                          </h4>
                          <p className="text-gray-600 text-[15px] leading-6">
                            2nd Floor, Plot No:248, Kannan St, Sree Balaji Nagar,
                            Pallikaranai, Chennai - 600 100.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-gray-900 font-bold text-base leading-6">
                            Phone
                          </h4>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-gray-900 font-bold text-base leading-6 mb-1">
                            Email
                          </h4>
                          <p className="text-gray-600 text-[15px] leading-6">
                            contact@crestcode.in
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Clock className="w-6 h-6 text-blue-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-gray-900 font-bold text-base leading-6 mb-1">
                            Business Hours
                          </h4>
                          <p className="text-gray-600 text-[15px] leading-6">
                            Tuesday - Friday: 11:00 AM - 8:00 PM IST
                            <br />
                            Saturday: 09:00 AM - 5:00 PM IST
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-64">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/151937ec3e52055161fe617ea770584d0b5ed301?width=1216"
                      alt="Crestcode office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        </div>
      </div>
      <Footer />
    </div>
  );
}
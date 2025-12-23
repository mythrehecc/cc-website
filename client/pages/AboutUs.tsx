import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {
  Users,
  Award,
  Zap,
  Heart,
  Target,
  Coffee,
  Sparkles,
  GraduationCap,
  Wallet,
  Heart as HeartIcon,
  User,
  Lightbulb,
  Eye,
  ArrowRight,
  Mail,
  MapPin,
  Linkedin,
  ChevronDown
} from "lucide-react";

export default function AboutUs() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#DBEAFE] shadow-sm sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Facad1d6dc09840cba192d517f752f912%2F8e1369c7bcd94f96bb8c37b484074b8d?format=webp&width=80"
                alt="Crestcode Logo"
                className="h-12 w-12"
              />
              <div>
                <span className="text-[#111827] text-lg font-bold">Crestcode</span>
                <span className="text-[#4B5563] text-sm">(India)</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-9">
              <Link to="/" className="text-[#374151] hover:text-[#111827] transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-[#374151] hover:text-[#111827] transition-colors">
                Services
              </Link>
              <Link to="/AboutUs" className="text-[#374151] font-bold hover:text-[#111827] transition-colors">
                About Us
              </Link>
              <Link to="/blogs" className="text-[#374151] hover:text-[#111827] transition-colors">
                Blogs
              </Link>
            </nav>

            {/* CTA Button */}
            <Link 
              to="/Getintouch"
              className="bg-[#111827] text-[#DBEAFE] px-5 py-2 rounded font-semibold hover:bg-[#1f2937] transition-colors text-sm md:text-base"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#9BB4C2] py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-8 leading-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#111827] mb-10 leading-relaxed">
              Crestcode is a product studio for founders who refuse to settle for "Good Enough." We partner with entrepreneurs to remove uncertainty, work backwards from Customer Needs, and Launch Products with speed, clarity, and confidence.
            </p>
            <button className="bg-[#111827] text-white px-16 py-5 rounded text-xl font-semibold hover:bg-[#1f2937] transition-colors">
              <Link to="/getintouch">Get In Touch</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Engineering Culture Section */}
      <section className="bg-[#F9FAFB] py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Our Engineering Culture
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#4B5563] leading-relaxed">
              At Crestcode India, engineering is not just execution. It is ownership, precision, and long-term thinking. We build products the way world-class teams do: scalable foundations, clean architecture, and relentlessly improving systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/060552967d5df168b0541cd54d6f0d0a005c9cf4?width=1620" 
                alt="Engineering Team" 
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>

            {/* Accordion Items */}
            <div className="order-1 md:order-2 space-y-0">
              {[
                {
                  title: "Engineering With Intention",
                  description: "We make thoughtful architectural and product decisions that ensure long-term scalability."
                },
                {
                  title: "Quality at the Core",
                  description: "Every engineer owns reliability, performance, and precision from build to deployment."
                },
                {
                  title: "Clean Code Discipline",
                  description: "We maintain clear, modular code supported by strong reviews and meaningful documentation."
                },
                {
                  title: "Fast, Structured Delivery",
                  description: "We move quickly through automation, defined processes, and a culture of constant improvement."
                }
              ].map((item, index) => (
                <div key={index} className="border-b border-[#9CA3AF]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between gap-4 py-6 hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-[#111827] text-left">
                      {item.title}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 flex-shrink-0 text-[#9CA3AF] transition-transform duration-300 ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openAccordion === index && (
                    <div className="pb-6 animate-in fade-in-50 duration-200">
                      <p className="text-lg md:text-xl text-[#4B5563]">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Co-Pilot Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-16 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              A Technical Co-Pilot for Your Vision
            </h2>
            <p className="text-2xl md:text-3xl text-[#4B5563]">
              No Developer Management, Clear Tech Decisions, Transparent Progress, A Team that Cares.
            </p>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="flex gap-6 md:gap-8">
              <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
                  Be the Founder, Not the Manager
                </h3>
                <p className="text-lg md:text-xl text-[#4B5563]">
                  Focus on your mission, we handle the tech
                </p>
              </div>
            </div>

            <div className="flex gap-6 md:gap-8">
              <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
                  Make Smart Decisions
                </h3>
                <p className="text-lg md:text-xl text-[#4B5563]">
                  Focus on your mission, we handle the tech.
                </p>
              </div>
            </div>

            <div className="flex gap-6 md:gap-8">
              <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
                  Transparency at Every Step
                </h3>
                <p className="text-lg md:text-xl text-[#4B5563]">
                  Focus on your mission while we keep the tech clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[#F9FAFB] py-16 md:py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Team Members
            </h2>
            <button className="bg-[#111827] text-white px-7 py-3 rounded font-semibold hover:bg-[#1f2937] transition-colors">
              Join Team
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Top Row - Mariya Fatima */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full aspect-square rounded-xl border-2 border-[#111827] bg-gray-200"></div>
              <h3 className="text-lg font-bold text-[#111827] text-center">Mariya Fatima</h3>
              <p className="text-sm text-[#2563EB] text-center">CEO</p>
              <p className="text-xs text-[#4B5563] text-center">Legal, IP & Patent Attorney</p>
              <p className="text-xs text-[#4B5563] text-center">PHD - VIT, B.Sc LLB - GNLU</p>
            </div>

            {/* Top Row - Asfarul Huda */}
            <div className="flex flex-col items-center gap-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6c4f12a7121525613ac83c26f8087f1f3c2f813e?width=506" 
                alt="Asfarul Huda" 
                className="w-full aspect-square rounded-xl border-2 border-[#111827] object-cover"
              />
              <h3 className="text-lg font-bold text-[#111827] text-center">Asfarul Huda</h3>
              <p className="text-sm text-[#2563EB] text-center">Investor</p>
              <p className="text-xs text-[#4B5563] text-center">Ex-Amazon, Ex-PayPal, Ex-IBM</p>
              <p className="text-xs text-[#4B5563] text-center">MBA - Gtech (USA), B.Tech - IIIT-K</p>
            </div>

            {/* Large Team Photo - Full Width */}
            <div className="sm:col-span-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a73c0019c8dcb77a627d8450a81de34c8ec7461b?width=1910" 
                alt="Team Group Photo" 
                className="w-full h-64 md:h-80 lg:h-96 rounded-xl object-cover"
              />
            </div>

            {/* Middle Row - Fahad Siddiqui */}
            <div className="flex flex-col items-center gap-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/3b2f5098dc351c84d5fe995e6443225a11f1eecc?width=506" 
                alt="Fahad Siddiqui" 
                className="w-full aspect-square rounded-xl border-2 border-[#111827] object-cover"
              />
              <h3 className="text-lg font-bold text-[#111827] text-center">Fahad Siddiqui</h3>
              <p className="text-sm text-[#2563EB] text-center">Advisor</p>
              <p className="text-xs text-[#4B5563] text-center">Researcher, Macro Systematic Investing</p>
              <p className="text-xs text-[#4B5563] text-center">B.Tech - IIT Mumbai, MBA - Oxford</p>
            </div>

            {/* Middle Row - Neyaz Ahmed */}
            <div className="flex flex-col items-center gap-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a7405292efe3cf2a4d8ae48c83ab7c8229304862?width=506" 
                alt="Neyaz Ahmed" 
                className="w-full aspect-square rounded-xl border-2 border-[#111827] object-cover"
              />
              <h3 className="text-lg font-bold text-[#111827] text-center">Neyaz Ahmed</h3>
              <p className="text-sm text-[#2563EB] text-center">Advisor</p>
              <p className="text-xs text-[#4B5563] text-center">Healthcare Regulations</p>
              <p className="text-xs text-[#4B5563] text-center">MD - ECFMG, MBBS - Karnataka University</p>
            </div>

            {/* Bottom Row - Faraz Ahmed */}
            <div className="flex flex-col items-center gap-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/5fca2fdb242a71fff8d48e3820b8fe227ca2c10f?width=510" 
                alt="Faraz Ahmed" 
                className="w-full aspect-square rounded-xl border-2 border-[#111827] object-cover"
              />
              <h3 className="text-lg font-bold text-[#111827] text-center">Faraz Ahmed</h3>
              <p className="text-sm text-[#2563EB] text-center">Developer</p>
            </div>

            {/* Bottom Row - Moin Khan */}
            <div className="flex flex-col items-center gap-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e77e62b73dfa9e18e5b2c75462faedc8c3f8a788?width=506" 
                alt="Moin Khan" 
                className="w-full aspect-square rounded-xl border-2 border-[#111827] object-cover"
              />
              <h3 className="text-lg font-bold text-[#111827] text-center">Moin Khan</h3>
              <p className="text-sm text-[#2563EB] text-center">Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[#4B5563]">
              The values that guide us in everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <Users className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Integrity</h3>
              <p className="text-sm text-[#4B5563]">Doing what's right, not what's easy.</p>
            </div>

            <div className="text-center">
              <Award className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Innovation</h3>
              <p className="text-sm text-[#4B5563]">Pushing boundaries, always.</p>
            </div>

            <div className="text-center">
              <Zap className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Collaboration</h3>
              <p className="text-sm text-[#4B5563]">Working as one unified team.</p>
            </div>

            <div className="text-center">
              <Heart className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Passion</h3>
              <p className="text-sm text-[#4B5563]">We love what we do and it shows in our work,</p>
            </div>

            <div className="text-center">
              <Target className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Excellence</h3>
              <p className="text-sm text-[#4B5563]">Setting and meeting the highest standards.</p>
            </div>

            <div className="text-center">
              <Coffee className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Technologies</h3>
              <p className="text-sm text-[#4B5563]">Leveraging cutting-edge tools and platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F9FAFB] py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Industries We're Powering
            </h2>
            <p className="text-2xl md:text-3xl text-[#4B5563] leading-relaxed">
              Crestcode is shaping digital products across new-economy industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col gap-6">
              <Sparkles className="w-10 h-10 text-[#60A5FA]" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-[#111827]">AI-Driven Platforms</h3>
              <p className="text-xl text-[#374151] italic">Automations, copilots, and intelligence-led apps.</p>
            </div>

            <div className="flex flex-col gap-6">
              <GraduationCap className="w-10 h-10 text-[#60A5FA]" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-[#111827]">Education & Upskilling</h3>
              <p className="text-xl text-[#374151] italic">Learning platforms and digital classrooms.</p>
            </div>

            <div className="flex flex-col gap-6">
              <Wallet className="w-10 h-10 text-[#60A5FA]" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-[#111827]">Fintech & Payments</h3>
              <p className="text-xl text-[#374151] italic">Secure, compliant, scalable systems.</p>
            </div>

            <div className="flex flex-col gap-6">
              <HeartIcon className="w-10 h-10 text-[#60A5FA]" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-[#111827]">Health & Wellness Tech</h3>
              <p className="text-xl text-[#374151] italic">Patient portals, dashboards, connected care.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-[#111827] px-16 py-4 rounded-lg shadow-lg font-bold text-xl hover:shadow-xl transition-shadow">
              View More
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#9BB4C2] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-[#4B5563] text-center mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for building great products. Reach out to learn about current opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#111827] text-white px-9 py-4 rounded-lg font-bold text-xl hover:bg-[#1f2937] transition-colors inline-flex items-center justify-center gap-2">
                Join Our Team
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#111827] text-[#111827] px-9 py-4 rounded-lg font-bold text-xl hover:bg-[#f3f4f6] transition-colors">
                <Link to="/Getintouch#contact-form">Contact Us</Link> 
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                Engineering digital products that matter. 
                From idea to launch - we build reliable, 
                scalable, human-centered products for
                startups, businesses, and entrepreneurs.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-[#9CA3AF] hover:text-[#111827] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3335 6.66663C14.6596 6.66663 15.9313 7.19341 16.869 8.13109C17.8067 9.06877 18.3335 10.3405 18.3335 11.6666V17.5H15.0002V11.6666C15.0002 11.2246 14.8246 10.8007 14.512 10.4881C14.1994 10.1756 13.7755 9.99996 13.3335 9.99996C12.8915 9.99996 12.4675 10.1756 12.155 10.4881C11.8424 10.8007 11.6668 11.2246 11.6668 11.6666V17.5H8.3335V11.6666C8.3335 10.3405 8.86028 9.06877 9.79796 8.13109C10.7356 7.19341 12.0074 6.66663 13.3335 6.66663Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.99984 7.5H1.6665V17.5H4.99984V7.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.33317 4.99996C4.25365 4.99996 4.99984 4.25377 4.99984 3.33329C4.99984 2.41282 4.25365 1.66663 3.33317 1.66663C2.4127 1.66663 1.6665 2.41282 1.6665 3.33329C1.6665 4.25377 2.4127 4.99996 3.33317 4.99996Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-base font-bold leading-6 text-[#111827] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Internships</a></li>
                <li><a href="#" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Privacy policy</a></li>
                <li><Link to="/Getintouch" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Get In Touch</Link></li>
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
            <p className="text-[13px] leading-5 text-[#6B7280]"> 2025 Crestcode India. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[13px] leading-5 text-[#6B7280] hover:text-[#111827] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[13px] leading-5 text-[#6B7280] hover:text-[#111827] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
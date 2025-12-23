import { useState } from "react";
import { Link } from "react-router-dom";

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
        <button className="bg-[#111827] text-[#DBEAFE] px-5 py-2 rounded font-semibold text-[15px] leading-6 hover:bg-[#1f2937] transition-colors">
          <Link to="/Getintouch">Get In Touch</Link>
        </button>
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
            <p className="text-base text-gray-600 mb-6">
              We are a team of passionate developers and designers creating amazing digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-gray-500 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-base text-gray-600">123 Tech Street, Bangalore, India</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:info@crestcode.com" className="text-base text-gray-600 hover:text-gray-900">
                  info@crestcode.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+911234567890" className="text-base text-gray-600 hover:text-gray-900">
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Crestcode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ProblemSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-[28px] font-bold text-gray-900">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-center gap-1"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          <svg
            className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[5000px]' : 'max-h-32'}`}>
        <div className={`${isExpanded ? '' : 'line-clamp-3'}`}>
          {children}
        </div>
        {!isExpanded && <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>}
      </div>
    </div>
  );
}

export default function StudentsHackathon() {
  const [activeTab, setActiveTab] = useState('problem1');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[867px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="[https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F8a5e5f1f5b5f4c3e9e0b3c3d3e3f4a5e?format=webp&width=3840](https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F8a5e5f1f5b5f4c3e9e0b3c3d3e3f4a5e?format=webp&width=3840)"
            alt="Hackathon Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-[1920px] mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Crestcode <span className="text-blue-400">Hackathon 2024</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl">
              Join us for an exciting 48-hour coding competition where innovation meets technology. Build, create, and showcase your skills!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 text-center"
              >
                Register Now
              </a>
              <a
                href="#challenges"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg border border-white/20 transition-colors duration-300 text-center"
              >
                View Challenges
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 lg:px-24 bg-white" id="about">
        <div className="max-w-[1689px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[35px] font-bold text-gray-900 leading-10">About the Hackathon</h2>
              <p className="text-[22px] text-gray-600 leading-relaxed">
                The Crestcode Hackathon is a 48-hour coding competition where developers, designers, and innovators come together to build amazing projects. Whether you're a beginner or an experienced coder, this is your chance to learn, collaborate, and create something incredible.
              </p>
              <p className="text-[22px] text-gray-600 leading-relaxed">
                With mentorship from industry experts, exciting prizes, and the opportunity to work with cutting-edge technologies, this is an event you won't want to miss!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">48 Hours</h3>
                <p className="text-gray-600">Non-stop coding and innovation</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Up</h3>
                <p className="text-gray-600">Form teams of 2-4 members</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prizes</h3>
                <p className="text-gray-600">Exciting rewards for winners</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Network</h3>
                <p className="text-gray-600">Connect with industry leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 lg:px-24 bg-gray-50">
        <div className="max-w-[1689px] mx-auto">
          <h2 className="text-[35px] font-bold text-gray-900 leading-10 text-center mb-12">Event Schedule</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-600 text-white rounded-lg p-4 text-center min-w-[120px]">
                  <p className="text-2xl font-bold">Day 1</p>
                  <p className="text-sm">Friday, June 10</p>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Registration & Breakfast</h3>
                        <p className="text-gray-600">8:00 AM - 9:00 AM</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Main Hall</span>
                    </div>
                    <p className="mt-2 text-gray-600">Check-in, grab some breakfast, and meet your fellow participants.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white p-4 text-center min-w-[120px]"></div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Opening Ceremony</h3>
                        <p className="text-gray-600">9:00 AM - 10:00 AM</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Main Stage</span>
                    </div>
                    <p className="mt-2 text-gray-600">Welcome address, rules, and what to expect during the hackathon.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white p-4 text-center min-w-[120px]"></div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Hacking Begins!</h3>
                        <p className="text-gray-600">10:00 AM</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">All Areas</span>
                    </div>
                    <p className="mt-2 text-gray-600">Start working on your projects. Mentors will be available to help.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-600 text-white rounded-lg p-4 text-center min-w-[120px]">
                  <p className="text-2xl font-bold">Day 2</p>
                  <p className="text-sm">Saturday, June 11</p>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Hacking Continues</h3>
                        <p className="text-gray-600">All Day</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">All Areas</span>
                    </div>
                    <p className="mt-2 text-gray-600">Keep working on your projects. Lunch and dinner will be provided.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-600 text-white rounded-lg p-4 text-center min-w-[120px]">
                  <p className="text-2xl font-bold">Day 3</p>
                  <p className="text-sm">Sunday, June 12</p>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Final Submissions</h3>
                        <p className="text-gray-600">10:00 AM</p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Online</span>
                    </div>
                    <p className="mt-2 text-gray-600">Submit your final projects before the deadline.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white p-4 text-center min-w-[120px]"></div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Judging & Demos</h3>
                        <p className="text-gray-600">1:00 PM - 3:00 PM</p>
                      </div>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Main Stage</span>
                    </div>
                    <p className="mt-2 text-gray-600">Present your projects to the judges and fellow participants.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white p-4 text-center min-w-[120px]"></div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Closing Ceremony & Awards</h3>
                        <p className="text-gray-600">4:00 PM - 5:00 PM</p>
                      </div>
                      <span className="bg-red-100 text-red-800 text-xs
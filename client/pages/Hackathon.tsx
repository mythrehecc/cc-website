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

export default function Hackathon() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#9BB4C2] px-4 py-16 md:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hackathon Header */}
          <div className="mb-16 flex flex-col items-center gap-8 text-center lg:mb-24 lg:gap-12">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl">
                Hackathon
              </h1>
              <p className="mb-8 text-lg text-gray-900 md:text-xl lg:text-2xl">
                Bringing engineering and management minds together through
                innovation. Watch this space for upcoming hackathon details and
                announcements.
              </p>
              <button className="rounded bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-800 md:px-8 md:text-xl">
                <Link to="/StudentsHackathon">View Hackathon 2025 Results</Link>
              </button>
            </div>
          </div>

          {/* Innovation Summit 2026 */}
          <div className="flex flex-col gap-4">
            <p className="text-lg uppercase text-gray-900 md:text-xl lg:text-2xl">
              UPCOMING EVENT
            </p>
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Innovation Summit 2026
            </h2>
            <p className="text-lg text-gray-900 md:text-xl lg:text-2xl">
              Join the biggest gathering of student developers and innovators
              this semester.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-4 py-16 md:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Coding Challenges */}
          <div className="flex flex-col gap-6 rounded-lg bg-gray-50 p-10 ring-1 ring-gray-200">
            <svg
              className="h-14 w-14"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 15.75V11.25C4.5 10.0125 4.941 8.9535 5.823 8.073C6.705 7.1925 7.764 6.7515 9 6.75H45C46.2375 6.75 47.2972 7.191 48.1792 8.073C49.0612 8.955 49.5015 10.014 49.5 11.25V15.75H45V11.25H9V15.75H4.5ZM18 47.25V42.75H9C7.7625 42.75 6.7035 42.3097 5.823 41.4292C4.9425 40.5488 4.5015 39.489 4.5 38.25V33.75H9V38.25H45V33.75H49.5V38.25C49.5 39.4875 49.0597 40.5472 48.1792 41.4292C47.2988 42.3112 46.239 42.7515 45 42.75H36V47.25H18ZM10.8 24.75L16.65 18.9L13.5 15.75L4.5 24.75L13.5 33.75L16.65 30.6L10.8 24.75ZM43.2 24.75L37.35 30.6L40.5 33.75L49.5 24.75L40.5 15.75L37.35 18.9L43.2 24.75Z"
                fill="#60A5FA"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900">
              Coding Challenges
            </h3>
            <p className="text-lg text-gray-900 md:text-xl">
              Test your algorithmic skills against the best.
            </p>
          </div>

          {/* Startup Pitches */}
          <div className="flex flex-col gap-6 rounded-lg bg-gray-50 p-10 ring-1 ring-gray-200">
            <svg
              className="h-14 w-14"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.125 37.1249C6.75 39.9599 5.625 48.3749 5.625 48.3749C5.625 48.3749 14.04 47.2499 16.875 43.8749C18.4725 41.9849 18.45 39.0824 16.6725 37.3274C15.7979 36.4927 14.6459 36.0104 13.4375 35.973C12.2291 35.9356 11.0495 36.3459 10.125 37.1249ZM27 33.7499L20.25 26.9999C21.4473 23.8937 22.955 20.9161 24.75 18.1124C27.3717 13.9207 31.0222 10.4693 35.3543 8.08665C39.6863 5.704 44.556 4.46928 49.5 4.49995C49.5 10.6199 47.745 21.3749 36 29.2499C33.1576 31.0464 30.1426 32.5539 27 33.7499Z"
                stroke="#60A5FA"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.25 26.9999H9C9 26.9999 10.2375 20.1824 13.5 17.9999C17.145 15.5699 24.75 17.9999 24.75 17.9999M27 33.7499V44.9999C27 44.9999 33.8175 43.7624 36 40.4999C38.43 36.8549 36 29.2499 36 29.2499"
                stroke="#60A5FA"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900">
              Startup Pitches
            </h3>
            <p className="text-lg text-gray-900 md:text-xl">
              Present your ideas to industry leaders and VCs.
            </p>
          </div>

          {/* Team Formation */}
          <div className="flex flex-col gap-6 rounded-lg bg-gray-50 p-10 ring-1 ring-gray-200 md:col-span-2 lg:col-span-1">
            <svg
              className="h-14 w-14"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 24.75C29.9837 24.75 32.8452 25.9353 34.955 28.045C37.0647 30.1548 38.25 33.0163 38.25 36V49.5H33.75V36C33.7501 34.2783 33.0923 32.6216 31.9111 31.3689C30.73 30.1162 29.1148 29.3623 27.396 29.2612L27 29.25C25.2783 29.2499 23.6216 29.9077 22.3689 31.0889C21.1162 32.27 20.3623 33.8852 20.2613 35.604L20.25 36V49.5H15.75V36C15.75 33.0163 16.9353 30.1548 19.045 28.045C21.1548 25.9353 24.0163 24.75 27 24.75ZM12.375 31.5C13.005 31.5015 13.6125 31.572 14.1975 31.7115C13.8142 32.8571 13.5864 34.049 13.5202 35.2552L13.5 36V36.1935C13.2413 36.1011 12.9723 36.0407 12.699 36.0135L12.375 36C11.5364 36 10.7278 36.3122 10.1068 36.8758C9.48575 37.4394 9.09682 38.214 9.01575 39.0487L9 39.375V49.5H4.5V39.375C4.5 37.2864 5.32969 35.2834 6.80653 33.8065C8.28338 32.3297 10.2864 31.5 12.375 31.5ZM41.625 31.5C43.7136 31.5 45.7166 32.3297 47.1935 33.8065C48.6703 35.2834 49.5 37.2864 49.5 39.375V49.5H45V39.375C45 38.5364 44.6878 37.7278 44.1242 37.1068C43.5606 36.4857 42.786 36.0968 41.9513 36.0158L41.625 36C41.229 36.0015 40.854 36.0652 40.5 36.1912V36C40.5 34.5015 40.257 33.0615 39.807 31.716C40.3875 31.5742 40.9995 31.5 41.625 31.5ZM12.375 18C13.8668 18 15.2976 18.5926 16.3525 19.6475C17.4074 20.7024 18 22.1332 18 23.625C18 25.1168 17.4074 26.5476 16.3525 27.6025C15.2976 28.6574 13.8668 29.25 12.375 29.25C10.8832 29.25 9.45242 28.6574 8.39752 27.6025C7.34263 26.5476 6.75 25.1168 6.75 23.625C6.75 22.1332 7.34263 20.7024 8.39752 19.6475C9.45242 18.5926 10.8832 18 12.375 18ZM41.625 18C43.1168 18 44.5476 18.5926 45.6025 19.6475C46.6574 20.7024 47.25 22.1332 47.25 23.625C47.25 25.1168 46.6574 26.5476 45.6025 27.6025C44.5476 28.6574 43.1168 29.25 41.625 29.25C40.1332 29.25 38.7024 28.6574 37.6475 27.6025C36.5926 26.5476 36 25.1168 36 23.625C36 22.1332 36.5926 20.7024 37.6475 19.6475C38.7024 18.5926 40.1332 18 41.625 18ZM12.375 22.5C12.0766 22.5 11.7905 22.6185 11.5795 22.8295C11.3685 23.0405 11.25 23.3266 11.25 23.625C11.25 23.9234 11.3685 24.2095 11.5795 24.4205C11.7905 24.6315 12.0766 24.75 12.375 24.75C12.6734 24.75 12.9595 24.6315 13.1705 24.4205C13.3815 24.2095 13.5 23.9234 13.5 23.625C13.5 23.3266 13.3815 23.0405 13.1705 22.8295C12.9595 22.6185 12.6734 22.5 12.375 22.5ZM41.625 22.5C41.3266 22.5 41.0405 22.6185 40.8295 22.8295C40.6185 23.0405 40.5 23.3266 40.5 23.625C40.5 23.9234 40.6185 24.2095 40.8295 24.4205C41.0405 24.6315 41.3266 24.75 41.625 24.75C41.9234 24.75 42.2095 24.6315 42.4205 24.4205C42.6315 24.2095 42.75 23.9234 42.75 23.625C42.75 23.3266 42.6315 23.0405 42.4205 22.8295C42.2095 22.6185 41.9234 22.5 41.625 22.5ZM27 4.5C29.3869 4.5 31.6761 5.44821 33.364 7.13604C35.0518 8.82387 36 11.1131 36 13.5C36 15.8869 35.0518 18.1761 33.364 19.864C31.6761 21.5518 29.3869 22.5 27 22.5C24.6131 22.5 22.3239 21.5518 20.636 19.864C18.9482 18.1761 18 15.8869 18 13.5C18 11.1131 18.9482 8.82387 20.636 7.13604C22.3239 5.44821 24.6131 4.5 27 4.5ZM27 9C25.8065 9 24.6619 9.47411 23.818 10.318C22.9741 11.1619 22.5 12.3065 22.5 13.5C22.5 14.6935 22.9741 15.8381 23.818 16.682C24.6619 17.5259 25.8065 18 27 18C28.1935 18 29.3381 17.5259 30.182 16.682C31.0259 15.8381 31.5 14.6935 31.5 13.5C31.5 12.3065 31.0259 11.1619 30.182 10.318C29.3381 9.47411 28.1935 9 27 9Z"
                fill="#60A5FA"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900">
              Team Formation
            </h3>
            <p className="text-lg text-gray-900 md:text-xl">
              Find your perfect teammates for your big project.
            </p>
          </div>
        </div>
      </section>

      {/* Hackathon Update Infographic */}
      <section className="bg-white px-4 py-16 md:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Hackathon Update
            </h2>
            <p className="mb-12 text-xl uppercase tracking-wide text-gray-900 lg:mb-16">
              STEP INTO INFINITE POSSIBILITIES
            </p>
          </div>

          {/* Infographic Image */}
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcd5381e9cb504b72a5e5022356fc91d2%2Ff372562860d74806a37eb69967aea20c?format=webp&width=800"
              alt="Hackathon Update Infographic showing participation details, timing, and how to stay updated"
              className="mx-auto w-full max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-gray-50 px-4 py-16 md:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-gray-900 md:text-5xl lg:mb-16 lg:text-6xl">
            Program Overview
          </h2>

          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Eligibility */}
            <div className="flex flex-col gap-6 rounded-2xl bg-blue-100 bg-opacity-40 p-8 ring-1 ring-gray-400 md:flex-row md:items-start md:gap-8 lg:p-12">
              <div className="flex-shrink-0">
                <svg
                  className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
                  viewBox="0 0 157 157"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5415 56.9125L75.301 29.4375L144.06 56.9125L75.301 84.3875L6.5415 56.9125Z"
                    fill="#60A5FA"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M144.06 57.2723V87.4392M37.7974 71.3859V112.082C37.7974 112.082 53.5301 127.562 75.3007 127.562C97.0747 127.562 112.807 112.082 112.807 112.082V71.3859"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-1 flex-col gap-4 md:gap-6">
                <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                  Eligibility
                </h3>
                <p className="text-xl text-gray-900 lg:text-2xl">
                  Open to all B.E/ B.Tech & M.B.A. students. Teams may be
                  single discipline or cross-functional.
                </p>
              </div>
            </div>

            {/* Program Structure */}
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 md:flex-row md:items-start md:gap-8 lg:p-12">
              <div className="flex-shrink-0">
                <svg
                  className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
                  viewBox="0 0 157 157"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M98.125 71.1406H127.562C130.816 71.1406 133.935 69.8484 136.236 67.5481C138.536 65.2479 139.828 62.128 139.828 58.875V29.4375C139.828 26.1845 138.536 23.0646 136.236 20.7644C133.935 18.4641 130.816 17.1719 127.562 17.1719H98.125C94.872 17.1719 91.7521 18.4641 89.4519 20.7644C87.1516 23.0646 85.8594 26.1845 85.8594 29.4375V36.7969H78.5C73.9457 36.7969 69.578 38.6061 66.3577 41.8264C63.1373 45.0468 61.3281 49.4145 61.3281 53.9688V71.1406H46.6094V68.6875C46.6094 65.4345 45.3171 62.3146 43.0169 60.0144C40.7166 57.7141 37.5968 56.4219 34.3438 56.4219H14.7188C13.108 56.4219 11.513 56.7391 10.0249 57.3555C8.53676 57.9719 7.18461 58.8754 6.04564 60.0144C3.74539 62.3146 2.45313 65.4345 2.45312 68.6875V88.3125C2.45312 89.9232 2.77038 91.5182 3.38679 93.0064C4.0032 94.4945 4.90667 95.8466 6.04564 96.9856C7.18461 98.1246 8.53676 99.0281 10.0249 99.6445C11.513 100.261 13.108 100.578 14.7188 100.578H34.3438C35.9545 100.578 37.5495 100.261 39.0376 99.6445C40.5257 99.0281 41.8779 98.1246 43.0169 96.9856C44.1558 95.8466 45.0593 94.4945 45.6757 93.0064C46.2921 91.5182 46.6094 89.9232 46.6094 88.3125V85.8594H61.3281V103.031C61.3281 107.586 63.1373 111.953 66.3577 115.174C69.578 118.394 73.9457 120.203 78.5 120.203H85.8594V127.562C85.8594 130.816 87.1516 133.935 89.4519 136.236C91.7521 138.536 94.872 139.828 98.125 139.828H127.562C130.816 139.828 133.935 138.536 136.236 136.236C138.536 133.935 139.828 130.816 139.828 127.562V98.125C139.828 94.872 138.536 91.7521 136.236 89.4519C133.935 87.1516 130.816 85.8594 127.562 85.8594H98.125C94.872 85.8594 91.7521 87.1516 89.4519 89.4519C87.1516 91.7521 85.8594 94.872 85.8594 98.125V105.484H78.5C77.8494 105.484 77.2254 105.226 76.7654 104.766C76.3053 104.306 76.0469 103.682 76.0469 103.031V53.9688C76.0469 53.3181 76.3053 52.6942 76.7654 52.2341C77.2254 51.7741 77.8494 51.5156 78.5 51.5156H85.8594V58.875C85.8594 62.128 87.1516 65.2479 89.4519 67.5481C91.7521 69.8484 94.872 71.1406 98.125 71.1406ZM31.8906 85.8594H17.1719V71.1406H31.8906V85.8594ZM100.578 100.578H125.109V125.109H100.578V100.578ZM100.578 31.8906H125.109V56.4219H100.578V31.8906Z"
                    fill="#60A5FA"
                  />
                </svg>
              </div>
              <div className="flex flex-1 flex-col gap-4 md:gap-6">
                <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                  Program Structure
                </h3>
                <p className="text-xl text-gray-900 lg:text-2xl">
                  Two annual cycles to ensure predictable participation. Common
                  evaluation framework across desciplines. Problem statements
                  aligned to technology, business and societal impact.
                </p>
              </div>
            </div>

            {/* Communication */}
            <div className="flex flex-col gap-6 rounded-2xl bg-blue-100 bg-opacity-40 p-8 md:flex-row md:items-start md:gap-8 lg:p-12">
              <div className="flex-shrink-0">
                <svg
                  className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36"
                  viewBox="0 0 146 146"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_640_221)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M96.6831 46.9734C97.2879 45.926 98.284 45.1617 99.4523 44.8487C100.621 44.5357 101.865 44.6995 102.913 45.3043C107.767 48.1014 111.799 52.1274 114.604 56.9775C117.409 61.8276 118.887 67.3306 118.889 72.9332C118.892 78.5358 117.42 84.0403 114.62 88.8931C111.82 93.746 107.792 97.776 102.94 100.578C101.896 101.144 100.673 101.281 99.5296 100.959C98.3865 100.638 97.4139 99.8828 96.8187 98.8552C96.2235 97.8275 96.0527 96.6083 96.3424 95.4566C96.6322 94.305 97.3598 93.3118 98.3705 92.6882C101.832 90.6834 104.705 87.8035 106.701 84.3374C108.698 80.8713 109.747 76.941 109.744 72.9411C109.743 68.94 108.688 65.0099 106.687 61.5453C104.686 58.0807 101.808 55.2037 98.3431 53.2031C97.2957 52.5983 96.5314 51.6022 96.2184 50.434C95.9054 49.2657 96.0692 48.0209 96.674 46.9734H96.6831Z"
                      fill="#60A5FA"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M104.892 21.3433C105.142 20.7988 105.496 20.3089 105.935 19.9015C106.374 19.4941 106.889 19.1772 107.451 18.9688C108.013 18.7604 108.61 18.6647 109.208 18.6872C109.807 18.7096 110.395 18.8497 110.939 19.0995C121.253 23.8363 129.99 31.434 136.114 40.99C142.253 50.5391 145.518 61.6523 145.518 73.005C145.518 84.3576 142.253 95.4708 136.114 105.02C129.99 114.576 121.253 122.174 110.939 126.91C109.84 127.415 108.585 127.462 107.451 127.041C106.317 126.62 105.397 125.766 104.892 124.667C104.388 123.567 104.341 122.312 104.762 121.178C105.182 120.044 106.036 119.124 107.136 118.619C115.872 114.65 123.259 108.214 128.388 100.104C133.561 92.0145 136.308 82.613 136.305 73.0114C136.302 63.4098 133.548 54.0101 128.37 45.9245C123.176 37.8351 115.768 31.4083 107.026 27.4088C106.482 27.1591 105.992 26.8046 105.585 26.3655C105.177 25.9265 104.86 25.4114 104.652 24.8499C104.444 24.2883 104.348 23.6912 104.37 23.0927C104.393 22.4942 104.533 21.9059 104.783 21.3615L104.892 21.3433Z"
                      fill="#60A5FA"
                    />
                    <path
                      d="M36.4842 45.6053L65.398 20.34C66.0573 19.7639 66.8684 19.3898 67.7346 19.2623C68.6007 19.1347 69.4853 19.2592 70.2826 19.6209C71.0799 19.9825 71.7563 20.566 72.2309 21.3016C72.7056 22.0373 72.9585 22.894 72.9594 23.7695V122.277C72.9585 123.152 72.7056 124.009 72.2309 124.745C71.7563 125.481 71.0799 126.064 70.2826 126.426C69.4853 126.787 68.6007 126.912 67.7346 126.784C66.8684 126.657 66.0573 126.283 65.398 125.706L36.4842 100.441H13.6816C10.053 100.441 6.57304 98.9997 4.00725 96.4339C1.44145 93.8681 0 90.3882 0 86.7596L0 59.3964C0 55.7678 1.44145 52.2878 4.00725 49.722C6.57304 47.1562 10.053 45.7148 13.6816 45.7148H36.4842V45.6053Z"
                      fill="#60A5FA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_640_221">
                      <rect width="145.937" height="145.937" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-1 flex-col gap-4 md:gap-6">
                <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                  Communication
                </h3>
                <p className="text-xl text-gray-900 lg:text-2xl">
                  Detailed information for each cycle will be released closer
                  to the event dates. Students are advised to monitor the
                  website for official updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}

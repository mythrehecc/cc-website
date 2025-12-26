import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography, spacing } from "@/utils/typography";
import { GraduationCap, LayoutGrid, Award } from "lucide-react";
import Footer from "@/components/Footer";

function Header() {
  return (
    <header className="w-full bg-[#DBEAFE] shadow-sm sticky top-0 z-50">
      <div className={spacing.container + " flex items-center justify-between h-16"}>
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F7bcf3b6829fc467ea4a0c747871be1c5?format=webp&width=800" 
            alt="Crestcode Logo" 
            className="w-8 h-8 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-gray-900 text-base font-bold">Crestcode</span>
            <span className="text-gray-500 text-xs">(India)</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            Home
          </Link>
          <Link to="/services" className={typography.nav + " text-gray-900 hover:text-blue-500 transition-colors"}>
            Services
          </Link>
          <Link to="/AboutUs" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            About Us
          </Link>
          <Link to="/Blogs" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            Blogs
          </Link>
        </nav>
        <Button className="bg-gray-900 hover:bg-gray-800 text-blue-100">
          <Link to="/Getintouch">Get In Touch</Link>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#9BB4C2] px-4 py-12 md:py-16">
      <div className={spacing.containerSmall}>
        <div className="text-center space-y-6">
          <div>
            <h1 className={typography.h1}>
              Hackathon
            </h1>
            <br></br>
            <p className={typography.pLarge}>
              Bringing engineering and management minds together through
              innovation. Watch this space for upcoming hackathon details and
              announcements.
            </p>
            <br></br>
            <Button size="lg">
              <Link to="/StudentsHackathon">View Hackathon 2025 Results</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InnovationSummitSection() {
  return (
    <section className=" px-4 py-12 md:py-16">
      <div className={spacing.containerSmall}>
        <div className="text-center space-y-6">
          <div>
            <div className="space-y-4">
              <p className={typography.button + " uppercase text-gray-900"}>
                UPCOMING EVENT
              </p>
              <h2 className={typography.h1}>
                Innovation Summit 2026
              </h2>
              <p className={typography.pLarge}>
                Join the biggest gathering of student developers and innovators
                this semester.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-gray-50 px-4 py-10 md:px-6 lg:px-12 lg:py-12">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-lg bg-white p-6 ring-1 ring-gray-200 hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 p-2.5 text-blue-600">
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3v3m8-3v3M3 10h18M5 6h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Coding Challenges
          </h3>
          <p className="text-sm text-gray-600">
            Test your algorithmic skills against the best.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-lg bg-white p-6 ring-1 ring-gray-200 hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 p-2.5 text-blue-600">
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 9h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Startup Pitches
          </h3>
          <p className="text-sm text-gray-600">
            Present your ideas to industry leaders and VCs.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-lg bg-white p-6 ring-1 ring-gray-200 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 p-2.5 text-blue-600">
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m22 0v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Team Formation
          </h3>
          <p className="text-sm text-gray-600">
            Find your perfect teammates for your big project.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfographicSection() {
  return (
    <section className="bg-gray-100 px-4 py-6 md:px-6 lg:px-12 lg:py-8">
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fcd5381e9cb504b72a5e5022356fc91d2%2Ff372562860d74806a37eb69967aea20c?format=webp&width=800"
            alt="Hackathon Update Infographic showing participation details, timing, and how to stay updated"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

function ProgramOverviewSection() {
  return (
    <section className="bg-gray-50 px-4 py-6 md:px-6 lg:px-12 lg:py-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:mb-6 lg:text-4xl">
          Program Overview
        </h2>

        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col gap-3 rounded-xl bg-blue-100 bg-opacity-40 p-4 ring-1 ring-gray-300 md:flex-row md:items-start md:gap-4 lg:p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 p-2 text-blue-600 md:h-14 md:w-14">
              <GraduationCap className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="flex flex-1 flex-col gap-3 md:gap-4">
              <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                Eligibility
              </h3>
              <p className="text-sm text-gray-900 lg:text-base">
                Open to all B.E/ B.Tech & M.B.A. students. Teams may be
                single discipline or cross-functional.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 md:flex-row md:items-start md:gap-4 lg:p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 p-2 text-blue-600 md:h-14 md:w-14">
              <LayoutGrid className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="flex flex-1 flex-col gap-4 md:gap-6">
              <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                Program Structure
              </h3>
              <p className="text-sm text-gray-900 lg:text-base">
                Two annual cycles to ensure predictable participation. Common
                evaluation framework across disciplines. Problem statements
                aligned to technology, business and societal impact.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-xl bg-blue-100 bg-opacity-40 p-4 md:flex-row md:items-start md:gap-4 lg:p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 p-2 text-blue-600 md:h-14 md:w-14">
              <Award className="h-8 w-8 md:h-10 md:w-10" />
            </div>
              <div className="flex-1 flex flex-col gap-3 md:gap-4">
                <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                  Evaluation Criteria
                </h3>
                <p className="text-sm text-gray-900 lg:text-base">
                  Projects will be evaluated based on innovation, technical complexity, 
                  business impact, and presentation quality.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hackathon() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <InnovationSummitSection />
        <FeaturesSection />
        <InfographicSection />
        <ProgramOverviewSection />
      </main>
      <Footer />
    </div>
  );
}

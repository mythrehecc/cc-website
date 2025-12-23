import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <NarrativeSection />
      <WhoWeWorkWithSection />
      <OperatingModelSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="w-full bg-[#DBEAFE] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 max-w-[1920px] flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
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
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-base font-bold leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            Services
          </Link>
          <Link to="/AboutUs" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            About Us
          </Link>
          <Link to="/Blogs" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            Blogs
          </Link>
        </nav>
        <Link to="/Getintouch" className="bg-[#111827] text-[#DBEAFE] px-5 py-2 rounded font-semibold text-[15px] leading-6 hover:bg-[#1f2937] transition-colors">
          Get In Touch
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="w-full bg-[#9BB4C2] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center gap-8 md:gap-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[59px] font-bold leading-tight lg:leading-[60px] text-[#111827] max-w-4xl">
            Your Vision, Our
            <br />
            Expertise, Shared Success
          </h1>
          <p className="text-lg md:text-xl lg:text-[23px] leading-relaxed lg:leading-[32px] text-[#111827] max-w-3xl">
            From idea to launch — Crestcode builds reliable,
            <br className="hidden md:block" />
            We turn your vision into reality, Faster, Clearer and with Confidence. By removing uncertainty, Aligning every step with your end goal, and Accelerating time to market. We help you build Smarter, Launch sooner and grow with purpose. Because, in Start-Ups, Clarity and Speed aren't Optional. They're Everything., human-centered products.
          </p>
          <Link 
            to="/Getintouch#contact-form" 
            className="bg-[#111827] text-white px-16 py-5 rounded-lg border-2 border-[#111827] text-xl font-semibold hover:bg-[#1f2937] transition-colors inline-flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function NarrativeSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="bg-[#FFF9E6] p-12 md:p-16 lg:p-20 rounded-[30px] flex items-center justify-center min-h-[400px] lg:min-h-[546px]">
            <h2 className="text-3xl md:text-4xl lg:text-[59px] font-bold leading-tight lg:leading-[100px] text-[#111827] text-center">
              "Disrupt Industries to Exponentially Improve Customer Experience"
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-[35px] font-bold leading-tight lg:leading-[40px] text-[#111827]">
              The Crestcode Narrative
            </h2>
            <div className="text-xl md:text-2xl lg:text-[28px] leading-relaxed lg:leading-[40px] text-[#4B5563] space-y-6">
              <p>
                Crestcode Engineering Services is a high-performance technical consultancy and exclusive development partner to Crestcode Product Studio.
              </p>
              <p>
                Our expertise helps Startups and Enterprises build customer-focused digital products that drive adoption and business impact.
              </p>
              <p>
                With Crestcode, you gain a reliable, accountable, and high-performance partner committed to your product's success.
              </p>
            </div>
            <Link to="/services" className="bg-[#111827] text-white px-8 py-4 rounded-lg border-2 border-[#111827] text-xl font-bold hover:bg-[#1f2937] transition-colors inline-flex items-center gap-2 self-start">
              Go to Services
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5303 6.05328C14.8232 5.76039 14.8232 5.28551 14.5303 4.99262L9.75736 0.219648C9.46447 -0.0732449 8.98959 -0.0732449 8.6967 0.219648C8.40381 0.512542 8.40381 0.987415 8.6967 1.28031L12.9393 5.52295L8.6967 9.76559C8.40381 10.0585 8.40381 10.5334 8.6967 10.8263C8.98959 11.1191 9.46447 11.1191 9.75736 10.8263L14.5303 6.05328ZM0 5.52295V6.27295H14V5.52295V4.77295H0V5.52295Z" fill="white"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeWorkWithSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:gap-12">
            <h2 className="text-4xl md:text-5xl lg:text-[46px] font-black leading-tight lg:leading-[60px] text-[#111827]">
              Who We Work With
            </h2>
            <p className="text-xl md:text-2xl lg:text-[24px] leading-relaxed lg:leading-[35px] text-[#4B5563]">
              A single partner for strategy, design, engineering, testing, DevOps, and long-term product success.
            </p>
            <p className="text-xl md:text-2xl lg:text-[24px] leading-relaxed lg:leading-[35px] text-[#4B5563]">
              Built to help you move faster, smarter, and with less risk.
            </p>
            <button className="bg-[#111827] text-white px-8 py-4 rounded-lg border-2 border-[#111827] text-xl font-bold hover:bg-[#1f2937] transition-colors inline-flex items-center gap-2 self-start">
              Start Your Product Journey
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5303 6.05328C14.8232 5.76039 14.8232 5.28551 14.5303 4.99262L9.75736 0.219648C9.46447 -0.0732449 8.98959 -0.0732449 8.6967 0.219648C8.40381 0.512542 8.40381 0.987415 8.6967 1.28031L12.9393 5.52295L8.6967 9.76559C8.40381 10.0585 8.40381 10.5334 8.6967 10.8263C8.98959 11.1191 9.46447 11.1191 9.75736 10.8263L14.5303 6.05328ZM0 5.52295V6.27295H14V5.52295V4.77295H0V5.52295Z" fill="white"/>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ServiceCard
              icon={<StartupLabIcon />}
              title="Startup Lab"
              description="Turn breakthrough ideas into market-ready business models. We help founders validate fast and build with confidence."
            />
            <ServiceCard
              icon={<GrowthAcceleratorIcon />}
              title="Growth Accelerator"
              description="Boost profitability and scale your SMB with proven, data-driven strategies. We refine your Product-Market Fit to unlock sustainable, long-term growth."
            />
            <ServiceCard
              icon={<ProductConsultingIcon />}
              title="Product Consulting"
              description="Define a clear product vision, mission, and roadmap with our expert guidance. We help enterprises make strategic decisions that unlock long-term value."
            />
            <ServiceCard
              icon={<DigitalTransformationIcon />}
              title="Digital Transformation"
              description="Boost scalability and efficiency through modernized, intelligent processes. Transform, automate, and upgrade your business for a digital-first future."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[105px] h-[105px] rounded-[10px] bg-[#60A5FA] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl md:text-[28px] font-bold leading-[40px] text-[#111827]">
        {title}
      </h3>
      <p className="text-lg md:text-[20px] leading-[28px] text-[#4B5563]">
        {description}
      </p>
    </div>
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
              <li><Link to="/Internship" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Internships</Link></li>
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

function ImageCarousel() {
  const images = [
    "https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F1e520029ce774fdda47284bf9c6a60cd?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2Fc39ba92c6e124a09a2e951f7fb4733e5?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F37e9e3bbaf7d442994dc9aa266c876a3?format=webp&width=800",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="rounded-[30px] h-[400px] lg:h-[717px] w-full overflow-hidden bg-[#E5E7EB]">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Operating Model ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function OperatingModelSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[35px] font-bold leading-[40px] text-[#111827] mb-6 lg:mb-8">
            Our Operating Model
          </h2>
          <p className="text-xl md:text-2xl lg:text-[24px] leading-relaxed lg:leading-[35px] text-[#4B5563] max-w-4xl mx-auto">
            Our operating model starts with deep product understanding and clear success metrics. We translate vision into actionable roadmaps, prioritizing impact, speed, and user value.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8 lg:gap-12">
            <OperatingModelStep
              number={1}
              title="Partner with US"
              description="Partner with Crestcode to build the product together. This is for those who want an active partner to help them build the product."
            />
            <OperatingModelStep
              number={2}
              title="Get a POD"
              description="You know how to build or have worked with engineers before."
            />
            <OperatingModelStep
              number={3}
              title="Get our service"
              description="You want us to build something for you."
            />
          </div>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}

function OperatingModelStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-[105px] h-[105px] rounded-full bg-white shadow-[0_30px_60px_0_rgba(0,0,0,0.10),-30px_-30px_60px_0_#FFF] flex items-center justify-center flex-shrink-0">
        <span className="text-[32px] font-semibold text-[#60A5FA]">{number}</span>
      </div>
      <div className="flex-1 pt-4">
        <h3 className="text-xl md:text-[24px] font-bold leading-[28px] text-[#111827] mb-4">
          {title}
        </h3>
        <p className="text-lg md:text-[22px] leading-[40px] text-[#111827]">
          {description}
        </p>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#A8BCC9]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[35px] font-bold leading-[40px] text-[#111827] mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg md:text-[19px] leading-[28px] text-[#111827] mb-10 lg:mb-12">
          Let's discuss your project and explore how we can help you achieve your goals.
        </p>
        <button className="bg-[#111827] text-white px-8 py-4 rounded-lg text-base md:text-[16px] font-bold hover:bg-[#1f2937] transition-colors inline-flex items-center gap-2">
          Start Your Project
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.1665 10H15.8332" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

function StartupLabIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 14C27.5523 14 28 13.5523 28 13C28 12.4477 27.5523 12 27 12C26.4477 12 26 12.4477 26 13C26 13.5523 26.4477 14 27 14Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 22C35.5523 22 36 21.5523 36 21C36 20.4477 35.5523 20 35 20C34.4477 20 34 20.4477 34 21C34 21.5523 34.4477 22 35 22Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 16C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 26C13.5523 26 14 25.5523 14 25C14 24.4477 13.5523 24 13 24C12.4477 24 12 24.4477 12 25C12 25.5523 12.4477 26 13 26Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44C25.852 44 27.296 42.508 27.296 40.624C27.296 39.75 26.936 38.954 26.422 38.374C25.842 37.796 25.546 37.07 25.546 36.124C25.5384 35.6838 25.6195 35.2466 25.7845 34.8385C25.9495 34.4303 26.1949 34.0595 26.5062 33.7482C26.8175 33.4369 27.1883 33.1915 27.5965 33.0265C28.0046 32.8615 28.4418 32.7804 28.882 32.788H32.874C38.976 32.788 43.984 27.782 43.984 21.68C43.93 12.024 34.922 4 24 4Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GrowthAcceleratorIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 36L44 24L32 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 12L4 24L16 36" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ProductConsultingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 16C33.9411 16 42 13.3137 42 10C42 6.68629 33.9411 4 24 4C14.0589 4 6 6.68629 6 10C6 13.3137 14.0589 16 24 16Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 10V38C6 39.5913 7.89642 41.1174 11.2721 42.2426C14.6477 43.3679 19.2261 44 24 44C28.7739 44 33.3523 43.3679 36.7279 42.2426C40.1036 41.1174 42 39.5913 42 38V10" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 24C6 25.5913 7.89642 27.1174 11.2721 28.2426C14.6477 29.3679 19.2261 30 24 30C28.7739 30 33.3523 29.3679 36.7279 28.2426C40.1036 27.1174 42 25.5913 42 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DigitalTransformationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.9998 38H17.9998C15.4036 37.9993 12.8586 37.2767 10.6494 35.9129C8.44015 34.5491 6.65367 32.5979 5.48957 30.2772C4.32548 27.9566 3.82962 25.3579 4.05742 22.7716C4.28521 20.1854 5.22769 17.7134 6.77953 15.632C8.33136 13.5505 10.4314 11.9416 12.845 10.985C15.2586 10.0284 17.8907 9.76175 20.4471 10.2149C23.0035 10.6681 25.3836 11.8232 27.3213 13.5512C29.259 15.2792 30.678 17.512 31.4198 20H34.9998C37.3868 20 39.676 20.9482 41.3638 22.636C43.0516 24.3239 43.9998 26.6131 43.9998 29C43.9998 31.387 43.0516 33.6761 41.3638 35.364C39.676 37.0518 37.3868 38 34.9998 38Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

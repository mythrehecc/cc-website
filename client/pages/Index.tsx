
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography, spacing } from "@/utils/typography";
import Footer from "@/components/Footer";

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
      <div className={spacing.container + " flex items-center justify-between h-16"}>
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F7bcf3b6829fc467ea4a0c747871be1c5?format=webp&width=800"
            alt="Crestcode Logo"
            className="w-8 h-8 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">Crestcode</span>
            <span className="text-xs text-gray-500">(India)</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={typography.navActive + " text-gray-900 hover:text-gray-900 transition-colors"}>
            Home
          </Link>
          <Link to="/Services" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            Services
          </Link>
          <Link to="/AboutUs" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            About Us
          </Link>
          <Link to="/Blogs" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            Blogs
          </Link>
        </nav>
        <Button asChild>
          <Link to="/Getintouch">Get In Touch</Link>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#9BB4C2] py-12 md:py-16">
      <div className={spacing.containerSmall + " text-center"}>
        <div className="max-w-3xl mx-auto">
          <h1 className={typography.h1 + " text-gray-900 mb-6"}>
            Your Vision, Our<br />Expertise, Shared Success
          </h1>
          <p className={typography.pLarge + " text-gray-600 mb-8 max-w-2xl mx-auto"}>
            From idea to launch Crestcode builds reliable, human-centered products. We turn your vision into reality, Faster, Clearer and with Confidence. By removing uncertainty, Aligning every step with your end goal, and Accelerating time to market. We help you build Smarter, Launch sooner and grow with purpose. Because, in Start-Ups, Clarity and Speed aren't Optional. They're Everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/Getintouch">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function NarrativeSection() {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className={spacing.container}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full">
          <div className="bg-[#FFF9E6] p-8 rounded-2xl flex items-center justify-center transform -rotate-1 transition-all duration-300 hover:shadow-lg h-full">
            <h2 className={typography.h2 + " text-center"}>
              "Disrupt Industries to Exponentially Improve Customer Experience"
            </h2>
          </div>
          <div className="flex flex-col justify-center h-full">
            <h2 className={typography.h2 + " mb-4"}>
              The Crestcode Narrative
            </h2>
            <div className={spacing.gap.medium}>
              <p className={typography.p}>
                Crestcode Engineering Services is a high-performance technical consultancy and exclusive development partner to Crestcode Product Studio.
              </p>
              <p className={typography.p}>
                Our expertise helps Startups and Enterprises build customer-focused digital products that drive adoption and business impact.
              </p>
              <p className={typography.p}>
                With Crestcode, you gain a reliable, accountable, and high-performance partner committed to your product's success.
              </p>
            </div>
            <div className="mt-4">
              <Button className="bg-black hover:bg-gray-800 text-white" asChild>
                <Link to="/Services">Go to Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeWorkWithSection() {
  return (
    <section className="w-full py-8 md:py-12 bg-gray-50">
      <div className={spacing.container}>
        <div className="text-center mb-8">
          <h2 className={typography.h2 + " mb-3"}>Who We Work With</h2>
          <div className={spacing.gap.small + " max-w-3xl mx-auto"}>
            <p className={typography.p}>
              A single partner for strategy, design, engineering, testing, DevOps, and long-term product success.
              Built to help you move faster, smarter, and with less risk.
            </p>
          </div>
          <div className="mt-4">
            <Button className="bg-black hover:bg-gray-800 text-white" asChild>
              <Link to="/Getintouch#contact-form">Start Your Product Journey</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            icon={<StartupLabIcon />}
            title="Startup Lab"
            description="Turn breakthrough ideas into market-ready business models. We help founders validate fast and build with confidence."
          />
          <ServiceCard
            icon={<GrowthAcceleratorIcon />}
            title="Growth Accelerator"
            description="Boost profitability and scale your SMB with proven, data-driven strategies."
          />
          <ServiceCard
            icon={<ProductConsultingIcon />}
            title="Product Consulting"
            description="Define a clear product vision, mission, and roadmap with our expert guidance."
          />
          <ServiceCard
            icon={<DigitalTransformationIcon />}
            title="Digital Transformation"
            description="Boost scalability and efficiency through modernized, intelligent processes."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="w-12 h-12 rounded-lg bg-[#60A5FA] flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className={typography.h3 + " text-lg mb-2"}>{title}</h3>
      <p className={typography.pSmall}>{description}</p>
    </div>
  );
}

function ImageCarousel({ activeIndex, loading }: { activeIndex?: number; loading?: boolean }) {
  const images = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof activeIndex === "number") {
      setCurrentIndex(activeIndex);
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  return (
    <div className="rounded-[30px] h-[300px] lg:h-[400px] w-full overflow-hidden bg-[#E5E7EB] relative">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Operating Model ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full border-2 border-[#60A5FA] border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  );
}

function OperatingModelSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [loadingStep, setLoadingStep] = useState<number | null>(null);

  const handleSelect = (step: number) => {
    if (loadingStep !== null) return;
    setLoadingStep(step);
    setTimeout(() => {
      setActiveStep(step);
      setLoadingStep(null);
    }, 600);
  };

  return (
    <section id="operating-model" className="w-full py-10 md:py-12 bg-white scroll-mt-12">
      <div className={spacing.container}>
        <div className="text-center mb-8">
          <h2 className={typography.h2 + " mb-3"}>Our Operating Model</h2>
          <p className={typography.p + " max-w-3xl mx-auto"}>
            Our operating model starts with deep product understanding and clear success metrics. We translate vision into actionable roadmaps, prioritizing impact, speed, and user value.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <OperatingModelStep
              number={1}
              title="Partner with US"
              description="Partner with Crestcode to build the product together. This is for those who want an active partner to help them build the product."
              isActive={activeStep === 1}
              isLoading={loadingStep === 1}
              onSelect={() => handleSelect(1)}
            />
            <OperatingModelStep
              number={2}
              title="Get a POD"
              description="You know how to build or have worked with engineers before."
              isActive={activeStep === 2}
              isLoading={loadingStep === 2}
              onSelect={() => handleSelect(2)}
            />
            <OperatingModelStep
              number={3}
              title="Get our service"
              description="You want us to build something for you."
              isActive={activeStep === 3}
              isLoading={loadingStep === 3}
              onSelect={() => handleSelect(3)}
            />
          </div>
          <div className="w-full h-auto max-w-md mx-auto">
            <ImageCarousel activeIndex={activeStep - 1} loading={loadingStep !== null} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OperatingModelStep({ number, title, description, isActive, isLoading, onSelect }: { number: number; title: string; description: string; isActive: boolean; isLoading: boolean; onSelect: () => void }) {
  return (
    <div
      className={`flex gap-4 items-start p-3 rounded-lg cursor-pointer transition-colors ${
        isActive ? 'bg-blue-50' : 'hover:bg-gray-50'
      }`}
      onMouseEnter={onSelect}
      onClick={onSelect}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
        isActive ? 'bg-[#DBEAFE]' : 'bg-white shadow-md'
      }`}>
        <span className={`text-lg font-semibold ${isActive ? 'text-[#2563EB]' : 'text-[#60A5FA]'}`}>{number}</span>
      </div>
      <div className="flex-1">
        <h3 className={typography.h3 + " mb-1"}>{title}</h3>
        <p className={typography.p}>{description}</p>
      </div>
      {isLoading && (
        <div className="mt-1">
          <div className="h-5 w-5 rounded-full border-2 border-[#60A5FA] border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  );
}

function CTASection() {
  return (
    <section className="w-full py-10 md:py-12 bg-[#A8BCC9]">
      <div className={spacing.containerSmall + " text-center"}>
        <h2 className={typography.h2 + " mb-3"}>Ready to Build Something Amazing?</h2>
        <p className={typography.p + " max-w-2xl mx-auto mb-5"}>
          Let's discuss your project and explore how we can help you achieve your goals.
        </p>
        <Button className="bg-black hover:bg-gray-800 text-white" size="lg" asChild>
          <Link to="/Getintouch#contact-form">Start Your Project</Link>
        </Button>
      </div>
    </section>
  );
}

function StartupLabIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M27 14C27.5523 14 28 13.5523 28 13C28 12.4477 27.5523 12 27 12C26.4477 12 26 12.4477 26 13C26 13.5523 26.4477 14 27 14Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 22C35.5523 22 36 21.5523 36 21C36 20.4477 35.5523 20 35 20C34.4477 20 34 20.4477 34 21C34 21.5523 34.4477 22 35 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 16C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 26C13.5523 26 14 25.5523 14 25C14 24.4477 13.5523 24 13 24C12.4477 24 12 24.4477 12 25C12 25.5523 12.4477 26 13 26Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44C25.852 44 27.296 42.508 27.296 40.624C27.296 39.75 26.936 38.954 26.422 38.374C25.842 37.796 25.546 37.07 25.546 36.124C25.5384 35.6838 25.6195 35.2466 25.7845 34.8385C25.9495 34.4303 26.1949 34.0595 26.5062 33.7482C26.8175 33.4369 27.1883 33.1915 27.5965 33.0265C28.0046 32.8615 28.4418 32.7804 28.882 32.788H32.874C38.976 32.788 43.984 27.782 43.984 21.68C43.93 12.024 34.922 4 24 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GrowthAcceleratorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M32 36L44 24L32 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 12L4 24L16 36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ProductConsultingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M24 16C33.9411 16 42 13.3137 42 10C42 6.68629 33.9411 4 24 4C14.0589 4 6 6.68629 6 10C6 13.3137 14.0589 16 24 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 10V38C6 39.5913 7.89642 41.1174 11.2721 42.2426C14.6477 43.3679 19.2261 44 24 44C28.7739 44 33.3523 43.3679 36.7279 42.2426C40.1036 41.1174 42 39.5913 42 38V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 24C6 25.5913 7.89642 27.1174 11.2721 28.2426C14.6477 29.3679 19.2261 30 24 30C28.7739 30 33.3523 29.3679 36.7279 28.2426C40.1036 27.1174 42 25.5913 42 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DigitalTransformationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M34.9998 38H17.9998C15.4036 37.9993 12.8586 37.2767 10.6494 35.9129C8.44015 34.5491 6.65367 32.5979 5.48957 30.2772C4.32548 27.9566 3.82962 25.3579 4.05742 22.7716C4.28521 20.1854 5.22769 17.7134 6.77953 15.632C8.33136 13.5505 10.4314 11.9416 12.845 10.985C15.2586 10.0284 17.8907 9.76175 20.4471 10.2149C23.0035 10.6681 25.3836 11.8232 27.3213 13.5512C29.259 15.2792 30.678 17.512 31.4198 20H34.9998C37.3868 20 39.676 20.9482 41.3638 22.636C43.0516 24.3239 43.9998 26.6131 43.9998 29C43.9998 31.387 43.0516 33.6761 41.3638 35.364C39.676 37.0518 37.3868 38 34.9998 38Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

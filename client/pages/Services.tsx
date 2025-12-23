import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <TechStackSection />
      <MVPSection />
      <EngineeringAtScaleSection />
      <CTASection />
      <Footer />
    </div>
  );
}

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
          <Link to="/services" className="text-base font-bold leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">
            Services
          </Link>
          <Link to="AboutUs" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            About Us
          </Link>
          <a href="#" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            Blogs
          </a>
        </nav>
        <button className="bg-[#111827] text-[#DBEAFE] px-5 py-2 rounded font-semibold text-[15px] leading-6 hover:bg-[#1f2937] transition-colors">
          <Link to="/Getintouch">Get In Touch</Link>
        </button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="w-full bg-[#9BB4C2] py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-5xl lg:text-[59px] font-bold leading-tight lg:leading-[60px] text-[#111827]">
            Our Services
          </h1>
          <p className="text-xl lg:text-[22px] leading-relaxed lg:leading-[32px] text-[#111827] max-w-3xl">
            Comprehensive product development services from strategy to support
          </p>
          <button onClick={() => {
              const whyChooseUsSection = document.querySelector('.py-24.bg-gray-50'); 
               if (whyChooseUsSection) {
                 whyChooseUsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }} 
              className="mt-6 bg-[#111827] text-white px-12 py-4 rounded-lg border-2 border-[#111827] text-xl font-semibold hover:bg-[#1f2937] transition-colors">

            View Services
            
          </button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] text-center mb-20">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Dedicated, Embedded POD Teams"
            description="Engineers, designers, QA, and DevOps form stable teams assigned to each product for long-term consistency."
            borderColor="border-[#CAF2D8]"
          />
          <FeatureCard
            title="Execution-First Philosophy"
            description="We specialize in delivery excellence and take accountability for results, not just hours billed."
            borderColor="border-[#D7E5F6]"
          />
          <FeatureCard
            title="Founder/Enterprise-Friendly Operations"
            description="We manage the engineering and offer strategic input so leadership can focus on sales, GTM, and growth."
            borderColor="border-[#F6CDD7]"
          />
          <FeatureCard
            title="Technical Partner, Not Vendor"
            description="We don't just execute code. We provide proactive technical strategy, risk mitigation, and architectural consultation to drive the long-term success of your product."
            borderColor="border-[#E1CEF3]"
          />
          <FeatureCard
            title="Product-Led Decision Making"
            description="We prioritize roadmap clarity, user impact, and measurable outcomes - aligning engineering execution with business goals at every stage of the product lifecycle."
            borderColor="border-[#9BB4C2]"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, borderColor }: { title: string; description: string; borderColor: string }) {
  return (
    <div className={`flex flex-col items-center gap-5 p-8 rounded-lg border-2 ${borderColor} bg-white shadow-sm`}>
      <h3 className="text-xl font-bold text-[#111827] text-center">{title}</h3>
      <p className="text-base leading-[30px] text-[#4B5563] text-center">{description}</p>
    </div>
  );
}

function TechStackSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-[35px] font-bold text-[#111827] mb-4">
            Our Tech Stack
          </h2>
          <p className="text-lg text-[#4B5563]">
            We work with cutting-edge technologies to build modern, scalable applications
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-4 lg:col-start-1">
              <TechCard
                title="Frontend"
                description="Delivers fast, intuitive, and accessible user experiences across web platforms."
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <TechCard
                title="Mobile"
                description="Builds high-performance mobile applications for iOS and Android users."
              />
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F94444874a2324a70bb845ad921640476?format=webp&width=800"
              alt="Tech Stack Diagram"
              className="w-full max-w-[800px] h-auto rounded-[30px] border-4 border-[#60A5FA] object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <TechCard
              title="Backend"
              description="Ensures scalability, security, and smooth data flow across product features."
            />
            <TechCard
              title="Databases"
              description="Ensures data integrity, fast access, and reliability for product operations."
            />
            <TechCard
              title="Cloud"
              description="Optimizes performance, deployment speed, and operational efficiency."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#0EA5E9] text-white p-6 rounded-xl border-2 border-white shadow-sm">
      <h3 className="text-lg lg:text-[19px] font-bold mb-2 leading-7">{title}</h3>
      <p className="text-sm lg:text-[15px] leading-6">{description}</p>
    </div>
  );
}

function MVPSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-[35px] font-bold text-[#111827] mb-4">
            Your MVP, Delivered Right
          </h2>
          <p className="text-2xl lg:text-[28px] text-[#4B5563] leading-relaxed">
            Fast MVP Development, Customer-Validated Build, No Technical Overwhelm, Predictable Costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MVPCard
            icon={<LaunchFasterIcon />}
            title="Launch Faster"
            description="Benefit from rapid iteration and market entry."
          />
          <MVPCard
            icon={<SpendSmarterIcon />}
            title="Spend Smarter"
            description="Benefit from rapid iteration and market entry."
          />
          <MVPCard
            icon={<BuildWhatCustomersWantIcon />}
            title="Build what customers want"
            description="Ensure product-market fit from the very beginning."
          />
        </div>
      </div>
    </section>
  );
}

function MVPCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="border border-[#6B7280] rounded-lg p-8">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl lg:text-[30px] font-bold text-[#111827] mb-6 leading-7">
        {title}
      </h3>
      <p className="text-xl lg:text-2xl text-[#6B7280] leading-[30px]">
        {description}
      </p>
    </div>
  );
}

function EngineeringAtScaleSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <h2 className="text-4xl lg:text-[35px] font-bold text-[#111827] mb-6">
          Predictable Engineering at Scale
        </h2>
        <p className="text-2xl lg:text-[28px] text-[#4B5563] leading-relaxed">
          Enterprise-Grade Architecture , Dedicated Build Teams, and Zero-Noise Delivery all working in perfect sync.
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/2f8ba7c14946dfc46ecb08d83af54a4b1958f096?width=3840" 
          alt="Engineering Process" 
          className="w-full max-w-7xl mx-auto rounded-lg"
        />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="w-full py-24 bg-[#9BB4C2]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-4xl lg:text-[35px] font-bold text-[#111827] mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg lg:text-lg text-[#111827] mb-10 max-w-2xl mx-auto">
          Let's discuss how our services can help you build the perfect solution for your business.
        </p>
        <button className="bg-[#111827] text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-[#1f2937] transition-colors inline-flex items-center gap-3">
          Start Your Project
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16675 10H15.8334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
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
              Engineering digital products that matter. 
              From idea to launch-we build reliable, 
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

function LaunchFasterIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.4377 0.917992L24.971 2.02885C26.0799 1.55828 26.0799 1.56021 26.0818 1.56021V1.56406L26.0857 1.57178L26.0934 1.59106C26.1349 1.6928 26.1735 1.7957 26.2091 1.89963C26.6171 3.09252 26.8534 4.33732 26.9111 5.59671C27.0095 7.90521 26.4907 10.9196 23.9527 13.4633C23.0173 14.4276 21.6789 15.3881 20.2035 16.3234C21.0483 18.0688 21.0926 19.8083 20.57 21.4553C19.9567 23.3743 18.6028 25.0849 17.0985 26.5468C16.9686 26.6731 16.8118 26.7685 16.6399 26.8259C16.468 26.8832 16.2853 26.9011 16.1055 26.8781C15.9258 26.8551 15.7535 26.7919 15.6015 26.6931C15.4496 26.5944 15.3218 26.4626 15.2278 26.3076L11.5192 20.1516L6.84625 15.4806L0.694109 11.772C0.538545 11.6784 0.406141 11.5508 0.306786 11.3988C0.207431 11.2469 0.143692 11.0744 0.120327 10.8944C0.0969625 10.7143 0.114577 10.5313 0.171854 10.359C0.229132 10.1867 0.324593 10.0296 0.451109 9.89935C1.91489 8.39506 3.62554 7.04121 5.54254 6.42985C7.23447 5.86969 9.07928 6.00141 10.6745 6.79628C11.6118 5.31899 12.5722 3.98056 13.5365 3.04713C16.0783 0.509135 19.0946 -0.0115799 21.4031 0.0887059C22.6625 0.146395 23.9073 0.382758 25.1002 0.790706L25.4088 0.90642L25.428 0.914134L25.4377 0.917992ZM24.971 2.02885L26.0799 1.55828C25.9565 1.27105 25.7272 1.04241 25.4396 0.91992L24.971 2.02885ZM17.8893 14.9078C17.954 14.863 18.0231 14.8249 18.0956 14.7941C19.893 13.6967 21.3453 12.6938 22.2266 11.7816L22.2401 11.7662C24.1668 9.84149 24.5833 7.56578 24.5023 5.69892C24.461 4.7739 24.3009 3.85803 24.026 2.97385C23.1412 2.69874 22.2246 2.53864 21.299 2.49749C19.434 2.41649 17.1583 2.83306 15.2336 4.75971L15.2182 4.77321C14.3098 5.65071 13.307 7.09906 12.2096 8.89071C12.1629 9.00649 12.0978 9.11395 12.0168 9.20892L11.8008 9.57149L17.4264 15.1971L17.8044 14.9715L17.8893 14.9078ZM17.816 17.7679L17.87 17.7351L18.1303 17.5828C18.6067 18.6898 18.5893 19.7254 18.2711 20.7244C17.9548 21.7157 17.3261 22.7147 16.4737 23.706L14.169 19.8797C14.7798 19.5223 15.395 19.1655 16.0147 18.8093L16.1651 18.7245C16.7205 18.4043 17.2708 18.0855 17.816 17.7679ZM15.2741 16.4546L10.5433 11.7238L10.2425 12.2464C9.85932 12.9163 9.46589 13.5958 9.06218 14.2849L12.713 17.9376C13.4092 17.5288 14.1131 17.1238 14.8074 16.7226L14.9617 16.6339L15.2741 16.4546ZM6.27539 8.72678C7.30218 8.37895 8.42221 8.42989 9.41318 8.86949C8.99082 9.58692 8.55497 10.3448 8.11911 11.1008C7.78161 11.6852 7.44797 12.2676 7.12011 12.8308L3.29382 10.5261C4.28511 9.67371 5.28218 9.04306 6.27539 8.72678ZM0.0191088 25.8525C-0.0104428 26.0071 -0.00171788 26.1665 0.0445223 26.3169C0.0907624 26.4673 0.173112 26.6042 0.284386 26.7154C0.395659 26.8267 0.532475 26.9091 0.682892 26.9553C0.83331 27.0015 0.992758 27.0103 1.14732 26.9807H1.16275L1.20711 26.9711L1.37489 26.9363C2.20988 26.7659 3.03954 26.5704 3.86275 26.3501C4.57632 26.1572 5.34197 25.9258 6.01504 25.6654C6.64182 25.4243 7.32647 25.1061 7.7604 24.6915C8.42278 24.0672 8.8432 23.229 8.94738 22.3248C9.05156 21.4206 8.83279 20.5086 8.32972 19.7501C7.82665 18.9916 7.07167 18.4353 6.19817 18.1795C5.32466 17.9237 4.38886 17.9849 3.55611 18.3523C3.08508 18.5616 2.66079 18.8633 2.30832 19.2394C1.89368 19.6733 1.57547 20.358 1.33439 20.9848C1.07129 21.6906 0.842802 22.4089 0.649752 23.1371C0.414387 24.0148 0.207281 24.8998 0.0287516 25.7908L0.0210374 25.8371L0.0171802 25.8486L0.0191088 25.8525ZM20.2498 4.82142C19.7383 4.82142 19.2478 5.02461 18.8861 5.38629C18.5244 5.74796 18.3213 6.2385 18.3213 6.74999C18.3213 7.26148 18.5244 7.75202 18.8861 8.1137C19.2478 8.47537 19.7383 8.67856 20.2498 8.67856C20.7613 8.67856 21.2519 8.47537 21.6135 8.1137C21.9752 7.75202 22.1784 7.26148 22.1784 6.74999C22.1784 6.2385 21.9752 5.74796 21.6135 5.38629C21.2519 5.02461 20.7613 4.82142 20.2498 4.82142Z" fill="#60A5FA"/>
    </svg>
  );
}

function SpendSmarterIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5 25.3125C15.3113 25.3125 18.4095 22.95 18.4095 13.5C18.4095 4.05 15.3113 1.6875 13.5 1.6875C11.6888 1.6875 8.59106 4.20919 8.59106 13.5C8.59106 22.7908 11.6888 25.3125 13.5 25.3125Z" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.87153 19.6875C3.77716 21.2693 7.45197 22.7368 15.9547 17.7868C24.4575 12.8368 25.0346 8.89426 24.1284 7.31307C23.2228 5.73076 19.4051 4.34645 11.0458 9.2132C2.68591 14.0799 1.96591 18.1058 2.87153 19.6875Z" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.87165 7.31253C1.96603 8.89428 2.54259 12.8368 11.0459 17.7868C19.5487 22.7368 23.2229 21.2693 24.1285 19.6881C25.0342 18.1058 24.3142 14.08 15.9548 9.21322C7.59553 4.34647 3.77728 5.73078 2.87165 7.31253Z" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BuildWhatCustomersWantIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5982 11.25C17.685 11.25 18.567 12.132 18.567 13.2188V18.5614C18.567 19.9043 18.0335 21.1923 17.0839 22.1419C16.1343 23.0915 14.8463 23.625 13.5034 23.625C12.1604 23.625 10.8725 23.0915 9.92285 22.1419C8.97324 21.1923 8.43975 19.9043 8.43975 18.5614V13.2188C8.43975 12.132 9.32062 11.25 10.4085 11.25H16.5982ZM16.5982 12.9375H10.4085C10.3339 12.9375 10.2624 12.9671 10.2096 13.0199C10.1569 13.0726 10.1272 13.1442 10.1272 13.2188V18.5614C10.1272 19.4568 10.4829 20.3155 11.1161 20.9487C11.7492 21.5818 12.608 21.9375 13.5034 21.9375C14.3988 21.9375 15.2575 21.5818 15.8907 20.9487C16.5238 20.3155 16.8795 19.4568 16.8795 18.5614V13.2188C16.8795 13.1442 16.8499 13.0726 16.7971 13.0199C16.7444 12.9671 16.6728 12.9375 16.5982 12.9375ZM4.21875 11.25H8.02238C7.6256 11.7294 7.38322 12.3177 7.32713 12.9375H4.21875C4.14416 12.9375 4.07262 12.9671 4.01988 13.0199C3.96713 13.0726 3.9375 13.1442 3.9375 13.2188V16.8739C3.93721 17.2991 4.03333 17.7188 4.21863 18.1015C4.40393 18.4842 4.67359 18.8199 5.00732 19.0833C5.34105 19.3468 5.73017 19.5311 6.14542 19.6225C6.56067 19.7139 6.99124 19.71 7.40475 19.611C7.50037 20.178 7.67475 20.7191 7.91437 21.222C7.54237 21.3232 7.15425 21.3743 6.75 21.375C6.15896 21.375 5.5737 21.2586 5.02766 21.0324C4.48163 20.8061 3.9855 20.4746 3.56762 20.0566C3.14974 19.6386 2.8183 19.1424 2.59222 18.5963C2.36614 18.0502 2.24985 17.4649 2.25 16.8739V13.2188C2.25 12.132 3.132 11.25 4.21875 11.25ZM18.9844 11.25H22.7812C23.868 11.25 24.75 12.132 24.75 13.2188V16.875C24.7502 17.5648 24.5917 18.2454 24.2869 18.8642C23.9822 19.4831 23.5392 20.0236 22.9923 20.4439C22.4453 20.8643 21.8091 21.1533 21.1327 21.2886C20.4563 21.4239 19.7578 21.4019 19.0912 21.2242C19.332 20.7202 19.5064 20.1791 19.6031 19.6121C19.8109 19.6616 20.0265 19.6868 20.25 19.6875C20.9959 19.6875 21.7113 19.3912 22.2387 18.8637C22.7662 18.3363 23.0625 17.6209 23.0625 16.875V13.2188C23.0625 13.1442 23.0329 13.0726 22.9801 13.0199C22.9274 12.9671 22.8558 12.9375 22.7812 12.9375H19.6796C19.6235 12.3177 19.3812 11.7294 18.9844 11.25ZM13.5 3.375C14.3951 3.375 15.2536 3.73058 15.8865 4.36351C16.5194 4.99645 16.875 5.85489 16.875 6.75C16.875 7.64511 16.5194 8.50355 15.8865 9.13649C15.2536 9.76942 14.3951 10.125 13.5 10.125C12.6049 10.125 11.7464 9.76942 11.1135 9.13649C10.4806 8.50355 10.125 7.64511 10.125 6.75C10.125 5.85489 10.4806 4.99645 11.1135 4.36351C11.7464 3.73058 12.6049 3.375 13.5 3.375ZM20.8125 4.5C21.5584 4.5 22.2738 4.79632 22.8012 5.32376C23.3287 5.85121 23.625 6.56658 23.625 7.3125C23.625 8.05842 23.3287 8.77379 22.8012 9.30124C22.2738 9.82868 21.5584 10.125 20.8125 10.125C20.0666 10.125 19.3512 9.82868 18.8238 9.30124C18.2963 8.77379 18 8.05842 18 7.3125C18 6.56658 18.2963 5.85121 18.8238 5.32376C19.3512 4.79632 20.0666 4.5 20.8125 4.5ZM6.1875 4.5C6.93342 4.5 7.64879 4.79632 8.17624 5.32376C8.70368 5.85121 9 6.56658 9 7.3125C9 8.05842 8.70368 8.77379 8.17624 9.30124C7.64879 9.82868 6.93342 10.125 6.1875 10.125C5.44158 10.125 4.72621 9.82868 4.19876 9.30124C3.67132 8.77379 3.375 8.05842 3.375 7.3125C3.375 6.56658 3.67132 5.85121 4.19876 5.32376C4.72621 4.79632 5.44158 4.5 6.1875 4.5ZM13.5 5.0625C13.0524 5.0625 12.6232 5.24029 12.3068 5.55676C11.9903 5.87322 11.8125 6.30245 11.8125 6.75C11.8125 7.19755 11.9903 7.62678 12.3068 7.94324C12.6232 8.25971 13.0524 8.4375 13.5 8.4375C13.9476 8.4375 14.3768 8.25971 14.6932 7.94324C15.0097 7.62678 15.1875 7.19755 15.1875 6.75C15.1875 6.30245 15.0097 5.87322 14.6932 5.55676C14.3768 5.24029 13.9476 5.0625 13.5 5.0625ZM20.8125 6.1875C20.5141 6.1875 20.228 6.30603 20.017 6.517C19.806 6.72798 19.6875 7.01413 19.6875 7.3125C19.6875 7.61087 19.806 7.89702 20.017 8.108C20.228 8.31897 20.5141 8.4375 20.8125 8.4375C21.1109 8.4375 21.397 8.31897 21.608 8.108C21.819 7.89702 21.9375 7.61087 21.9375 7.3125C21.9375 7.01413 21.819 6.72798 21.608 6.517C21.397 6.30603 21.1109 6.1875 20.8125 6.1875ZM6.1875 6.1875C5.88913 6.1875 5.60298 6.30603 5.39201 6.517C5.18103 6.72798 5.0625 7.01413 5.0625 7.3125C5.0625 7.61087 5.18103 7.89702 5.39201 8.108C5.60298 8.31897 5.88913 8.4375 6.1875 8.4375C6.48587 8.4375 6.77202 8.31897 6.983 8.108C7.19397 7.89702 7.3125 7.61087 7.3125 7.3125C7.3125 7.01413 7.19397 6.72798 6.983 6.517C6.77202 6.30603 6.48587 6.1875 6.1875 6.1875Z" fill="#60A5FA"/>
    </svg>
  );
}

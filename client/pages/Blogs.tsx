import { useState, useMemo } from "react";
import ArticleCard from "@/components/Articlecard";
import ArticleGridCard from "@/components/ArticleGridCard";
import Newsletter from "@/components/Newsletter";
import { articles, categories, filterArticles } from "@/lib/articles";
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
          <Link to="/Blogs" className="text-base font-bold leading-6 text-[#374151] hover:text-[#111827] transition-colors">
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

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return filterArticles(articles, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  const featuredArticle = articles.find((article) => article.featured);
  const latestArticles = articles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-[#9BB4C2] py-16 md:py-24 lg:py-40 px-4">
        <div className="max-w-[1920px] mx-auto text-center">
          <div className="flex flex-col items-center gap-6 md:gap-10 lg:gap-15 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Our Blog
              </h1>
              <p className="text-gray-900 text-lg md:text-xl lg:text-[22px] leading-8 px-4">
                Insights, tutorials, and industry perspectives from our team of
                experts
              </p>
            </div>
            <button onClick={() => {
                      const sections = document.querySelectorAll('section');
                      const latestSection = Array.from(sections).find(section => 
                        section.textContent?.includes('Latest Articles')
                      );
                      if (latestSection) {
                        latestSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}  className="bg-[#111827] text-[#DBEAFE] px-8 py-5 rounded font-semibold text-[15px] leading-6 hover:bg-[#1f2937] transition-colors">
              Read Our Latest Thinking
            </button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="w-full border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto py-8 px-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-[13px] md:text-sm leading-5 transition-colors ${
                  selectedCategory === category
                    ? "bg-dark-navy text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="w-full py-8 md:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Input */}
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded w-full md:w-auto md:min-w-[200px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 5.5C9.17392 5.5 7.90215 6.02678 6.96447 6.96447C6.02678 7.90215 5.5 9.17392 5.5 10.5C5.5 11.8261 6.02678 13.0979 6.96447 14.0355C7.90215 14.9732 9.17392 15.5 10.5 15.5C11.8261 15.5 13.0979 14.9732 14.0355 14.0355C14.9732 13.0979 15.5 11.8261 15.5 10.5C15.5 9.17392 14.9732 7.90215 14.0355 6.96447C13.0979 6.02678 11.8261 5.5 10.5 5.5ZM4 10.5C4 8.77609 4.68482 7.12279 5.90381 5.90381C7.12279 4.68482 8.77609 4 10.5 4C12.2239 4 13.8772 4.68482 15.0962 5.90381C16.3152 7.12279 17 8.77609 17 10.5C17 12.2239 16.3152 13.8772 15.0962 15.0962C13.8772 16.3152 12.2239 17 10.5 17C8.77609 17 7.12279 16.3152 5.90381 15.0962C4.68482 13.8772 4 12.2239 4 10.5Z"
                    fill="#A9AEB9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.47 14.47C14.6106 14.3295 14.8013 14.2506 15 14.2506C15.1988 14.2506 15.3894 14.3295 15.53 14.47L19.53 18.4699C19.6037 18.5386 19.6628 18.6214 19.7038 18.7134C19.7448 18.8054 19.7668 18.9047 19.7686 19.0054C19.7704 19.1061 19.7519 19.2062 19.7141 19.2995C19.6764 19.3929 19.6203 19.4778 19.549 19.549C19.4778 19.6202 19.393 19.6764 19.2996 19.7141C19.2062 19.7518 19.1062 19.7703 19.0055 19.7685C18.9048 19.7668 18.8055 19.7447 18.7135 19.7037C18.6215 19.6627 18.5387 19.6036 18.47 19.53L14.47 15.53C14.3296 15.3893 14.2507 15.1987 14.2507 15C14.2507 14.8012 14.3296 14.6106 14.47 14.47Z"
                    fill="#A9AEB9"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search blogs.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-sm leading-5 outline-none placeholder:text-[#A9AEB9]"
                />
              </div>

              {/* Results Count */}
              <div className="text-[22px] leading-8 text-center">
                <span className="text-gray-900">Found </span>
                <span className="text-blue-400 font-bold">
                  {filteredArticles.length}
                </span>
                <span className="text-gray-900"> Blogs</span>
              </div>

              {/* Filter Dropdown */}
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded w-full md:w-auto">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.986 5.42403C14.0077 4.98029 9.99237 4.98029 6.01404 5.42403C5.95305 5.43102 5.89505 5.45425 5.8461 5.4913C5.79715 5.52835 5.75904 5.57786 5.73575 5.63466C5.71246 5.69146 5.70484 5.75347 5.71368 5.81422C5.72253 5.87497 5.74751 5.93223 5.78604 5.98003L9.30304 10.328C10.5628 11.8854 11.2501 13.8279 11.25 15.831V18.72L12.75 19.82V15.83C12.7502 13.8273 13.4375 11.8852 14.697 10.328L18.214 5.98003C18.2526 5.93223 18.2775 5.87497 18.2864 5.81422C18.2952 5.75347 18.2876 5.69146 18.2643 5.63466C18.241 5.57786 18.2029 5.52835 18.154 5.4913C18.105 5.45425 18.047 5.43102 17.986 5.42403ZM5.84804 3.93303C9.93698 3.4761 14.0641 3.4761 18.153 3.93303C19.599 4.09503 20.296 5.79103 19.381 6.92303L15.864 11.271C14.8199 12.5614 14.2501 14.1711 14.25 15.831V21.3C14.2501 21.4387 14.2118 21.5747 14.1392 21.6929C14.0667 21.8111 13.9627 21.9069 13.839 21.9696C13.7153 22.0323 13.5766 22.0594 13.4384 22.048C13.3002 22.0366 13.1678 21.9871 13.056 21.905L10.056 19.705C9.96111 19.6353 9.88393 19.5442 9.83077 19.4391C9.77761 19.334 9.74995 19.2178 9.75004 19.1V15.83C9.75004 14.17 9.18004 12.561 8.13704 11.27L4.62004 6.92403C3.70404 5.79203 4.40004 4.09503 5.84804 3.93303Z"
                    fill="#A9AEB9"
                  />
                </svg>
                <span className="text-sm text-[#A9AEB9] mr-2">All</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#A9AEB9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="w-full py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-gray-900 text-[35px] font-bold leading-10 text-center mb-8 md:mb-14">
              Featured Article
            </h2>
            <ArticleCard article={featuredArticle} />
          </div>
        </section>
      )}

      {/* Latest Articles Section */}
      <section className="w-full py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 text-[35px] font-bold leading-10 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 text-lg leading-7">
              Stay updated with the latest trends and insights in technology and
              business
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <ArticleGridCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

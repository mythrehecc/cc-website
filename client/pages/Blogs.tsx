import { useState, useMemo } from "react";
import ArticleCard from "@/components/ArticleCard";
import ArticleGridCard from "@/components/ArticleGridCard";
import Newsletter from "@/components/Newsletter";
import { articles, categories, filterArticles } from "@/lib/articles";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography, spacing } from "@/utils/typography";
import Footer from "@/components/Footer";

function Header() {
  return (
    <header className="w-full bg-[#DBEAFE] shadow-sm sticky top-0 z-50">
      <div className={spacing.container + " flex items-center justify-between h-16"}>
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F7bcf3b6829fc467ea4a0c747871be1c5?format=webp&width=800" 
            alt="Crestcode Logo" 
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">Crestcode</span>
            <span className="text-xs text-gray-500">(India)</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            Home
          </Link>
          <Link to="/services" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            Services
          </Link>
          <Link to="/AboutUs" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            About Us
          </Link>
          <Link to="/Blogs" className={typography.navActive + " text-gray-900 hover:text-gray-900 transition-colors"}>
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

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return filterArticles(articles, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-[#9BB4C2] py-12 md:py-16">
        <div className={spacing.containerSmall + " text-center"}>
          <div className="flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <h1 className={typography.h1}>Our Blog</h1>
              <p className={typography.pLarge + " px-4"}>
                Insights, tutorials, and industry perspectives from our team of
                experts
              </p>
            </div>
            <Button onClick={() => {
                      const sections = document.querySelectorAll('section');
                      const latestSection = Array.from(sections).find(section => 
                        section.textContent?.includes('Latest Articles')
                      );
                      if (latestSection) {
                        latestSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>
              View Latest Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="w-full border-b border-gray-200">
        <div className={spacing.container + " py-6"}>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
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
      <section className="w-full py-6 md:py-8">
        <div className={spacing.container}>
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Input */}
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded w-full md:w-auto md:min-w-[200px]">
                <svg
                  width="20"
                  height="20"
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
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.47 14.47C14.6106 14.3295 14.8013 14.2506 15 14.2506C15.1988 14.2506 15.3894 14.3295 15.53 14.47L19.53 18.4699C19.6037 18.5386 19.6628 18.6214 19.7038 18.7134C19.7448 18.8054 19.7668 18.9047 19.7686 19.0054C19.7704 19.1061 19.7519 19.2062 19.7141 19.2995C19.6764 19.3929 19.6203 19.4778 19.549 19.549C19.4778 19.6202 19.393 19.6764 19.2996 19.7141C19.2062 19.7518 19.1062 19.7703 19.0055 19.7685C18.9048 19.7668 18.8055 19.7447 18.7135 19.7037C18.6215 19.6627 18.5387 19.6036 18.47 19.53L14.47 15.53C14.3296 15.3893 14.2507 15.1987 14.2507 15C14.2507 14.8012 14.3296 14.6106 14.47 14.47ZM5.84804 3.93303C9.93698 3.4761 14.0641 3.4761 18.153 3.93303C19.599 4.09503 20.296 5.79103 19.381 6.92303L15.864 11.271C14.8199 12.5614 14.2501 14.1711 14.25 15.831V21.3C14.2501 21.4387 14.2118 21.5747 14.1392 21.6929C14.0667 21.8111 13.9627 21.9069 13.839 21.9696C13.7153 22.0323 13.5766 22.0594 13.4384 22.048C13.3002 22.0366 13.1678 21.9871 13.056 21.905L10.056 19.705C9.96111 19.6353 9.88393 19.5442 9.83077 19.4391C9.77761 19.334 9.74995 19.2178 9.75004 19.1V15.83C9.75004 14.17 9.18004 12.561 8.13704 11.27L4.62004 6.92403C3.70404 5.79203 4.40004 4.09503 5.84804 3.93303Z"
                    fill="#A9AEB9"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search blogs.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={typography.button + " flex-1 outline-none placeholder:text-gray-500"}
                />
              </div>

              {/* Results Count */}
              <div className={typography.h4 + " text-center"}>
                <span className="text-gray-900">Found </span>
                <span className="text-blue-400 font-bold">
                  {filteredArticles.length}
                </span>
                <span className="text-gray-900"> Blogs</span>
              </div>

              {/* Filter Dropdown */}
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded w-full md:w-auto">
                <svg
                  width="20"
                  height="20"
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
                <span className={typography.button + " text-gray-500 mr-2"}>All</span>
                <svg
                  width="20"
                  height="20"
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

      {/* Latest Articles Section */}
      <section className="w-full py-8 md:py-12 bg-gray-50">
        <div className={spacing.container}>
          <div className="text-center mb-8">
            <h2 className={typography.h2 + " mb-3"}>Latest Articles</h2>
            <p className={typography.p}>
              Stay updated with latest trends and insights in technology and
              business
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredArticles.map((article) => (
                <ArticleGridCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className={typography.p}>
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

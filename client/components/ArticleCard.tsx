import { Article } from "../lib/articles";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/blogs/${article.id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="flex flex-col lg:flex-row flex-1">
          {/* Image */}
          <div className="relative lg:w-1/2">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 lg:h-full object-cover"
          />
          {article.featured && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-[13px] leading-5 px-3 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-[13px] leading-5 mb-4">
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.39071 1.72404C8.14072 1.47397 7.80163 1.33345 7.44804 1.33337H2.66671C2.31309 1.33337 1.97395 1.47385 1.7239 1.7239C1.47385 1.97395 1.33337 2.31309 1.33337 2.66671V7.44804C1.33345 7.80163 1.47397 8.14072 1.72404 8.39071L7.52671 14.1934C7.82972 14.4945 8.23954 14.6635 8.66671 14.6635C9.09388 14.6635 9.5037 14.4945 9.80671 14.1934L14.1934 9.80671C14.4945 9.5037 14.6635 9.09388 14.6635 8.66671C14.6635 8.23954 14.4945 7.82972 14.1934 7.52671L8.39071 1.72404Z"
                  stroke="#4B5563"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.99996 5.33329C5.18405 5.33329 5.33329 5.18405 5.33329 4.99996C5.33329 4.81586 5.18405 4.66663 4.99996 4.66663C4.81586 4.66663 4.66663 4.81586 4.66663 4.99996C4.66663 5.18405 4.81586 5.33329 4.99996 5.33329Z"
                  fill="#4B5563"
                  stroke="#4B5563"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                />
                <path
                  d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
                  stroke="#4B5563"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 6.66663H14"
                  stroke="#4B5563"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z"
                  stroke="#4B5563"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 4V8L10.6667 9.33333"
                  stroke="#4B5563"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-gray-900 text-[30px] font-bold leading-9 mb-4">
            {article.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-[15px] leading-6 mb-6">
            {article.description}
          </p>

          {/* Author and Read More */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600 text-base leading-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.384 12.5 12.5 12.5H7.49996C6.6159 12.5 5.76806 12.8512 5.14294 13.4763C4.51782 14.1014 4.16663 14.9493 4.16663 15.8333V17.5"
                  stroke="#9CA3AF"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
                  stroke="#9CA3AF"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{article.author}</span>
            </div>

            <Link
              to={`/article/${article.id}`}
              className="flex items-center gap-2 text-blue-600 text-[15px] leading-6 hover:text-blue-700 transition-colors"
            >
              <span>Read More</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33337 8H12.6667"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 3.33337L12.6667 8.00004L8 12.6667"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

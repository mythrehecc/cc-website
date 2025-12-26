import { Article } from "@/lib/articles";
import { Link } from "react-router-dom";

interface ArticleGridCardProps {
  article: Article;
}

export default function ArticleGridCard({ article }: ArticleGridCardProps) {
  return (
    <Link to={`/blogs/${article.id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Image with category badge */}
        <div className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="text-blue-600 hover:text-blue-700 text-[13px] leading-5 font-medium">
              Read more →
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-3 text-gray-500 text-[11px] leading-4 mb-3">
            <div className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 1V3"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 1V3"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 5H10.5"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 3V6L8 7"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-gray-900 text-base font-bold leading-7 mb-3 min-h-[48px]">
            {article.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-[15px] leading-6 mb-4 min-h-[64px]">
            {article.description}
          </p>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {article.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-gray-200 rounded-sm text-gray-600 text-[10px] leading-5 font-light"
                >
                  {tag}
                </span>
              ))}
              {article.tags.length > 2 && (
                <span className="text-[#969DBA] text-[10px] leading-5 font-light">
                  +{article.tags.length - 2} more
                </span>
              )}
            </div>
          )}

          {/* Author */}
          <div className="flex items-center gap-2 text-gray-600 text-sm leading-5 pt-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6666 14V12.6667C12.6666 11.9594 12.3857 11.2811 11.8856 10.781C11.3855 10.281 10.7072 10 9.99998 10H5.99998C5.29274 10 4.61446 10.281 4.11436 10.781C3.61426 11.2811 3.33331 11.9594 3.33331 12.6667V14"
                stroke="#9CA3AF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99998 7.33333C9.47274 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47274 2 7.99998 2C6.52722 2 5.33331 3.19391 5.33331 4.66667C5.33331 6.13943 6.52722 7.33333 7.99998 7.33333Z"
                stroke="#9CA3AF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{article.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
  tags?: string[];
}

export const articles: Article[] = [
  {
    id: "2",
    title: "Future of AI in Product Development: Transforming Ideas into Reality",
    description:
      "Artificial Intelligence is no longer a distant concept, it is becoming an integral part of modern product development...",
    category: "Technology",
    date: "March 12, 2025",
    readTime: "4 min read",
    author: "Ahmed Faraz",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/341ffcb39c1ea6dc1bfb013c1d6e06b51c7ef594?width=866",
    tags: ["#AI", "#Product Development"],
  },
  {
    id: "3",
    title: "Building Successful MVP: A Complete Guide for Entrepreneurs",
    description:
      "Every successful product begins with a strong foundation, and for entrepreneurs, that foundation is the Minimum Viable Product...",
    category: "Startups",
    date: "March 10, 2025",
    readTime: "3 min read",
    author: "Moin Khan",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4e6f3622fb95fbf98e2217636acd7d11e238ec81?width=768",
    tags: ["#MVP", "#Entreprenuership"],
  },
  {
    id: "4",
    title: "Digital Transformation Strategies for Modern Businesses",
    description:
      "Digital transformation is no longer an optional choice for modern businesses. It has become a necessary strategy to...",
    category: "Development",
    date: "March 5, 2025",
    readTime: "3 min read",
    author: "Karthik Raja",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/3af6cf12bf6b2d85406c75b474c9cd661c6c199e?width=768",
    tags: ["#Digital Transformation", "#Business Strategy"],
  },
  {
    id: "5",
    title: "User Experience Design: Creating Products People Love",
    description:
      "User Experience design, often called UX design, focuses on creating products that are intuitive, enjoyable, and valuable...",
    category: "Business",
    date: "March 3, 2025",
    readTime: "3 min read",
    author: "Tulasi Divya",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/6f0836e675c5a9e7461130a04f8ec665727d272c?width=768",
    tags: ["#UX Design", "#User Experience"],
  },
  {
    id: "6",
    title: "Startup Funding: Navigating the Investment Landscape",
    description:
      "Essential security measures every development team should implement when building cloud-native applications.",
    category: "Technology",
    date: "February 28, 2025",
    readTime: "3 min read",
    author: "Swathi",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9846548bbfb30a358de3c80b9a564cfaf6ed736f?width=768",
    tags: ["#Investment"],
  },
  {
    id: "7",
    title: "Agile Development Methodologies for Tech Teams",
    description:
      "Agile development has transformed the way tech teams plan, build, and deliver products. It emphasizes adaptability",
    category: "Startups",
    date: "February 25, 2025",
    readTime: "3 min read",
    author: "Vinitha",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/55b93b68fa23ebf2cc55d99bf9903b29effb71e3?width=768",
    tags: ["#Agile", "#Software Development"],
  },
  {
    id: "8",
    title: "Cloud Computing: Transforming Business Infrastructure",
    description:
      "loud computing has revolutionized the way businesses manage and scale their operations. It offers a flexible and cost...",
    category: "Technology",
    date: "March 1, 2025",
    readTime: "3 min read",
    author: "Satheesh",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c430a08b59ba8f33dedaeae5575ebe15a7c1787c?width=720",
    tags: ["#Cloud Computing", "#infrastructure"],
  },
  {
    id: "9",
    title: "Data-Driven Decision Making in Modern Business",
    description:
      "Data-driven decision making has become an essential approach in today's competitive business world. Organizations ",
    category: "Business",
    date: "February 28, 2025",
    readTime: "3 min read",
    author: "Mythrehe",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/161541e4b3ef9ed402284d9f4f479f7625a719b3?width=768",
    tags: ["#Data Analytics", "#Business Intelligence"],
  },
];

export const categories = [
  "All",
  "Technology",
  "Startups",
  "Design",
  "Development",
  "Business",
  "AI/ML",
];

export function filterArticles(
  articles: Article[],
  category: string,
  searchQuery: string
): Article[] {
  let filtered = articles;

  // Filter by category
  if (category !== "All") {
    filtered = filtered.filter((article) => article.category === category);
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query)
    );
  }

  return filtered;
}

import { useParams } from "react-router-dom";
import { articles } from "@/lib/articles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = articles.find(article => article.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p className="text-lg mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/blogs">Back to Blogs</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto py-16 px-4">
        <div className="mb-8">
          <Link to="/blogs" className="text-blue-600 hover:underline">
            &larr; Back to all articles
          </Link>
        </div>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            {post.description}
          </p>
          {/* Add more content here if needed */}
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Ready to start your project?</h2>
            <p className="mb-6">
              Get in touch with our team to discuss how we can help bring your ideas to life.
            </p>
            <Button asChild>
              <Link to="/Getintouch">Contact Us</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
}

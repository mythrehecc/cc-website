import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
  };

  return (
    <section className="w-full bg-[#9BB4C2] py-16 md:py-20 px-4 shadow-xl">
      <div className="max-w-[1920px] mx-auto text-center">
        <h2 className="text-gray-900 text-[35px] font-bold leading-10 mb-4">
          Stay Updated with Our Latest Insights
        </h2>
        <p className="text-gray-900 text-lg leading-7 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest articles, tutorials,
          and industry insights delivered directly to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg text-[15px] leading-normal text-gray-700 placeholder:text-gray-500 border-none outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
          <button
            type="submit"
            className="bg-[#111827] text-[#DBEAFE] px-8 py-3 rounded font-semibold text-[15px] leading-6 hover:bg-[#1f2937] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
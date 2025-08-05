import React, { useState } from "react";

const Blog: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail("");

      // Reset success message after 8 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 8000);
    }, 1000);
  };

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Perfect Running Shoes",
      excerpt:
        "Finding the right running shoes can make all the difference in your performance and comfort. Learn about arch types, cushioning levels, and fit considerations.",
      category: "Running",
      author: "Sarah Johnson",
      date: "July 25, 2025",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Shoe Care Tips for Longevity",
      excerpt:
        "Learn how to maintain your shoes properly to extend their lifespan. From cleaning techniques to storage solutions, we've got you covered.",
      category: "Care & Maintenance",
      author: "Mike Chen",
      date: "July 22, 2025",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 3,
      title: "2025 Shoe Trends: What's Hot This Year",
      excerpt:
        "Discover the latest footwear trends that are dominating the fashion scene. From sustainable materials to bold colors, see what's in vogue.",
      category: "Fashion Trends",
      author: "Emma Davis",
      date: "July 20, 2025",
      readTime: "6 min read",
      featured: true,
    },
    {
      id: 4,
      title: "Casual vs. Athletic: When to Wear What",
      excerpt:
        "Understanding the difference between casual and athletic shoes can help you make better purchasing decisions and improve your comfort.",
      category: "Style Guide",
      author: "Alex Thompson",
      date: "July 18, 2025",
      readTime: "3 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Sustainable Footwear: Eco-Friendly Options",
      excerpt:
        "Explore environmentally conscious shoe options that don't compromise on style or comfort. Learn about sustainable materials and brands.",
      category: "Sustainability",
      author: "Lisa Park",
      date: "July 15, 2025",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 6,
      title: "Breaking in New Shoes: A Complete Guide",
      excerpt:
        "New shoes can be uncomfortable at first. Here's how to break them in properly without damaging the material or causing blisters.",
      category: "Care & Maintenance",
      author: "David Wilson",
      date: "July 12, 2025",
      readTime: "4 min read",
      featured: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Running":
        return "bg-blue-100 text-blue-800";
      case "Care & Maintenance":
        return "bg-green-100 text-green-800";
      case "Fashion Trends":
        return "bg-purple-100 text-purple-800";
      case "Style Guide":
        return "bg-orange-100 text-orange-800";
      case "Sustainability":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Stay updated with the latest trends, shoe care tips, and industry
            insights
          </p>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-600 font-semibold text-sm">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {post.author}
                        </p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* All Posts */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-600 font-semibold text-xs">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Stay Updated with Our Newsletter
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest shoe trends, care tips, and exclusive offers
            delivered to your inbox.
          </p>

          {isSubscribed ? (
            <div className="max-w-md mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-center mb-3">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  Successfully Subscribed!
                </h4>
                <p className="text-green-700">
                  Thank you for subscribing to our newsletter. You will receive
                  updates about the latest shoe trends, care tips, and exclusive
                  offers via email.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;

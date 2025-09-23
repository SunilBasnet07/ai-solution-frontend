'use client';

import { getAllBlogs } from '@/api/blog';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Search,
  Filter,
  Tag,
  Clock,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { get } from 'react-hook-form';

const Blog = () => {
  const [blogPost,setBlogPosts]= useState([])
  
useEffect(()=>{
  getAllBlogs().then((response)=>{
   
setBlogPosts(response)
  }).catch((error=>console.log(error?.response?.data)))
},[])
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Discover the latest AI trends that are reshaping how businesses operate and compete in the digital age.",
      content: "Artificial Intelligence continues to evolve at a rapid pace, bringing new opportunities and challenges for businesses worldwide...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI Trends",
      image: "AI-Trends",
      featured: true
    },
    {
      id: 2,
      title: "Machine Learning vs Deep Learning: What's the Difference?",
      excerpt: "A comprehensive guide to understanding the key differences between machine learning and deep learning approaches.",
      content: "While both machine learning and deep learning are subsets of artificial intelligence, they have distinct characteristics...",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Machine Learning",
      image: "ML-DL",
      featured: false
    },
    {
      id: 3,
      title: "How to Implement AI in Your Small Business",
      excerpt: "Practical steps for small businesses to start their AI journey without breaking the bank.",
      content: "Small businesses often think AI is only for large corporations, but that's not the case anymore...",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Business",
      image: "Small-Business",
      featured: false
    },
    {
      id: 4,
      title: "Data Privacy in the Age of AI: Best Practices",
      excerpt: "Essential guidelines for protecting customer data while leveraging AI technologies.",
      content: "As AI becomes more prevalent, data privacy concerns are at an all-time high...",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Security",
      image: "Data-Privacy",
      featured: false
    },
    {
      id: 5,
      title: "ROI of AI Implementation: Measuring Success",
      excerpt: "Learn how to measure and maximize the return on investment from your AI initiatives.",
      content: "Measuring AI ROI can be challenging, but it's crucial for justifying continued investment...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Business",
      image: "AI-ROI",
      featured: false
    },
    {
      id: 6,
      title: "Natural Language Processing: Applications in Business",
      excerpt: "Explore how NLP is transforming customer service, content creation, and business operations.",
      content: "Natural Language Processing has evolved from a research concept to a practical business tool...",
      author: "Michael Chen",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "NLP",
      image: "NLP-Business",
      featured: false
    }
  ];

  const categories = [
    "All",
    "AI Trends",
    "Machine Learning",
    "Business",
    "Security",
    "NLP"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-Poppins-ExtraBold text-gray-900 mb-6">
              AI <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Stay updated with the latest trends, insights, and best practices in artificial intelligence. 
              Our expert team shares knowledge to help you navigate the AI landscape.
            </p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto relative"
            >
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-Poppins-SemiBold transition-all duration-300 ${
                  category === "All" 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-blue-600 font-Poppins-SemiBold">Featured Article</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-gray-900 mb-4">
              Latest Insights
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 mr-2" />
                  <span className="text-blue-100">{featuredPost.category}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-Poppins-ExtraBold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-Poppins-SemiBold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="bg-white/10 rounded-xl p-8 text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-Poppins-ExtraBold">{featuredPost.image}</span>
                </div>
                <p className="text-blue-100">Featured Article</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Explore our collection of AI insights and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPost?.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  {/* <span className="text-2xl font-Poppins-ExtraBold text-gray-600">{post.image}</span> */}
                  <Image src={post?.imageUrl} height={500} width={500} alt={post?.title}  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 text-sm font-Poppins-SemiBold">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-Poppins-SemiBold text-gray-900 mb-3 line-clamp-2">
                    {post?.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post?.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post?.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-600 hover:text-blue-700 font-Poppins-SemiBold flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-Poppins-SemiBold hover:shadow-lg transition-all duration-300"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest AI insights and industry updates.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-Poppins-SemiBold hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

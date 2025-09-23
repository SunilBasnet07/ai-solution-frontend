'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Eye,
  Trash2,
  Calendar,
  User,
  Tag,
  Clock,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Upload,
  Image,
  Link,
  Save,
  Send,
  MessageSquare
} from 'lucide-react';
import { getAllBlogs } from '@/api/blog';
import { useDispatch } from 'react-redux';
import { setBlogStatus } from '@/redux/blog/blogSlice';

const BlogManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [blogPosts,setBlogPosts]= useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    getAllBlogs().then((response)=>{
     
  setBlogPosts(response)
    }).catch((error=>console.log(error?.response?.data)))
  },[])
  

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: 'The Future of AI in Business: Trends to Watch in 2024',
  //     excerpt: 'Discover the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
  //     content: 'Artificial Intelligence continues to evolve at a rapid pace, bringing new opportunities and challenges for businesses worldwide...',
  //     author: 'Dr. Sarah Johnson',
  //     status: 'published',
  //     category: 'AI Trends',
  //     tags: ['AI', 'Business', 'Trends', '2024'],
  //     publishDate: '2024-01-15',
  //     lastModified: '2024-01-15',
  //     readTime: '5 min read',
  //     views: 1250,
  //     likes: 89,
  //     comments: 23,
  //     featured: true,
  //     image: '/images/blog-ai-trends.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'Machine Learning vs Deep Learning: What\'s the Difference?',
  //     excerpt: 'A comprehensive guide to understanding the key differences between machine learning and deep learning approaches.',
  //     content: 'While both machine learning and deep learning are subsets of artificial intelligence, they have distinct characteristics...',
  //     author: 'Michael Chen',
  //     status: 'published',
  //     category: 'Machine Learning',
  //     tags: ['Machine Learning', 'Deep Learning', 'AI', 'Education'],
  //     publishDate: '2024-01-12',
  //     lastModified: '2024-01-12',
  //     readTime: '7 min read',
  //     views: 980,
  //     likes: 67,
  //     comments: 15,
  //     featured: false,
  //     image: '/images/blog-ml-dl.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'How to Implement AI in Your Small Business',
  //     excerpt: 'Practical steps for small businesses to start their AI journey without breaking the bank.',
  //     content: 'Small businesses often think AI is only for large corporations, but that\'s not the case anymore...',
  //     author: 'Emily Rodriguez',
  //     status: 'draft',
  //     category: 'Business',
  //     tags: ['Small Business', 'AI Implementation', 'Cost-Effective'],
  //     publishDate: null,
  //     lastModified: '2024-01-18',
  //     readTime: '6 min read',
  //     views: 0,
  //     likes: 0,
  //     comments: 0,
  //     featured: false,
  //     image: '/images/blog-small-business.jpg'
  //   },
  //   {
  //     id: 4,
  //     title: 'Data Privacy in the Age of AI: Best Practices',
  //     excerpt: 'Essential guidelines for protecting customer data while leveraging AI technologies.',
  //     content: 'As AI becomes more prevalent, data privacy concerns are at an all-time high...',
  //     author: 'David Kim',
  //     status: 'scheduled',
  //     category: 'Security',
  //     tags: ['Data Privacy', 'AI Ethics', 'Security', 'Compliance'],
  //     publishDate: '2024-01-25',
  //     lastModified: '2024-01-19',
  //     readTime: '8 min read',
  //     views: 0,
  //     likes: 0,
  //     comments: 0,
  //     featured: false,
  //     image: '/images/blog-data-privacy.jpg'
  //   },
  //   {
  //     id: 5,
  //     title: 'ROI of AI Implementation: Measuring Success',
  //     excerpt: 'Learn how to measure and maximize the return on investment from your AI initiatives.',
  //     content: 'Measuring AI ROI can be challenging, but it\'s crucial for justifying continued investment...',
  //     author: 'Dr. Sarah Johnson',
  //     status: 'published',
  //     category: 'Business',
  //     tags: ['ROI', 'AI Investment', 'Business Metrics', 'Success'],
  //     publishDate: '2024-01-05',
  //     lastModified: '2024-01-05',
  //     readTime: '9 min read',
  //     views: 2100,
  //     likes: 156,
  //     comments: 34,
  //     featured: true,
  //     image: '/images/blog-ai-roi.jpg'
  //   }
  // ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || post.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const AddPostModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Create New Blog Post</h3>
          <button
            onClick={() => setShowAddModal(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <XCircle className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter post title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="AI Trends">AI Trends</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Business">Business</option>
                <option value="Security">Security</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter post excerpt"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              rows={12}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write your blog post content here..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter tags separated by commas"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image URL</label>
              <input
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter image URL"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-700">Featured post</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-700">Allow comments</span>
            </label>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Publish
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-1">Create and manage your blog content</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900">{blogPosts.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Published</p>
              <p className="text-2xl font-bold text-gray-900">{blogPosts.filter(p => p.status === 'published').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Drafts</p>
              <p className="text-2xl font-bold text-gray-900">{blogPosts.filter(p => p.status === 'draft').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">{blogPosts.reduce((sum, post) => sum + post.views, 0)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Post Image */}
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <Image className="w-12 h-12 text-gray-400" />
            </div>

            {/* Post Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(post.status)}`}>
                  {post.status}
                </span>
                {post.featured && (
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center">
                  <User className="w-3 h-3 mr-1" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.publishDate || 'Not published'}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  {post.views} views
                </span>
                <span className="flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {post.likes} likes
                </span>
                <span className="flex items-center">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  {post.comments} comments
                </span>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {post.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-xs text-gray-500">+{post.tags.length - 3} more</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{post.category}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="View Post"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPost(post);
                      setShowEditModal(true);
                    }}
                    className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Edit Post"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Post">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredPosts.length}</span> of{' '}
          <span className="font-medium">{blogPosts.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-2 border border-gray-300 text-gray-500 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">2</button>
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">3</button>
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      {/* Modals */}
      {showAddModal && <AddPostModal />}
    </div>
  );
};

export default BlogManagement;

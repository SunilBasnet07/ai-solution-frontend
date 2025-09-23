'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MessageSquare,
  FileText,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  Activity,
  Target,
  Award,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  MousePointer,
  Heart,
  Share2,
  Bookmark,
  Star,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('overview');

  const stats = {
    totalUsers: 12450,
    newUsers: 1250,
    totalViews: 45600,
    pageViews: 78900,
    bounceRate: 42.5,
    avgSessionDuration: '3:24',
    conversionRate: 8.7,
    revenue: 125000,
    blogPosts: 45,
    totalContacts: 890,
    newContacts: 67,
    responseTime: '2.3h',
    satisfactionScore: 4.8
  };

  const chartData = {
    users: [
      { date: '2024-01-01', value: 1200 },
      { date: '2024-01-02', value: 1350 },
      { date: '2024-01-03', value: 1100 },
      { date: '2024-01-04', value: 1450 },
      { date: '2024-01-05', value: 1600 },
      { date: '2024-01-06', value: 1800 },
      { date: '2024-01-07', value: 1950 }
    ],
    pageViews: [
      { date: '2024-01-01', value: 8500 },
      { date: '2024-01-02', value: 9200 },
      { date: '2024-01-03', value: 7800 },
      { date: '2024-01-04', value: 10500 },
      { date: '2024-01-05', value: 11200 },
      { date: '2024-01-06', value: 12800 },
      { date: '2024-01-07', value: 13500 }
    ],
    revenue: [
      { date: '2024-01-01', value: 8500 },
      { date: '2024-01-02', value: 9200 },
      { date: '2024-01-03', value: 7800 },
      { date: '2024-01-04', value: 10500 },
      { date: '2024-01-05', value: 11200 },
      { date: '2024-01-06', value: 12800 },
      { date: '2024-01-07', value: 13500 }
    ]
  };

  const topPages = [
    { page: '/', views: 12500, bounceRate: 38.2, avgTime: '4:12' },
    { page: '/about', views: 8900, bounceRate: 45.1, avgTime: '3:45' },
    { page: '/services', views: 7600, bounceRate: 42.8, avgTime: '5:30' },
    { page: '/blog', views: 6800, bounceRate: 35.9, avgTime: '6:15' },
    { page: '/contact', views: 4200, bounceRate: 48.3, avgTime: '2:45' }
  ];

  const topBlogPosts = [
    { title: 'The Future of AI in Business', views: 2500, likes: 89, comments: 23, shares: 15 },
    { title: 'Machine Learning vs Deep Learning', views: 1800, likes: 67, comments: 15, shares: 8 },
    { title: 'How to Implement AI in Your Business', views: 1600, likes: 45, comments: 12, shares: 6 },
    { title: 'Data Privacy in the Age of AI', views: 1400, likes: 38, comments: 9, shares: 4 },
    { title: 'ROI of AI Implementation', views: 1200, likes: 56, comments: 18, shares: 11 }
  ];

  const deviceStats = [
    { device: 'Desktop', percentage: 65, count: 28500 },
    { device: 'Mobile', percentage: 28, count: 12300 },
    { device: 'Tablet', percentage: 7, count: 3100 }
  ];

  const trafficSources = [
    { source: 'Organic Search', percentage: 45, count: 20250 },
    { source: 'Direct', percentage: 25, count: 11250 },
    { source: 'Social Media', percentage: 15, count: 6750 },
    { source: 'Email', percentage: 10, count: 4500 },
    { source: 'Referral', percentage: 5, count: 2250 }
  ];

  const recentActivity = [
    { type: 'user', message: 'New user registration: john.doe@example.com', time: '2 minutes ago', icon: Users },
    { type: 'contact', message: 'New contact form submission from Jane Smith', time: '5 minutes ago', icon: MessageSquare },
    { type: 'blog', message: 'Blog post "AI Trends 2024" published', time: '1 hour ago', icon: FileText },
    { type: 'analytics', message: 'Daily analytics report generated', time: '2 hours ago', icon: BarChart3 },
    { type: 'user', message: 'User profile updated: mike.chen@example.com', time: '3 hours ago', icon: Users }
  ];

  const StatCard = ({ title, value, change, changeType, icon: Icon, color = 'blue' }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              {changeType === 'increase' ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                {change}
              </span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </motion.div>
  );

  const SimpleChart = ({ data, color = 'blue' }) => (
    <div className="h-32 flex items-end space-x-1">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ height: 0 }}
          animate={{ height: `${(item.value / Math.max(...data.map(d => d.value))) * 100}%` }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`bg-${color}-500 rounded-t flex-1 min-h-[4px]`}
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor your website performance and user engagement</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          change="+12.5%"
          changeType="increase"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Page Views"
          value={stats.pageViews.toLocaleString()}
          change="+8.3%"
          changeType="increase"
          icon={Eye}
          color="green"
        />
        <StatCard
          title="Bounce Rate"
          value={`${stats.bounceRate}%`}
          change="-2.1%"
          changeType="increase"
          icon={Activity}
          color="yellow"
        />
        <StatCard
          title="Conversion Rate"
          value={`${stats.conversionRate}%`}
          change="+1.8%"
          changeType="increase"
          icon={Target}
          color="purple"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Users Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">User Growth</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">New Users</span>
            </div>
          </div>
          <SimpleChart data={chartData.users} color="blue" />
          <div className="mt-4 flex justify-between text-xs text-gray-500">
            {chartData.users.map((item, index) => (
              <span key={index}>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            ))}
          </div>
        </div>

        {/* Page Views Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Page Views</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Total Views</span>
            </div>
          </div>
          <SimpleChart data={chartData.pageViews} color="green" />
          <div className="mt-4 flex justify-between text-xs text-gray-500">
            {chartData.pageViews.map((item, index) => (
              <span key={index}>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Avg. Session Duration"
          value={stats.avgSessionDuration}
          change="+15.2%"
          changeType="increase"
          icon={Clock}
          color="indigo"
        />
        <StatCard
          title="New Contacts"
          value={stats.newContacts}
          change="+23.1%"
          changeType="increase"
          icon={MessageSquare}
          color="pink"
        />
        <StatCard
          title="Satisfaction Score"
          value={stats.satisfactionScore}
          change="+0.3"
          changeType="increase"
          icon={Star}
          color="yellow"
        />
      </div>

      {/* Top Pages and Blog Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Pages</h3>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{page.page}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {page.views.toLocaleString()}
                    </span>
                    <span>{page.bounceRate}% bounce</span>
                    <span>{page.avgTime} avg</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-900">#{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top Blog Posts */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Blog Posts</h3>
          <div className="space-y-4">
            {topBlogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 bg-gray-50 rounded-lg"
              >
                <p className="font-medium text-gray-900 line-clamp-2">{post.title}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views}
                  </span>
                  <span className="flex items-center">
                    <Heart className="w-3 h-3 mr-1" />
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    {post.comments}
                  </span>
                  <span className="flex items-center">
                    <Share2 className="w-3 h-3 mr-1" />
                    {post.shares}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Device and Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Statistics</h3>
          <div className="space-y-4">
            {deviceStats.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  {device.device === 'Desktop' && <Monitor className="w-5 h-5 text-gray-600" />}
                  {device.device === 'Mobile' && <Smartphone className="w-5 h-5 text-gray-600" />}
                  {device.device === 'Tablet' && <Tablet className="w-5 h-5 text-gray-600" />}
                  <span className="font-medium text-gray-900">{device.device}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${device.percentage}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                      className="bg-blue-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 w-12 text-right">
                    {device.percentage}%
                  </span>
                  <span className="text-sm text-gray-500 w-16 text-right">
                    {device.count.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">{source.source}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${source.percentage}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                      className="bg-green-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 w-12 text-right">
                    {source.percentage}%
                  </span>
                  <span className="text-sm text-gray-500 w-16 text-right">
                    {source.count.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <activity.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{activity.message}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

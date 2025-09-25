'use client';

import { useEffect, useState } from 'react';
import AddBlogPostModal from '@/components/AddBlogPostModal';
import EditBlogPostModal from '@/components/EditBlogPostModal';
import PasswordChangeModal from '@/components/PasswordChangeModal';
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  BarChart3,
  Calendar,
  Bell,
  Search,
  Menu,
  X,
  Settings,
  User,
  Mail,
  FileText,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Edit,
  Trash2,
  Eye,
  Send,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  Tag,
  Calendar as CalendarIcon,
  User as UserIcon
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { deleteBlog, getAllBlogs } from '@/api/blog';
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogStatus } from '@/redux/blog/blogSlice';
import { deleteContact, getAllContacts } from '@/api/contact';
import { setContactStatus } from '@/redux/contact/contactSlice';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [blogPosts, setBlogPosts] = useState([])
  const router = useRouter();
  const [contacts,setContacts]= useState([]);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.blog)
  const { contactStatus } = useSelector((state) => state.contact)
console.log(contactStatus)
  useEffect(() => {
    getAllBlogs().then((response) => {

      setBlogPosts(response)
    }).catch((error => console.log(error?.response?.data)))
  }, [status])

  async function handleDelete(id) {
    try {
      await deleteBlog(id)
      toast.success("Blog deleted", {
        autoClose: 750,
      })


    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  useEffect(()=>{
    getAllContacts().then((response)=>{
      setContacts(response)
    }).catch((error=>console.log(error?.response?.data)))
  },[contactStatus])

  async function handleDeleteContact(id) {
    try {
      await deleteContact(id)
      toast.success("Contact deleted", {
        autoClose: 750,
      })
    
    


    } catch (error) {
      console.log(error?.response?.data)
    }
  }


  const stats = [
    {
      title: 'Total Blog Posts',
      value: blogPosts.length.toString(),
      change: '+3',
      trend: 'up',
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Total Contacts',
      value: contacts.length.toString(),
      change: '+12',
      trend: 'up',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'New Messages',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Response Rate',
      value: '94%',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600'
    },
  ];

  // Chart data
  const userGrowthData = [
    { name: 'Jan', users: 1200, views: 8500 },
    { name: 'Feb', users: 1350, views: 9200 },
    { name: 'Mar', users: 1100, views: 7800 },
    { name: 'Apr', users: 1450, views: 10500 },
    { name: 'May', users: 1600, views: 11200 },
    { name: 'Jun', users: 1800, views: 12800 },
    { name: 'Jul', users: 1950, views: 13500 }
  ];

  const blogPerformanceData = [
    { name: 'AI Trends', posts: 8, views: 12500 },
    { name: 'Technology', posts: 6, views: 9800 },
    { name: 'Analytics', posts: 4, views: 7200 },
    { name: 'Automation', posts: 5, views: 8900 },
    { name: 'Business', posts: 3, views: 5600 }
  ];

  const contactSourcesData = [
    { name: 'Website', value: 45, color: '#3B82F6' },
    { name: 'Social Media', value: 25, color: '#10B981' },
    { name: 'Email', value: 15, color: '#F59E0B' },
    { name: 'Referral', value: 10, color: '#EF4444' },
    { name: 'Other', value: 5, color: '#8B5CF6' }
  ];

  const performanceData = [
    { name: 'Week 1', performance: 85, engagement: 72 },
    { name: 'Week 2', performance: 92, engagement: 78 },
    { name: 'Week 3', performance: 88, engagement: 81 },
    { name: 'Week 4', performance: 95, engagement: 85 },
    { name: 'Week 5', performance: 90, engagement: 88 },
    { name: 'Week 6', performance: 97, engagement: 92 }
  ];

  // const blogPosts = [
  //   { 
  //     id: 1, 
  //     title: 'The Future of AI in Business', 
  //     status: 'published', 
  //     date: '2024-01-15', 
  //     views: 1250,
  //     category: 'AI Trends'
  //   },
  //   { 
  //     id: 2, 
  //     title: 'Machine Learning Best Practices', 
  //     status: 'draft', 
  //     date: '2024-01-14', 
  //     views: 0,
  //     category: 'Technology'
  //   },
  //   { 
  //     id: 3, 
  //     title: 'Data Analytics for Startups', 
  //     status: 'published', 
  //     date: '2024-01-12', 
  //     views: 890,
  //     category: 'Analytics'
  //   },
  //   { 
  //     id: 4, 
  //     title: 'Automation Strategies', 
  //     status: 'published', 
  //     date: '2024-01-10', 
  //     views: 2100,
  //     category: 'Automation'
  //   },
  // ];

  // const contacts = [
  //   { 
  //     id: 1, 
  //     name: 'Sarah Johnson', 
  //     email: 'sarah.j@email.com', 
  //     phone: '+1 (555) 123-4567',
  //     company: 'TechCorp',
  //     status: 'new',
  //     date: '2024-01-15',
  //     message: 'Interested in AI consulting services'
  //   },
  //   { 
  //     id: 2, 
  //     name: 'Michael Chen', 
  //     email: 'm.chen@innovate.com', 
  //     phone: '+1 (555) 987-6543',
  //     company: 'InnovateLab',
  //     status: 'contacted',
  //     date: '2024-01-14',
  //     message: 'Looking for data analytics solutions'
  //   },
  //   { 
  //     id: 3, 
  //     name: 'Emily Rodriguez', 
  //     email: 'emily@dataflow.io', 
  //     phone: '+1 (555) 456-7890',
  //     company: 'DataFlow',
  //     status: 'qualified',
  //     date: '2024-01-13',
  //     message: 'Need help with process automation'
  //   },
  //   { 
  //     id: 4, 
  //     name: 'David Wilson', 
  //     email: 'd.wilson@startup.com', 
  //     phone: '+1 (555) 321-0987',
  //     company: 'StartupCo',
  //     status: 'new',
  //     date: '2024-01-12',
  //     message: 'Interested in machine learning services'
  //   },
  // ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'blog', name: 'Blog Management', icon: FileText },
    { id: 'contacts', name: 'Contact Management', icon: Users },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-purple-100 text-purple-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderOverview = () => (
    <div className="space-y-8 mt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
              <p className="text-blue-100 text-lg">Here's what's happening with your business today.</p>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-white/80" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
                    <span className="text-sm font-semibold text-emerald-600">{stat.change}</span>
                  </div>
                  <span className="text-xs text-slate-500">this week</span>
                </div>
              </div>
              <div>
                <p className="text-slate-600 text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                </div>
              </div>
              </div>
        ))}
            </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setActiveTab('blog')}
            className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-white" />
          </div>
              <span className="text-sm font-medium text-blue-700">New Blog Post</span>
            </div>
          </button>
          
          <button 
            onClick={() => setActiveTab('contacts')}
            className="group p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-green-700">View Contacts</span>
            </div>
          </button>
          
          <button className="group p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-700">Analytics</span>
            </div>
          </button>
          
          <button 
            onClick={() => setIsPasswordChangeOpen(true)}
            className="group p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-700">Change Password</span>
            </div>
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">User Growth & Performance</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600">Live Data</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                  strokeWidth={2}
                  name="Users"
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#10B981"
                  fillOpacity={1}
                  fill="url(#colorViews)"
                  strokeWidth={2}
                  name="Page Views"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Sources</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={contactSourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {contactSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value, entry) => (
                    <span style={{ color: entry.color, fontSize: '12px' }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Blog Performance by Category</h3>
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-slate-600">Posts & Views</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={blogPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="posts" fill="#3B82F6" name="Posts" radius={[4, 4, 0, 0]} />
                <Bar dataKey="views" fill="#10B981" name="Views" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Performance Trends</h3>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm text-slate-600">Weekly</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="Performance %"
                />
                <Line 
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  name="Engagement %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">New blog post published</p>
              <p className="text-xs text-slate-500">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">New contact received</p>
              <p className="text-xs text-slate-500">4 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">Message replied</p>
              <p className="text-xs text-slate-500">6 hours ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Recent Blog Posts</h3>
            <button 
              onClick={() => setActiveTab('blog')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              View all
            </button>
          </div>
          <div className="space-y-4">
            {blogPosts.slice(0, 4).map((post, index) => (
              <div key={index} className="group flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl hover:from-slate-100 hover:to-slate-200 transition-all duration-300">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{post.title}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views || 0} views
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(post?.publishedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Recent Contacts</h3>
            <button 
              onClick={() => setActiveTab('contacts')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              View all
            </button>
          </div>
          <div className="space-y-4">
            {contacts.slice(0, 4).map((contact,index) => (
              <div key={index} className="group flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl hover:from-slate-100 hover:to-slate-200 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm font-bold">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{contact.name}</p>
                    <p className="text-xs text-slate-500">{contact.company}</p>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{contact.message}</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [isContactDeleteOpen, setIsContactDeleteOpen] = useState(false);
  const [contactDeleteId, setContactDeleteId] = useState(null);
  const [deletingContact, setDeletingContact] = useState(false);
  const [isPasswordChangeOpen, setIsPasswordChangeOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  // const dispatch = useDispatch();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserDropdown && !event.target.closest('.user-dropdown')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserDropdown]);
  const handleAddPostSubmit = (data) => {
    // Stub: replace with API call to create post
    // console.log('New post data:', data);
    setIsAddPostOpen(false);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      setDeleting(true);
      await handleDelete(deleteId);
      setIsDeleteOpen(false);
      setDeleteId(null);
      router.refresh()
      dispatch(setBlogStatus("deleted"))
    } finally {
      setDeleting(false);
    }
  };

  const confirmDeleteContact = async () => {
    if (!contactDeleteId) return;
    try {
      setDeletingContact(true);
      await handleDeleteContact(contactDeleteId);
      setIsContactDeleteOpen(false);
      setContactDeleteId(null);
      router.refresh()
      dispatch(setContactStatus("deleted"))
    } finally {
      setDeletingContact(false);
    }
  };

  const renderBlogManagement = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Blog Management</h2>
          <p className="text-slate-600">Manage your blog posts and content</p>
        </div>
        <button onClick={() => setIsAddPostOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Post</span>
        </button>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">All Blog Posts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {blogPosts.map((post, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-Nunito-Bold text-slate-900">{post?.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <Tag className="w-3 h-3 mr-1" />
                      {post?.category}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                    {post?.author.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {new Date(post?.publishedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {/* <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button> */}
                      <button onClick={() => { setEditingBlog(post); setIsEditOpen(true); }} className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => { setDeleteId(post?._id); setIsDeleteOpen(true); }} className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddBlogPostModal
        isOpen={isAddPostOpen}
        onClose={() => setIsAddPostOpen(false)}
        onSubmit={handleAddPostSubmit}
      />

      <EditBlogPostModal
        isOpen={isEditOpen}
        onClose={() => { setIsEditOpen(false); setEditingBlog(null); }}
        blog={editingBlog}
      />

      <ConfirmDeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={confirmDelete}
        loading={deleting}
        title="Delete Blog Post"
        message={"Are you sure you want to delete this blog post? This action cannot be undone."}
      />
    </div>
  );

  const renderContactManagement = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Contact Management</h2>
          <p className="text-slate-600">Manage your contacts and inquiries</p>
        </div>
        <div className="flex items-center space-x-3">
          {/* <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button> */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Contact</span>
          </button>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">All Contacts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {contacts.map((contact,index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-medium">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900">{contact.name}</div>
                        <div className="text-sm text-slate-500">{contact.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                    {contact.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                      {/* {contact.status === 'new' ? <UserIcon className="w-3 h-3 mr-1" /> :
                        contact.status === 'contacted' ? <Phone className="w-3 h-3 mr-1" /> :
                          <CheckCircle className="w-3 h-3 mr-1" />} */}
                      {contact?.service}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900 max-w-xs truncate">
                    {contact?.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {new Date(contact?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900" title="View Details">
                        <Eye className="w-4 h-4" />
                      </button>
                      {/* <button className="text-green-600 hover:text-green-900" title="Send Email">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="text-purple-600 hover:text-purple-900" title="Call">
                        <Phone className="w-4 h-4" />
                      </button> */}
                      <button onClick={() => { setContactDeleteId(contact?._id); setIsContactDeleteOpen(true); }} className="text-red-600 hover:text-red-900" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={isContactDeleteOpen}
        onClose={() => setIsContactDeleteOpen(false)}
        onConfirm={confirmDeleteContact}
        loading={deletingContact}
        title="Delete Contact"
        message="Are you sure you want to delete this contact? This action cannot be undone."
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="lg:hidden p-2 rounded-xl hover:bg-slate-100 mr-3 transition-colors">
                <Menu className="w-5 h-5 text-slate-600" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="pl-10 pr-4 py-2.5 w-72 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-sm"
                />
              </div>

              <button className="p-2.5 rounded-xl hover:bg-slate-100 relative transition-all duration-300 hover:scale-105">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              <div className="relative pl-3 border-l border-slate-200 user-dropdown">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-3 hover:bg-slate-50 rounded-xl p-2 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <User className="w-5 h-5 text-white" />
                </div>
                  <div className="hidden md:block text-left">
                    <span className="text-sm font-semibold text-slate-900">Admin User</span>
                    <p className="text-xs text-slate-500">Administrator</p>
              </div>
                </button>

                {/* User Dropdown Menu */}
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-900">Admin User</p>
                      <p className="text-xs text-slate-500">admin@example.com</p>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setIsPasswordChangeOpen(true);
                          setShowUserDropdown(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <Settings className="w-4 h-4 mr-3 text-slate-500" />
                        Change Password
                      </button>
                      <button
                        onClick={() => {
                          // Navigate to settings page
                          setActiveTab('settings');
                          setShowUserDropdown(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <User className="w-4 h-4 mr-3 text-slate-500" />
                        Profile Settings
                      </button>
                      <div className="border-t border-slate-100 my-1"></div>
                      <button
                        onClick={() => {
                          // Handle logout
                          setShowUserDropdown(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <X className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Navigation Tabs */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center space-x-2 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <tab.icon className={`w-4 h-4 transition-transform duration-300 ${
                  activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'
                }`} />
                <span>{tab.name}</span>
                {activeTab === tab.id && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Dashboard Overview</h2>
                <p className="text-slate-600">Monitor your business performance and manage content efficiently.</p>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                <span>Last updated: {new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'blog' && renderBlogManagement()}
        {activeTab === 'contacts' && renderContactManagement()}
      </main>

      {/* Password Change Modal */}
      <PasswordChangeModal
        isOpen={isPasswordChangeOpen}
        onClose={() => setIsPasswordChangeOpen(false)}
      />
    </div>
  );
};

export default Dashboard;

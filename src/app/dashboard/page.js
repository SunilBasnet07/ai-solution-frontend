'use client';

import { useEffect, useState } from 'react';
import AddBlogPostModal from '@/components/AddBlogPostModal';
import EditBlogPostModal from '@/components/EditBlogPostModal';
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
import { deleteBlog, getAllBlogs } from '@/api/blog';
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogStatus } from '@/redux/blog/blogSlice';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [blogPosts,setBlogPosts]= useState([])
  const router = useRouter();
  // const dispatch = useDispatch();
  const {status}= useSelector((state)=>state.blog)
  
  useEffect(()=>{
    getAllBlogs().then((response)=>{
     
  setBlogPosts(response)
    }).catch((error=>console.log(error?.response?.data)))
  },[status])

async function handleDelete(id){
try {
  await deleteBlog(id)
  toast.success("Blog deleted",{
    autoClose:750,
  })
  

} catch (error) {
  console.log(error?.response?.data)
}
}

  const stats = [
    { 
      title: 'Total Blog Posts', 
      value: '24', 
      change: '+3', 
      trend: 'up',
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Total Contacts', 
      value: '156', 
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

  const contacts = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      email: 'sarah.j@email.com', 
      phone: '+1 (555) 123-4567',
      company: 'TechCorp',
      status: 'new',
      date: '2024-01-15',
      message: 'Interested in AI consulting services'
    },
    { 
      id: 2, 
      name: 'Michael Chen', 
      email: 'm.chen@innovate.com', 
      phone: '+1 (555) 987-6543',
      company: 'InnovateLab',
      status: 'contacted',
      date: '2024-01-14',
      message: 'Looking for data analytics solutions'
    },
    { 
      id: 3, 
      name: 'Emily Rodriguez', 
      email: 'emily@dataflow.io', 
      phone: '+1 (555) 456-7890',
      company: 'DataFlow',
      status: 'qualified',
      date: '2024-01-13',
      message: 'Need help with process automation'
    },
    { 
      id: 4, 
      name: 'David Wilson', 
      email: 'd.wilson@startup.com', 
      phone: '+1 (555) 321-0987',
      company: 'StartupCo',
      status: 'new',
      date: '2024-01-12',
      message: 'Interested in machine learning services'
    },
  ];

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
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
                  <span className="text-sm font-medium text-emerald-600">{stat.change}</span>
                  <span className="text-sm text-slate-500 ml-1">this week</span>
                </div>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Recent Blog Posts</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {blogPosts.slice(0, 4).map((post,index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{post.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                    <span className="text-xs text-slate-500">{post.views} views</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 hover:bg-slate-200 rounded">
                    <Eye className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-1 hover:bg-slate-200 rounded">
                    <Edit className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Recent Contacts</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {contacts.slice(0, 4).map((contact) => (
              <div key={contact.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{contact.name}</p>
                    <p className="text-xs text-slate-500">{contact.company}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                  {contact.status}
                </span>
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
  const dispatch = useDispatch();
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
              {blogPosts.map((post,index) => (
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
                      <button onClick={()=>{setDeleteId(post?._id); setIsDeleteOpen(true);}} className="text-red-600 hover:text-red-900">
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
          <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-slate-50">
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
                      {contact.status === 'new' ? <UserIcon className="w-3 h-3 mr-1" /> : 
                       contact.status === 'contacted' ? <Phone className="w-3 h-3 mr-1" /> : 
                       <CheckCircle className="w-3 h-3 mr-1" />}
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900 max-w-xs truncate">
                    {contact.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {new Date(contact.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900" title="View Details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900" title="Send Email">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="text-purple-600 hover:text-purple-900" title="Call">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900" title="Delete">
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
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 mr-2">
                <Menu className="w-5 h-5 text-slate-600" />
              </button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50"
                />
              </div>
              
              <button className="p-2 rounded-lg hover:bg-slate-100 relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium text-slate-700">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back!</h2>
            <p className="text-slate-600">Here's what's happening with your business today.</p>
          </div>
        )}
        
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'blog' && renderBlogManagement()}
        {activeTab === 'contacts' && renderContactManagement()}
      </main>
    </div>
  );
};

export default Dashboard;

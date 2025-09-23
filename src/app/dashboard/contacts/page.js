'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Mail,
  Phone,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  Reply,
  Archive,
  Trash2,
  Download,
  Tag
} from 'lucide-react';

const ContactManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showReplyModal, setShowReplyModal] = useState(false);

  const contacts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@techcorp.com',
      phone: '+1 (555) 123-4567',
      company: 'TechCorp',
      subject: 'AI Implementation Inquiry',
      message: 'We are interested in implementing AI solutions for our customer service department. Could you provide more information about your services?',
      status: 'new',
      priority: 'high',
      date: '2024-01-20',
      time: '10:30 AM',
      source: 'Website Contact Form',
      tags: ['AI', 'Customer Service', 'Enterprise']
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'mike.chen@innovate.com',
      phone: '+1 (555) 234-5678',
      company: 'InnovateLab',
      subject: 'Partnership Opportunity',
      message: 'We would like to explore potential partnership opportunities with your AI solutions. Please let us know if you are interested.',
      status: 'in_progress',
      priority: 'medium',
      date: '2024-01-19',
      time: '2:15 PM',
      source: 'Email',
      tags: ['Partnership', 'Business Development']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily@dataflow.com',
      phone: '+1 (555) 345-6789',
      company: 'DataFlow',
      subject: 'Technical Support',
      message: 'We are experiencing issues with the AI model integration. The accuracy seems to be lower than expected. Can you help?',
      status: 'resolved',
      priority: 'high',
      date: '2024-01-18',
      time: '9:45 AM',
      source: 'Support Ticket',
      tags: ['Technical Support', 'AI Model', 'Integration']
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david.kim@startupx.com',
      phone: '+1 (555) 456-7890',
      company: 'StartupX',
      subject: 'Pricing Information',
      message: 'Could you please send me detailed pricing information for your AI consulting services? We are a startup with limited budget.',
      status: 'new',
      priority: 'low',
      date: '2024-01-17',
      time: '4:20 PM',
      source: 'Website Contact Form',
      tags: ['Pricing', 'Startup', 'Consulting']
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa@brandmax.com',
      phone: '+1 (555) 567-8901',
      company: 'BrandMax',
      subject: 'Demo Request',
      message: 'We would like to schedule a demo of your AI analytics platform. What are your available time slots this week?',
      status: 'scheduled',
      priority: 'medium',
      date: '2024-01-16',
      time: '11:00 AM',
      source: 'Phone Call',
      tags: ['Demo', 'Analytics', 'Scheduling']
    }
  ];

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || contact.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ReplyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl mx-4"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Reply to Contact</h3>
          <button
            onClick={() => setShowReplyModal(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <XCircle className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {selectedContact && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{selectedContact.name}</h4>
              <span className="text-sm text-gray-500">{selectedContact.date} at {selectedContact.time}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2"><strong>Subject:</strong> {selectedContact.subject}</p>
            <p className="text-sm text-gray-600"><strong>Message:</strong> {selectedContact.message}</p>
          </div>
        )}

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reply Message</label>
            <textarea
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Type your reply here..."
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-700">Mark as resolved</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-700">Send copy to team</span>
            </label>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowReplyModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Reply
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
          <h1 className="text-2xl font-bold text-gray-900">Contact Management</h1>
          <p className="text-gray-600 mt-1">Manage customer inquiries and support requests</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Contact
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">New Messages</p>
              <p className="text-2xl font-bold text-gray-900">{contacts.filter(c => c.status === 'new').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-gray-900">{contacts.filter(c => c.status === 'resolved').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">High Priority</p>
              <p className="text-2xl font-bold text-gray-900">{contacts.filter(c => c.priority === 'high').length}</p>
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
                placeholder="Search contacts..."
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
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Contacts List */}
      <div className="space-y-4">
        {filteredContacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    {contact.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {contact.email}
                      </span>
                      <span className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {contact.phone}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {contact.date} at {contact.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">{contact.subject}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{contact.message}</p>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Company:</span>
                    <span className="text-sm font-medium text-gray-900">{contact.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Source:</span>
                    <span className="text-sm font-medium text-gray-900">{contact.source}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                    {contact.status.replace('_', ' ')}
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(contact.priority)}`}>
                    {contact.priority} priority
                  </span>
                  <div className="flex items-center space-x-1">
                    {contact.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => setSelectedContact(contact)}
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setSelectedContact(contact);
                    setShowReplyModal(true);
                  }}
                  className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  title="Reply"
                >
                  <Reply className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors" title="Archive">
                  <Archive className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredContacts.length}</span> of{' '}
          <span className="font-medium">{contacts.length}</span> results
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
      {showReplyModal && <ReplyModal />}
    </div>
  );
};

export default ContactManagement;

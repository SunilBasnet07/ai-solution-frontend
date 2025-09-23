'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Star,
  Play,
  CheckCircle,
  Sparkles,
  Target,
  Globe,
  Award,
  BarChart3,
  Clock,
  MessageCircle
} from 'lucide-react';
import ChatBox from '../components/ChatBox';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Harness the power of advanced AI algorithms to make smarter decisions and automate complex processes.",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Experience blazing-fast processing with our optimized AI infrastructure and real-time analytics.",
      color: "from-yellow-500 to-orange-500",
      gradient: "bg-gradient-to-br from-yellow-50 to-orange-50"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, compliance standards, and 99.9% uptime guarantee.",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Scale effortlessly with our cloud-native architecture designed for businesses of any size.",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-50 to-pink-50"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Target },
    { number: "99.9%", label: "Uptime Guarantee", icon: Clock },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "24/7", label: "Support Available", icon: MessageCircle }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "AI Solutions transformed our business operations. We've seen a 300% increase in efficiency.",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content: "The AI implementation was seamless and the results exceeded our expectations.",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director, DataFlow",
      content: "Outstanding support and cutting-edge technology. Highly recommended!",
      avatar: "ER",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="relative min-h-screen  flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2   bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2 " />
                AI-Powered Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
              >
                Unlock the power of artificial intelligence to automate processes, 
                gain insights, and drive unprecedented growth for your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>14-Day Free Trial</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Modern AI Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[600px]">
                {/* Main AI Brain */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
                >
                  <Brain className="w-16 h-16 text-white" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [-20, 20, -20],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 left-8 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-200"
                >
                  <Zap className="w-10 h-10 text-yellow-500" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [20, -20, 20],
                    rotate: [0, -5, 0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute top-8 right-8 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-200"
                >
                  <Shield className="w-10 h-10 text-green-500" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [-15, 15, -15],
                    rotate: [0, 3, 0, -3, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-200"
                >
                  <TrendingUp className="w-10 h-10 text-blue-500" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [15, -15, 15],
                    rotate: [0, -3, 0, 3, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-8 right-8 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-200"
                >
                  <Users className="w-10 h-10 text-purple-500" />
                </motion.div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="20%"
                    y2="20%"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="80%"
                    y2="20%"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ChatBox />

      {/* Stats Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide comprehensive AI solutions that drive real business value 
              and measurable results for companies of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${feature.gradient} p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-white/50`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Bot, 
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Sparkles,
  Target,
  Globe,
  TrendingUp,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  Download,
  Play
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Strategic AI advisory services to help you identify opportunities and develop comprehensive AI roadmaps.",
      features: [
        "AI Strategy Development",
        "Technology Assessment",
        "ROI Analysis",
        "Implementation Planning"
      ],
      price: "Starting at $5,000/month",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
      popular: false
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and machine learning models.",
      features: [
        "Predictive Analytics",
        "Data Visualization",
        "Business Intelligence",
        "Real-time Dashboards"
      ],
      price: "Starting at $3,000/month",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-50",
      popular: true
    },
    {
      icon: Bot,
      title: "Process Automation",
      description: "Automate repetitive tasks and streamline workflows with intelligent automation solutions.",
      features: [
        "Workflow Automation",
        "Document Processing",
        "Customer Service Bots",
        "Integration Services"
      ],
      price: "Starting at $2,500/month",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      popular: false
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Protect your AI systems and data with comprehensive security solutions and compliance frameworks.",
      features: [
        "AI Model Security",
        "Data Privacy Protection",
        "Compliance Auditing",
        "Threat Detection"
      ],
      price: "Starting at $4,000/month",
      color: "from-red-500 to-orange-500",
      gradient: "bg-gradient-to-br from-red-50 to-orange-50",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs, current systems, and identify AI opportunities.",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI strategy tailored to your business objectives.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy AI solutions with minimal disruption to your existing operations.",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuously monitor, optimize, and provide ongoing support for your AI systems.",
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate processes and reduce manual work by up to 80%",
      stat: "80%"
    },
    {
      icon: TrendingUp,
      title: "Better Decision Making",
      description: "Make data-driven decisions with real-time insights and predictions",
      stat: "95%"
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description: "Deliver personalized experiences and 24/7 customer support",
      stat: "24/7"
    },
    {
      icon: Award,
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI technology",
      stat: "3x"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "The AI consulting service transformed our business operations completely. We've seen incredible results.",
      avatar: "SJ",
      rating: 5,
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content: "Outstanding data analytics implementation. The insights we gained were game-changing for our business.",
      avatar: "MC",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "Emily Rodriguez",
      role: "Director, DataFlow",
      content: "Process automation saved us countless hours. The ROI was evident within the first month.",
      avatar: "ER",
      rating: 5,
      company: "DataFlow"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Professional AI Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              AI <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8"
            >
              Comprehensive AI solutions designed to transform your business operations, 
              drive growth, and deliver measurable results. From strategy to implementation, 
              we're your trusted AI partner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services, each designed to address 
              specific business challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${service.gradient} p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-white/50 relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/50">
                  <div className="text-xl font-bold text-slate-900">
                    {service.price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful AI implementation 
              and maximum return on investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-4 h-4 text-slate-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI solutions deliver measurable business value and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center border border-white/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our AI services have transformed businesses across various industries.
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
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
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
              Let's discuss your AI needs and create a customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

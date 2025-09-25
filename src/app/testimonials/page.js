'use client';

import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Zap
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { submitReview, resetSubmitState } from '@/redux/review/reviewSlice';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp",
      image: "SJ",
      rating: 5,
      content: "AI Solutions transformed our business operations completely. The AI implementation increased our efficiency by 300% and reduced operational costs by 40%. Their team's expertise and dedication made the entire process seamless.",
      results: ["300% efficiency increase", "40% cost reduction", "99.9% uptime"],
      industry: "Technology"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLab",
      image: "MC",
      rating: 5,
      content: "Working with AI Solutions was a game-changer for our company. Their machine learning models helped us predict customer behavior with 95% accuracy, leading to a 250% increase in sales conversion rates.",
      results: ["95% prediction accuracy", "250% sales increase", "Real-time insights"],
      industry: "E-commerce"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Director of Operations",
      company: "DataFlow",
      image: "ER",
      rating: 5,
      content: "The AI automation solutions provided by AI Solutions revolutionized our workflow. We automated 80% of our repetitive tasks, allowing our team to focus on strategic initiatives and innovation.",
      results: ["80% task automation", "50% time savings", "Enhanced productivity"],
      industry: "Data Analytics"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "StartupX",
      image: "DK",
      rating: 5,
      content: "As a startup, we needed cost-effective AI solutions. AI Solutions delivered exactly what we needed - scalable, affordable, and incredibly effective. Our customer satisfaction increased by 200%.",
      results: ["200% satisfaction increase", "Scalable solution", "Cost-effective"],
      industry: "Startup"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "VP of Marketing",
      company: "BrandMax",
      image: "LT",
      rating: 5,
      content: "The AI-powered analytics platform helped us understand our customers better than ever. We achieved a 180% improvement in marketing ROI and reduced customer acquisition costs by 60%.",
      results: ["180% ROI improvement", "60% cost reduction", "Better insights"],
      industry: "Marketing"
    },
    {
      id: 6,
      name: "Robert Wilson",
      role: "Head of Finance",
      company: "FinancePro",
      image: "RW",
      rating: 5,
      content: "AI Solutions' predictive analytics transformed our financial forecasting. We now predict market trends with 90% accuracy, helping us make better investment decisions and reduce risks significantly.",
      results: ["90% prediction accuracy", "Risk reduction", "Better decisions"],
      industry: "Finance"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Transformation",
      company: "TechCorp",
      challenge: "Manual inventory management and poor customer experience",
      solution: "AI-powered inventory optimization and personalized recommendations",
      results: [
        "300% increase in efficiency",
        "40% reduction in operational costs",
        "99.9% system uptime",
        "250% improvement in customer satisfaction"
      ],
      image: "E-commerce",
      industry: "E-commerce"
    },
    {
      title: "Healthcare Data Analytics",
      company: "MedTech Solutions",
      challenge: "Complex patient data analysis and treatment optimization",
      solution: "Machine learning models for predictive healthcare analytics",
      results: [
        "95% accuracy in diagnosis prediction",
        "60% reduction in treatment time",
        "80% improvement in patient outcomes",
        "50% cost savings in healthcare delivery"
      ],
      image: "Healthcare",
      industry: "Healthcare"
    },
    {
      title: "Manufacturing Automation",
      company: "AutoManufacturing Inc",
      challenge: "Quality control issues and production inefficiencies",
      solution: "Computer vision and IoT integration for smart manufacturing",
      results: [
        "90% reduction in defects",
        "70% increase in production speed",
        "85% improvement in quality control",
        "45% reduction in waste"
      ],
      image: "Manufacturing",
      industry: "Manufacturing"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Industries Served", icon: Globe },
    { number: "24/7", label: "Support Available", icon: Award }
  ];

  const dispatch = useDispatch();
  const { submitStatus, submitError } = useSelector((state) => state.review);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (submitStatus === 'succeeded') {
      setName('');
      setCompany('');
      setContent('');
      setRating(5);
      const timer = setTimeout(() => {
        dispatch(resetSubmitState());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!name.trim() || !content.trim() || rating < 1) return;
    dispatch(
      submitReview({ name: name.trim(), company: company.trim(), content: content.trim(), rating })
    );
  };

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
              Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how we've helped businesses across various industries transform their operations 
              with cutting-edge AI solutions. Read real testimonials and case studies from our satisfied clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-Poppins-Medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced the transformative power of our AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-Poppins-SemiBold">{testimonial.industry}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="space-y-2 mb-6">
                  {testimonial.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-Poppins-SemiBold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-Poppins-SemiBold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Review Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow"
          >
            <h3 className="text-2xl font-Poppins-ExtraBold text-gray-900 mb-6 text-center">
              Share Your Review
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-Poppins-SemiBold text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
                {touched && !name.trim() && (
                  <p className="text-sm text-red-600 mt-1">Name is required.</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-Poppins-SemiBold text-gray-700 mb-1">Company (optional)</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-Poppins-SemiBold text-gray-700 mb-2">Rating</label>
                <div className="flex items-center gap-2">
                  {[1,2,3,4,5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1"
                      aria-label={`Rate ${star} star${star>1?'s':''}`}
                    >
                      <Star className={`w-6 h-6 ${rating >= star ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-Poppins-SemiBold text-gray-700 mb-1">Review</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your experience..."
                />
                {touched && !content.trim() && (
                  <p className="text-sm text-red-600 mt-1">Review content is required.</p>
                )}
              </div>

              {submitError && submitStatus === 'failed' && (
                <div className="text-sm text-red-600">{submitError}</div>
              )}
              {submitStatus === 'succeeded' && (
                <div className="text-sm text-green-600">Thank you! Your review has been submitted.</div>
              )}

              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className={`px-6 py-3 rounded-lg font-Poppins-SemiBold text-white transition-all duration-300 ${submitStatus === 'loading' ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'}`}
                >
                  {submitStatus === 'loading' ? 'Submitting...' : 'Submit Review'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed case studies showcasing how we've helped businesses achieve remarkable results with AI.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Building className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <span className="text-2xl font-Poppins-ExtraBold text-gray-600">{caseStudy.image}</span>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-Poppins-SemiBold">{caseStudy.industry}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-Poppins-ExtraBold text-gray-900 mb-4">
                    {caseStudy.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-Poppins-SemiBold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-Poppins-SemiBold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-Poppins-SemiBold text-gray-900 mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-Poppins-SemiBold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business and help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-Poppins-SemiBold text-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Success Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-Poppins-SemiBold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb,
  CheckCircle,
  Brain,
  Zap,
  Shield
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI technology."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique challenges."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of ethics and transparency in all our work."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional results that exceed our clients' expectations."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & Founder",
      image: "SJ",
      bio: "AI researcher with 15+ years of experience in machine learning and business transformation."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "MC",
      bio: "Former Google AI engineer specializing in deep learning and scalable AI systems."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Data Science",
      image: "ER",
      bio: "Data science expert with a PhD in Statistics and extensive experience in predictive analytics."
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      image: "DK",
      bio: "Full-stack AI engineer with expertise in natural language processing and computer vision."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to democratize AI for businesses of all sizes."
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Successfully implemented AI solutions for Fortune 500 company."
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew from 5 to 25 employees, adding top AI talent from leading tech companies."
    },
    {
      year: "2023",
      title: "Series A Funding",
      description: "Raised $10M to accelerate product development and market expansion."
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Named one of the top 10 AI companies by TechCrunch and Forbes."
    }
  ];

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
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a team of passionate AI experts dedicated to transforming businesses 
              through innovative artificial intelligence solutions. Our mission is to make 
              AI accessible, practical, and profitable for companies worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-Poppins-ExtraBold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To democratize artificial intelligence by providing accessible, scalable, 
                and ethical AI solutions that drive real business value. We believe every 
                company, regardless of size, should have access to cutting-edge AI technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Make AI accessible to all businesses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Ensure ethical and responsible AI use</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Drive measurable business outcomes</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-Poppins-ExtraBold">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  To be the world's leading provider of AI solutions that transform how 
                  businesses operate, innovate, and grow. We envision a future where AI 
                  is seamlessly integrated into every aspect of business operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-Poppins-SemiBold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of AI experts brings together decades of experience 
              from leading technology companies and research institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-Poppins-SemiBold text-xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-lg font-Poppins-SemiBold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-Poppins-Medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-Poppins-ExtraBold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader - our growth story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-Poppins-ExtraBold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-Poppins-SemiBold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business and drive growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-Poppins-SemiBold text-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

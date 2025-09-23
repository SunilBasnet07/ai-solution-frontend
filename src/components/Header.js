'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain, User, Settings, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { MdDashboard } from "react-icons/md";
import { logout } from '@/redux/auth/authSlice';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  function handleLogout(){
    dispatch(logout())
    router.push("/login")
  }

  // Helper function to check if a link is active
  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-Poppins-Bold text-gray-900">
              AI Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 relative group ${
                    isActiveLink(item.href)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {
              user ? ( <div onClick={()=>setShowProfile(!showProfile)} className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-200 group-hover:scale-105">
                {user?.profileImageUrl ? (
                  <Image
                    src={user.profileImageUrl}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="px-2 py-2 border border-gray-400 rounded-full">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                )}
              </div>) : (   <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg font-Poppins-SemiBold transition-all duration-300"
                >
                  Sign In
                </motion.button>
              </Link>)
            }
         
  
          </div>
    
          {/* popup profile */}

          <div
            onClick={() => setShowProfile(false)}
            className={`${showProfile
              ? "absolute right-2 top-20 z-50 flex flex-col min-w-[280px] max-w-[320px] rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
              : "hidden"
              }`}
          >
            {/* User Info */}
            <div className="flex items-center px-4 py-3 gap-3 bg-gray-50 dark:bg-gray-800">
              {user?.profileImageUrl ? (
                <Image
                  src={user?.profileImageUrl}
                  alt="profileImage"
                  height={45}
                  width={45}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="px-2 py-2 border border-gray-400 rounded-full">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
              )}
              <div>
                <p className="font-Nunito-Bold text-sm leading-tight">
                  Hi! {user?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Links */}
            <Link
              href='#'
              className="flex items-center gap-3 px-5 py-3 text-sm font-Nunito-Bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Settings className="h-5 w-5" />
              Manage account
            </Link>

         
              <Link
                href='/dashboard'
                className={`flex items-center gap-3 px-5 py-3 text-sm font-Nunito-Bold transition ${
                  isActiveLink('/dashboard')
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <MdDashboard className="h-5 w-5" />
                Dashboard
              </Link>
            

            <button
             onClick={handleLogout}
              className="flex items-center gap-3 px-5 py-3 text-sm font-Nunito-Bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <LogOut className="h-5 w-5" />
              Sign out
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActiveLink(item.href)
                          ? 'bg-blue-50 text-blue-600 font-semibold border-r-2 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-Poppins-SemiBold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                    >
                      Sign In
                    </motion.button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-Poppins-SemiBold"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Key,
  User,
  Smartphone,
  Clock,
  MapPin,
  AlertTriangle,
  RefreshCw,
  Fingerprint,
  Database,
  Settings
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { adminUserLogin, verifyTwoFactor } from '@/redux/auth/authAction';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginStep, setLoginStep] = useState('credentials'); // 'credentials', '2fa', 'success'
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(null);
  const [userAgent, setUserAgent] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  const dispatch = useDispatch();
  const { 
    user, 
    error, 
    loading, 
    isAdmin, 
    adminLoginLoading, 
    adminLoginError, 
    twoFactorRequired, 
    twoFactorLoading, 
    twoFactorError 
  } = useSelector((state) => state.auth);
  const router = useRouter();

  // Get user agent and simulate IP detection
  useEffect(() => {
    setUserAgent(navigator.userAgent);
    // In a real app, you'd get this from your backend
    setIpAddress('192.168.1.100');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const email = watch('email');

  // Check if account is locked
  useEffect(() => {
    if (isLocked && lockoutTime) {
      const timer = setTimeout(() => {
        setIsLocked(false);
        setLockoutTime(null);
        setLoginAttempts(0);
        toast.success('Account unlocked. You can try logging in again.');
      }, lockoutTime);

      return () => clearTimeout(timer);
    }
  }, [isLocked, lockoutTime]);

  const onSubmit = async (data) => {
    if (isLocked) {
      toast.error('Account is temporarily locked. Please try again later.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate admin login validation
      if (data.email && !data.email.includes('@admin.')) {
        toast.error('This is an admin-only login. Please use an admin email.');
        setIsLoading(false);
        return;
      }

      // Simulate login attempt tracking
      setLoginAttempts(prev => prev + 1);
      
      if (loginAttempts >= 3) {
        setIsLocked(true);
        setLockoutTime(5 * 60 * 1000); // 5 minutes lockout
        toast.error('Too many failed attempts. Account locked for 5 minutes.');
        setIsLoading(false);
        return;
      }

      // Dispatch admin login action
      const result = await dispatch(adminUserLogin({
        ...data,
        userAgent,
        ipAddress
      })).unwrap();

      // Check if 2FA is required
      if (result.requires2FA) {
        setLoginStep('2fa');
        toast.info('Please enter your 2FA code');
      } else {
        setLoginStep('success');
        toast.success('Login successful! Redirecting to admin dashboard...');
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      }
      
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handle2FA = async () => {
    if (twoFactorCode.length !== 6) {
      toast.error('Please enter a valid 6-digit code');
      return;
    }

    try {
      // Dispatch 2FA verification
      await dispatch(verifyTwoFactor({
        code: twoFactorCode,
        email: email
      })).unwrap();

      setLoginStep('success');
      toast.success('2FA verified! Redirecting to admin dashboard...');
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } catch (error) {
      toast.error(error?.message || 'Invalid 2FA code. Please try again.');
      setTwoFactorCode('');
    }
  };

  const resend2FA = () => {
    toast.info('2FA code resent to your registered device');
  };

  const resetLogin = () => {
    setLoginStep('credentials');
    setTwoFactorCode('');
    setLoginAttempts(0);
    setIsLocked(false);
    setLockoutTime(null);
    reset();
  };

  // Security features data
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols'
    },
    {
      icon: Fingerprint,
      title: 'Biometric Authentication',
      description: 'Advanced biometric verification systems'
    },
    {
      icon: Database,
      title: 'Audit Logging',
      description: 'Complete activity tracking and monitoring'
    },
    {
      icon: Settings,
      title: 'Access Control',
      description: 'Granular permissions and role management'
    }
  ];

  const renderCredentialsStep = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Portal</h1>
        <p className="text-slate-600">Secure access to administrative controls</p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Admin Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="email"
              {...register('email', {
                required: 'Admin email is required',
                pattern: {
                  value: /@admin\./,
                  message: 'Please use an admin email address'
                }
              })}
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                errors.email ? 'border-red-300' : 'border-slate-300'
              }`}
              placeholder="admin@company.com"
            />
          </div>
          {errors.email && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center mt-2 text-red-600"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              <span className="text-sm">{errors.email.message}</span>
            </motion.div>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                }
              })}
              className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                errors.password ? 'border-red-300' : 'border-slate-300'
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
              ) : (
                <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
              )}
            </button>
          </div>
          {errors.password && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center mt-2 text-red-600"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              <span className="text-sm">{errors.password.message}</span>
            </motion.div>
          )}
        </div>

        {/* Security Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-blue-900 mb-1">Security Notice</h4>
              <p className="text-xs text-blue-700">
                This is a secure admin portal. All login attempts are monitored and logged.
                IP: {ipAddress} | Browser: {userAgent.split(' ')[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Login Attempts Warning */}
        {loginAttempts > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-4"
          >
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm font-semibold text-yellow-800">
                  Failed Attempts: {loginAttempts}/3
                </p>
                <p className="text-xs text-yellow-700">
                  {loginAttempts >= 2 ? 'One more failed attempt will lock your account.' : 'Please check your credentials.'}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Account Locked Warning */}
        {isLocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 border border-red-200 rounded-xl p-4"
          >
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm font-semibold text-red-800">Account Temporarily Locked</p>
                <p className="text-xs text-red-700">
                  Too many failed login attempts. Please wait 5 minutes before trying again.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={adminLoginLoading || isLocked}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {adminLoginLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <Shield className="w-5 h-5" />
              <span>Access Admin Portal</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {/* Security Features */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-4 bg-slate-50 rounded-xl"
          >
            <feature.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <h4 className="text-xs font-semibold text-slate-900 mb-1">{feature.title}</h4>
            <p className="text-xs text-slate-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const render2FAStep = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Smartphone className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Two-Factor Authentication</h1>
        <p className="text-slate-600">Enter the 6-digit code from your authenticator app</p>
      </div>

      {/* 2FA Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Verification Code
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Key className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={twoFactorCode}
              onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-center text-2xl tracking-widest"
              placeholder="000000"
              maxLength={6}
            />
          </div>
        </div>

        {/* Resend Code */}
        <div className="text-center">
          <button
            type="button"
            onClick={resend2FA}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Didn't receive a code? Resend
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handle2FA}
          disabled={twoFactorLoading || twoFactorCode.length !== 6}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {twoFactorLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Verifying...</span>
            </>
          ) : (
            <>
              <CheckCircle className="w-5 h-5" />
              <span>Verify & Continue</span>
            </>
          )}
        </button>

        {/* Back Button */}
        <button
          onClick={resetLogin}
          className="w-full text-slate-600 hover:text-slate-800 py-2 px-4 rounded-xl hover:bg-slate-50 transition-colors font-medium"
        >
          ← Back to Login
        </button>
      </div>
    </motion.div>
  );

  const renderSuccessStep = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-white" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Login Successful!</h1>
        <p className="text-slate-600">Welcome back, Administrator</p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-center justify-center space-x-2 text-green-800">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Redirecting to dashboard...</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20"
        >
          <AnimatePresence mode="wait">
            {loginStep === 'credentials' && renderCredentialsStep()}
            {loginStep === '2fa' && render2FAStep()}
            {loginStep === 'success' && renderSuccessStep()}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-6 text-white/70">
          <p className="text-sm">
            Secure Admin Portal • 
            <span className="ml-1 flex items-center justify-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>IP: {ipAddress}</span>
            </span>
          </p>
          <div className="mt-2 flex items-center justify-center space-x-4 text-xs">
            <Link href="/login" className="hover:text-white transition-colors">
              Regular Login
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

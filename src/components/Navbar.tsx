"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, Mail, Clock, Database, Stethoscope, GraduationCap, ShoppingBag, LogOut, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    if (mounted) {
      window.location.href = '/';
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Top Header */}
      <div className="bg-slate-900 text-slate-300 py-2 px-6 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-blue-500" /><span>05xxxxxxxx</span></span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-blue-500" /><span>sales@nexsys.com</span></span>
          </div>
          <div className="flex gap-6 font-medium">
            <span className="flex items-center gap-2"><Clock size={14} className="text-blue-500" /><span>السبت - الخميس: 10 ص - 6 م</span></span>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 relative">
                <Image src="/NexSys_logo1.jpg" alt="NexSys Logo" fill className="object-contain rounded-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-slate-900 leading-none font-tajawal">
                  NEX<span className="text-blue-600">SYS</span>
                </span>
                <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">Solutions</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50">الرئيسية</Link>
              
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50 flex items-center gap-1">
                  البرامج <ChevronDown size={14} />
                </button>
                <div className="absolute top-full right-0 mt-2 w-[500px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-600 border-b pb-2 text-xs uppercase tracking-wider">الحلول التجارية</h4>
                    <Link href="/software" className="flex gap-3 hover:bg-slate-50 p-2.5 rounded-lg transition-colors group/item">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors"><Database size={16} /></div>
                      <div>
                        <div className="font-semibold text-sm">NexSys المحاسبة</div>
                        <div className="text-[10px] text-slate-500">إدارة حسابات ومخازن متكاملة</div>
                      </div>
                    </Link>
                    <Link href="/software" className="flex gap-3 hover:bg-slate-50 p-2.5 rounded-lg transition-colors group/item">
                      <div className="bg-orange-100 p-2 rounded-lg text-orange-600 group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors"><ShoppingBag size={16} /></div>
                      <div>
                        <div className="font-semibold text-sm">نقاط البيع</div>
                        <div className="text-[10px] text-slate-500">محلات التجزئة والمطاعم</div>
                      </div>
                    </Link>
                    <Link href="/software" className="flex gap-3 hover:bg-slate-50 p-2.5 rounded-lg transition-colors group/item">
                      <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors"><Stethoscope size={16} /></div>
                      <div>
                        <div className="font-semibold text-sm">العيادات والمستشفيات</div>
                        <div className="text-[10px] text-slate-500">إدارة الملفات والسجلات الطبية</div>
                      </div>
                    </Link>
                    <Link href="/software" className="flex gap-3 hover:bg-slate-50 p-2.5 rounded-lg transition-colors group/item">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors"><GraduationCap size={16} /></div>
                      <div>
                        <div className="font-semibold text-sm">الطلاب والمدارس</div>
                        <div className="text-[10px] text-slate-500">نظام متكامل لإدارة المدارس</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50">من نحن</Link>
              <Link href="/blog" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50">المدونة</Link>
              <Link href="/order" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50">الطلب والاستفسار</Link>
              <Link href="/contact" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50">اتصل بنا</Link>
              <Link href="/admin" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50">لوحة التحكم</Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition-colors text-sm">
                  <User size={16} />
                  <span>{user.name || user.email}</span>
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-medium transition-colors text-sm">
                  <LogOut size={16} />
                  <span>خروج</span>
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all text-sm shadow-lg shadow-blue-600/20">
                  تسجيل الدخول
                </Link>
                <Link href="/register" className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all text-sm">
                  إنشاء حساب
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-6 space-y-3">
            <Link href="/" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link>
            <Link href="/about" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>من نحن</Link>
            <Link href="/blog" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>المدونة</Link>
            <Link href="/software" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>البرامج</Link>
            <Link href="/order" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>الطلب والاستفسار</Link>
            <Link href="/contact" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>اتصل بنا</Link>
            <div className="border-t border-slate-100 pt-3 mt-3 space-y-2">
              {!user && (
                <>
                  <Link href="/login" className="block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-center" onClick={() => setIsMenuOpen(false)}>تسجيل الدخول</Link>
                  <Link href="/register" className="block px-4 py-2 bg-slate-900 text-white rounded-lg font-medium text-center" onClick={() => setIsMenuOpen(false)}>إنشاء حساب</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

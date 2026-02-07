"use client";

import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { User, Mail, Calendar, LogOut, Edit, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[40px] p-12 text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <User size={40} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-4">يجب تسجيل الدخول أولاً</h2>
          <p className="text-slate-500 font-bold mb-8">لعرض حسابك الشخصي، يرجى تسجيل الدخول</p>
          <div className="flex gap-4 justify-center">
            <Link href="/login" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-colors">
              تسجيل الدخول
            </Link>
            <Link href="/register" className="px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
              إنشاء حساب
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">حسابي الشخصي</h1>
          <p className="text-slate-500 font-bold">إدارة حسابك ومعلوماتك الشخصية</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-1"
          >
            <div className="bg-white rounded-[30px] p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl">
                <User size={50} />
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-2">{user.name}</h2>
              <p className="text-sm text-slate-500 font-bold mb-6">{user.email}</p>
              <button 
                onClick={handleLogout}
                className="w-full px-6 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
              >
                <LogOut size={18} /> تسجيل الخروج
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Account Info */}
            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-slate-900">معلومات الحساب</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold hover:bg-blue-100 transition-colors text-sm">
                  <Edit size={16} /> تعديل
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <User size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">الاسم</div>
                    <div className="font-black text-slate-900">{user.name}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">البريد الإلكتروني</div>
                    <div className="font-black text-slate-900">{user.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">تاريخ التسجيل</div>
                    <div className="font-black text-slate-900">{new Date(user.createdAt).toLocaleDateString('ar-SA')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                    <Shield size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">نوع الحساب</div>
                    <div className="font-black text-slate-900">مستخدم عادي</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-xl font-black text-slate-900 mb-6">إجراءات سريعة</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/order" className="p-6 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock size={22} />
                  </div>
                  <div className="font-bold text-slate-900">طلباتي</div>
                </Link>
                <Link href="/contact" className="p-6 bg-emerald-50 hover:bg-emerald-100 rounded-2xl transition-colors text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Mail size={22} />
                  </div>
                  <div className="font-bold text-slate-900">تواصل معنا</div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

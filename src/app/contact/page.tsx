"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'استفسار عام',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to orders API for simplicity (can be separated later)
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          company: formData.name, // Use name as company for contact form
          software: 'contact'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('حدث خطأ، يرجى المحاولة مرة أخرى');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('حدث خطأ، يرجى المحاولة مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-[50px] p-16 text-center shadow-2xl border border-slate-50 shadow-slate-200"
        >
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg animate-bounce">
            <MessageSquare size={50} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6">تم إرسال رسالتك!</h2>
          <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
            شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن خلال ساعات العمل.
          </p>
          <Link 
            href="/"
            className="inline-block px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/30"
          >
            العودة للرئيسية
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-32 px-6 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
         <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      </div>
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tight">تواصل معنا</h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على جميع استفساراتك. تواصل معنا عبر أي قناة تناسبك.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="bg-white rounded-[30px] p-8 shadow-xl shadow-slate-200 border border-white hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">اتصل بنا</div>
                  <div className="text-2xl font-black text-slate-900">05xxxxxxxx</div>
                  <div className="text-sm font-bold text-slate-500">المبيعات والدعم</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-[30px] p-8 shadow-xl shadow-slate-200 border border-white hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">البريد الإلكتروني</div>
                  <div className="text-2xl font-black text-slate-900">info@nexsys.com</div>
                  <div className="text-sm font-bold text-slate-500">استفسارات عامة</div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-[30px] p-8 shadow-xl shadow-slate-200 border border-white hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">مقرنا</div>
                  <div className="text-2xl font-black text-slate-900">المملكة العربية السعودية</div>
                  <div className="text-sm font-bold text-slate-500">الرياض، حي الملقا</div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-[30px] p-8 shadow-xl shadow-slate-200 border border-white hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                  <Clock size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">ساعات العمل</div>
                  <div className="text-2xl font-black text-slate-900">السبت - الخميس</div>
                  <div className="text-sm font-bold text-slate-500">10ص - 6م</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[40px] p-10 shadow-2xl shadow-slate-200 border border-white"
          >
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-blue-500/30">
                <MessageCircle size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">أرسل لنا رسالة</h2>
              <p className="text-slate-500 font-bold">سنرد عليك في أقرب وقت</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 mr-1">الاسم الكامل</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="أدخل اسمك"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 mr-1">رقم الجوال</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    placeholder="05xxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 mr-1">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 mr-1">موضوع الرسالة</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm appearance-none"
                >
                  <option>استفسار عام</option>
                  <option>طلب عرض سعر</option>
                  <option>الدعم الفني</option>
                  <option>شراكة تجارية</option>
                  <option>وظائف</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 mr-1">الرسالة</label>
                <textarea 
                  name="message"
                  rows={5} 
                  required 
                  placeholder="اكتب رسالتك هنا..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send size={20} /> إرسال الرسالة
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

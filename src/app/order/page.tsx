"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Send, Phone, User, Building, Mail, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function OrderForm() {
  const searchParams = useSearchParams();
  const selectedSoftware = searchParams.get("software") || "accounting";
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    software: selectedSoftware,
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Send email notifications
        await fetch('/api/notify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'all',
            orderData: {
              ...formData,
              message: formData.notes
            }
          }),
        });
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
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg animate-bounce">
            <CheckCircle size={50} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6">تم استلام طلبك بنجاح!</h2>
          <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
            شكراً لاهتمامك ببرامج NexSys. سيقوم فريقنا بالتواصل معك عبر الهاتف خلال 24 ساعة لمناقشة التفاصيل وتفعيل النسخة التجريبية.
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
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
         <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="lg:w-1/3">
             <h1 className="text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">طلب شراء <br /><span className="text-blue-600">أو استشارة</span></h1>
             <p className="text-slate-500 text-lg font-medium mb-12 leading-relaxed">
                 يرجى ملء النموذج أدناه بدقة وسيقوم أحد خبراء أنظمة نكسس بالرد عليك وتقديم أفضل الحلول المناسبة لنشاطك.
             </p>
             
             <div className="space-y-8">
                <div className="flex gap-6 items-center">
                   <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600">
                      <CheckCircle2 size={24} />
                   </div>
                   <div className="font-black text-slate-800 text-lg">تحليل مجاني للاحتياجات</div>
                </div>
                <div className="flex gap-6 items-center">
                   <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600">
                      <CheckCircle2 size={24} />
                   </div>
                   <div className="font-black text-slate-800 text-lg">نسخة تجريبية 14 يوم</div>
                </div>
                <div className="flex gap-6 items-center">
                   <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600">
                      <CheckCircle2 size={24} />
                   </div>
                   <div className="font-black text-slate-800 text-lg">دعم فني مباشر</div>
                </div>
             </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-xl border border-white rounded-[40px] shadow-2xl shadow-slate-200 p-12"
            >
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 mr-1">اسم المنشأة / الشركة</label>
                  <div className="relative">
                    <Building className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      name="company"
                      required 
                      placeholder="مثال: شركة التقنية الحديثة"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 mr-1">اسم المسؤول</label>
                  <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      name="name"
                      required 
                      placeholder="الاسم الكامل"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 mr-1">البريد الإلكتروني</label>
                  <div className="relative">
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 mr-1">رقم الجوال</label>
                  <div className="relative">
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      placeholder="05xxxxxxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm" 
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-black text-slate-700 mr-1">اختر البرنامج المطلوب</label>
                  <div className="relative">
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    <select 
                      name="software"
                      value={formData.software}
                      onChange={handleChange}
                      className="w-full pr-6 pl-10 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm appearance-none"
                    >
                      <option value="accounting">NexSys Accounting Pro (المحاسبي)</option>
                      <option value="inventory">NexSys Inventory (المخازن)</option>
                      <option value="pos">NexSys POS Retail (نقاط البيع)</option>
                      <option value="erp">NexSys ERP Enterprise (الشامل)</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-black text-slate-700 mr-1">ملاحظات إضافية</label>
                  <textarea 
                    name="notes"
                    rows={4} 
                    placeholder="هل لديك متطلبات خاصة؟"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none shadow-sm"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-5 rounded-[20px] font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        إرسال طلبك الآن <Send size={24} />
                      </>
                    )}
                  </button>
                  <p className="text-center mt-6 text-slate-400 font-bold text-sm italic">سيتم معالجة بياناتك بسرية تامة وتوجيهها للقسم المختص.</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-black text-blue-600 animate-pulse">جاري التحميل...</div>}>
      <OrderForm />
    </Suspense>
  );
}

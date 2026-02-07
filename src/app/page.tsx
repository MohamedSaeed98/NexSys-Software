"use client";

import { motion } from "framer-motion";
import { 
  Shield, BarChart3, Package, CheckCircle2, Smartphone, 
  Clock, ArrowLeft, Users, Trophy, Target, Headphones,
  Monitor, Globe, Laptop, Database, PenTool, ShoppingCart,
  Stethoscope, GraduationCap, FileCheck, LayoutDashboard, ChevronRight
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center px-4 md:px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-slate-900/90 to-slate-900/60 z-10" />
          <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse delay-700" />
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 text-white md:text-right">
          <div className="md:w-3/5 mr-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-blue-600/20 border border-blue-500/30 backdrop-blur-md inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-8 uppercase tracking-wider text-blue-400"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              أقوى أنظمة ERP في الوطن العربي
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 leading-tight"
            >
              مستقبل أعمالك <br />
              يبدأ مع <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">NexSys</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-xl text-slate-400 mb-6 md:mb-10 max-w-2xl leading-relaxed"
            >
              حوّل رؤيتك إلى واقع مع أنظمة برمجية ذكية، معتمدة، وسهلة الاستخدام. صُممت خصيصاً لتلبية احتياجات السوق السعودي والخليجي.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <Link href="/software" className="px-5 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 text-sm md:text-base">
                استكشف حلولنا <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link href="/contact" className="px-5 py-3 md:px-8 md:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white rounded-xl font-bold transition-all text-sm md:text-base">
                طلب نسخة تجريبية
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Icon */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute left-2 md:left-10 bottom-10 md:bottom-20 hidden lg:block opacity-20"
        >
          <Database className="w-24 h-24 md:w-40 md:h-40 text-blue-500" strokeWidth={1} />
        </motion.div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-12">
            {[
              { label: "سنوات خبرة", val: "12+", icon: Trophy, color: "text-amber-500", bg: "bg-amber-50" },
              { label: "عميل نشط", val: "5000+", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
              { label: "حل برمجي", val: "15+", icon: Database, color: "text-indigo-500", bg: "bg-indigo-50" },
              { label: "دعم فني", val: "24/7", icon: Headphones, color: "text-emerald-500", bg: "bg-emerald-50" },
              { label: "دولة", val: "8", icon: Globe, color: "text-rose-500", bg: "bg-rose-50" },
            ].map((stat, i) => (
              <motion.div key={i} initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.7 }} className="relative group text-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">{stat.val}</div>
                  <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOFTWARE CATEGORIES */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 hidden md:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">حلول برمجية متكاملة</motion.h2>
            <motion.p initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg mt-2 md:mt-4">نحن نوفر حلولاً ذكية تناسب جميع القطاعات والمجالات التجارية والصناعية، مع دعم كامل للفاتورة الإلكترونية.</motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "نظام NexSys ERP", icon: LayoutDashboard, desc: "إدارة الموارد المتكاملة للشركات الكبرى والمتوسطة، يغطي جميع الجوانب الإدارية والمالية.", bg: "bg-blue-600", text: "text-white", lightBg: "bg-blue-50" },
              { title: "المحاسبة ونقاط البيع", icon: ShoppingCart, desc: "أفضل برنامج محاسبي للمحلات والمخازن والمطاعم مع سرعة فائقة في معالجة العمليات.", bg: "bg-orange-500", text: "text-white", lightBg: "bg-orange-50" },
              { title: "إدارة المراكز الطبية", icon: Stethoscope, desc: "نظام متكامل للعيادات، المختبرات، وإدارة ملفات المرضى والحجوزات بدقة متناهية.", bg: "bg-emerald-500", text: "text-white", lightBg: "bg-emerald-50" },
              { title: "نظام إدارة المدارس", icon: GraduationCap, desc: "نظام تعليمي ذكي يربط الإدارة، المدرسين، والطلاب ويسهل العملية التعليمية.", bg: "bg-purple-500", text: "text-white", lightBg: "bg-purple-50" },
              { title: "الفاتورة الإلكترونية", icon: FileCheck, desc: "تطبيق معتمد للربط مع هيئة الزكاة والضريبة والجمارك (المرحلة الأولى والثانية).", bg: "bg-rose-500", text: "text-white", lightBg: "bg-rose-50" },
              { title: "برنامج شركات الشحن", icon: Package, desc: "إدارة المناديب، التوصيل، وحسابات التجار بذكاء مع تتبع لحظي للشحنات.", bg: "bg-indigo-500", text: "text-white", lightBg: "bg-indigo-50" },
            ].map((item, i) => (
              <motion.div key={i} initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.7 }} className="group cursor-pointer">
                <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-[30px] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-20 h-20 ${item.lightBg} opacity-20 rounded-bl-full -mr-5 -mt-5 group-hover:scale-150 transition-transform duration-700`} />
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 ${item.bg} ${item.text} shadow-lg group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                    <item.icon className="w-7 h-7 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-5 text-slate-900 relative z-10">{item.title}</h3>
                  <p className="text-slate-500 text-xs md:text-base leading-relaxed mb-4 md:mb-6 relative z-10">{item.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-xs md:text-sm relative z-10">
                    <span className="group-hover:mr-2 transition-all">اكتشف المميزات</span>
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY US */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute inset-0" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center relative z-10">
          <div className="lg:w-1/2">
            <motion.h2 initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.7 }} className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 leading-tight">
              لماذا يختار الخبراء <br />
              أنظمة <span className="text-blue-500">نكسس؟</span>
            </motion.h2>
            <div className="space-y-6 md:space-y-10">
              {[
                { n: "01", t: "تحليل ذكي للاحتياجات", d: "لا نبيع برامج فحسب، بل نبني حلولاً مخصصة تبدأ بفهم عميق لدورة عملك المحاسبية والإدارية." },
                { n: "02", t: "تطبيق هندسي دقيق", d: "يقوم مهندسونا بتركيب وتهيئة النظام ليناسب حجم بياناتك، مع ضمان أعلى درجات الأداء والاستقرار." },
                { n: "03", t: "شراكة نجاح مستدامة", d: "دعم فني وتدريب مستمر يضمن لك الاستفادة القصوى من كل خاصية في البرنامج على مدار الساعة." },
              ].map((step, i) => (
                <motion.div key={i} initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.7, delay: i * 0.1 }} className="flex gap-4 md:gap-6 group">
                  <div className="text-3xl md:text-5xl font-bold text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500">{step.n}</div>
                  <div>
                    <h4 className="text-lg md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{step.t}</h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{step.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 relative mt-8 md:mt-0">
             <div className="absolute inset-0 bg-blue-600/20 blur-[60px] md:blur-[100px] rounded-full" />
             <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-[40px] text-center border border-white/5 relative z-10">
                <Monitor className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-blue-500" />
                <div className="text-lg md:text-xl font-bold">واجهات متطورة</div>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-[40px] text-center border border-white/5 mt-6 md:mt-12 relative z-10">
                <Database className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-emerald-500" />
                <div className="text-lg md:text-xl font-bold">أمان البيانات</div>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-[40px] text-center border border-white/5 -mt-6 md:-mt-12 relative z-10">
                <Smartphone className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-orange-500" />
                <div className="text-lg md:text-xl font-bold">دعم السحابة</div>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/50 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-[40px] text-center border border-white/5 relative z-10">
                <Shield className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-rose-500" />
                <div className="text-lg md:text-xl font-bold">تشفير كامل</div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CLIENT LOGOS */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 md:mb-4">شركاء النجاح</h3>
            <p className="text-lg md:text-2xl font-bold text-slate-800">أكثر من 5000 مؤسسة تثق بنا حول العالم</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['شركة 1', 'شركة 2', 'شركة 3', 'شركة 4', 'شركة 5'].map((logo, i) => (
              <div key={i} className="px-6 py-3 bg-white rounded-lg shadow font-bold text-slate-600 text-sm md:text-base">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
           <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl md:rounded-[60px] p-6 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-lg md:shadow-[0_40px_100px_rgba(37,99,235,0.3)]">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
           <div className="absolute -top-16 -right-16 w-40 h-40 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
           <div className="absolute -bottom-16 -left-16 w-40 h-40 md:w-64 md:h-64 bg-blue-400/20 rounded-full blur-3xl" />
           
           <div className="relative z-10 text-center">
               <motion.h2 initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.7 }} className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 tracking-tight">جاهز لرقمنة أعمالك؟</motion.h2>
               <motion.p initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.7, delay: 0.2 }} className="text-sm md:text-xl mb-8 md:mb-14 max-w-3xl mx-auto leading-relaxed opacity-90">
                   انضم إلى آلاف الشركات التي طورت أعمالها باستخدام أنظمة نكسس. احصل على عرض توضيحي مجاني مخصص لنشاطك التجاري الآن.
               </motion.p>
               <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap justify-center gap-4 md:gap-6">
                   <Link href="/order" className="px-6 py-3 md:px-10 md:py-5 bg-white text-blue-600 rounded-xl md:rounded-2xl font-bold text-sm md:text-xl hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2">
                     ابدأ الآن <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                   </Link>
                   <Link href="/contact" className="px-6 py-3 md:px-10 md:py-5 bg-slate-900/40 backdrop-blur-md border border-white/20 text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-xl hover:bg-slate-900 transition-all">
                     تواصل معنا
                   </Link>
               </motion.div>
           </div>
        </div>
      </section>

    </main>
  );
}

import { Metadata } from 'next';
import { CheckCircle2, ShoppingCart, BarChart3, Users, Database, ArrowLeft, Star, ShieldCheck, Zap, Clock, Phone, Mail, DollarSign, TrendingUp, Building, Store, Stethoscope, GraduationCap, FileText, Cloud, Smartphone, Printer, CreditCard } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'حلولنا البرمجية | NexSys Software',
  description: 'اكتشف مجموعة NexSys الشاملة من البرمجيات: أنظمة المحاسبة، المخزون، نقاط البيع، ERp، العيادات، والمدارس. حلول متكاملة لنجاح عملك.',
  keywords: 'برامج محاسبة, نظام ERP, نقاط بيع, برنامج مخازن, برنامج عيادات, برنامج مدارس',
};

const softwareList = [
  {
    id: "accounting",
    title: "NexSys المحاسبة",
    tagline: "النظام المحاسبي الأكثر دقة في المنطقة",
    shortDesc: "نظام محاسبي متكامل يدعم ضريبة القيمة المضافة",
    description: "نظام محاسبي متكامل يدعم ضريبة القيمة المضافة، القيود اليومية، والتقارير المالية الختامية المتوافقة مع معايير هيئة الزكاة والدخل. مصمم خصيصاً للشركات السعودية والخليجية.",
    features: [
      "إدارة القيود والسندات المحاسبية",
      "تقارير ضريبة القيمة المضافة VAT",
      "ميزانية عمومية وقوائم مالية",
      "مركز التكلفة والأقسام",
      "حسابات مدينة ودائنة متعددة",
      "تقارير تحليلية متقدمة",
      "دعم الفروع المتعددة",
      "نسخ احتياطي تلقائي"
    ],
    icon: BarChart3,
    color: "emerald",
    bg: "bg-emerald-50",
    accent: "bg-emerald-600",
    plans: [
      { name: "المبتدئ", price: "299", period: "شهرياً", features: ["مستخدم واحد", "100 صنف", "تقارير أساسية", "دعم email"] },
      { name: "المتقدم", price: "599", period: "شهرياً", features: ["5 مستخدمين", "صنوف غير محدودة", "تقارير متقدمة", "دعم هاتفي", "API وصول"] },
      { name: "المؤسسي", price: "999", period: "شهرياً", features: ["مستخدمين غير محدودين", "جميع الميزات", "دعم 24/7", "تدريب مجاني", "تخصيص كامل"] }
    ],
    suitable: ["الشركات الصغيرة", "المؤسسات الفردية", "المكاتب المحاسبية"]
  },
  {
    id: "inventory",
    title: "NexSys المخزون",
    tagline: "تحكم ذكي ومستمر في مستودعاتك",
    shortDesc: "نظام متكامل لإدارة المخزون والمستودعات",
    description: "تحكم كامل في مستودعاتك، تتبع حركة الأصناف، وإدارة الموردين والطلبيات مع نظام باركود متطور وتنبيهات ذكية للحفاظ على مستويات المخزون المثلى.",
    features: [
      "إدارة تعدد المستودعات",
      "نظام باركود متطور",
      "جرد آلي وحقيقي",
      "تنبيهات الحد الأدنى",
      "تتبع حركة الأصناف",
      "إدارة الموردين والطلبيات",
      "تقارير دوران المخزون",
      "ربط بالفواتير"
    ],
    icon: Database,
    color: "blue",
    bg: "bg-blue-50",
    accent: "bg-blue-600",
    plans: [
      { name: "المبتدئ", price: "199", period: "شهرياً", features: ["مستودع واحد", "500 صنف", "باركود أساسي", "دعم email"] },
      { name: "المتقدم", price: "399", period: "شهرياً", features: ["3 مستودعات", "صنوف غير محدودة", "باركود متقدم", "تنبيهات ذكية", "API وصول"] },
      { name: "المؤسسي", price: "699", period: "شهرياً", features: ["مستودعات غير محدودة", "جميع الميزات", "تطبيق جوال", "دعم 24/7", "تخصيص"] }
    ],
    suitable: ["شركات التجارة", "المصانع", "المتاجر الإلكترونية"]
  },
  {
    id: "pos",
    title: "NexSys نقاط البيع",
    tagline: "سرعة وسهولة في كل عملية بيع",
    shortDesc: "نظام نقاط بيع متكامل للتجزئة والمطاعم",
    description: "نظام نقاط بيع سريع وسهل الاستخدام لمحلات التجزئة والمطاعم مع دعم العمل بدون إنترنت ومزامنة سحابية فورية. واجهة لمس سريعة وإدارة متعددة الفروع.",
    features: [
      "واجهة لمس سريعة وسهلة",
      "دعم العمل بدون إنترنت",
      "مزامنة سحابية فورية",
      "دعم طابعات الفواتير",
      "إدارة العروض والخصومات",
      "تقارير مبيعات لحظية",
      "إدارة المخزون تلقائي",
      "دعم بطاقات الولاء"
    ],
    icon: ShoppingCart,
    color: "orange",
    bg: "bg-orange-50",
    accent: "bg-orange-600",
    plans: [
      { name: "المحل الواحد", price: "149", period: "شهرياً", features: ["نقطة بيع واحدة", "1000 صنف", "فاتورة عادية", "دعمemail"] },
      { name: "السلسلة", price: "399", period: "شهرياً", features: ["5 نقاط بيع", "صنوف غير محدودة", "فاتورة ضريبية", "تقارير مركزية"] },
      { name: "المطاعم", price: "599", period: "شهرياً", features: ["فروع غير محدودة", "طاولات وخوادم", "مطبخ إلكتروني", "دعم 24/7"] }
    ],
    suitable: ["محلات التجزئة", "المطاعم", "الكافيهات", "محطات الوقود"]
  },
  {
    id: "clinic",
    title: "NexSys العيادات",
    tagline: "إدارة متكاملة للملفات والسجلات الطبية",
    shortDesc: "نظام شامل لإدارة العيادات والمستشفيات",
    description: "نظام متكامل لإدارة العيادات والمستشفيات يتضمن ملفات المرضى، المواعيد، الفواتير، والمخزون الطبي. متوافق مع متطلبات وزارة الصحة السعودية.",
    features: [
      "إدارة ملفات المرضى الإلكترونية",
      "نظام مواعيد ذكي",
      "فواتير وضرائب طبية",
      "مخزون صيدلية",
      "تقارير طبية وإحصائيات",
      "ربط بالمختبرات والأشعة",
      "تذكيرات تلقائية",
      "دعم التأمين الصحي"
    ],
    icon: Stethoscope,
    color: "red",
    bg: "bg-red-50",
    accent: "bg-red-600",
    plans: [
      { name: "العيادة الصغيرة", price: "399", period: "شهرياً", features: ["3 أطباء", "500 مريض", "مواعيد", "فواتير"] },
      { name: "المجمع الطبي", price: "799", period: "شهرياً", features: ["10 أطباء", "مرضى غير محدودين", "صيدلية", "مختبر"] },
      { name: "المستشفى", price: "1,499", period: "شهرياً", features: ["أطباء غير محدودين", "غرف وأسرّة", "طوارئ", "عمليات"] }
    ],
    suitable: ["العيادات الخاصة", "مراكز التجميل", "مراكز العلاج الطبيعي", "المستشفيات"]
  },
  {
    id: "school",
    title: "NexSys المدارس",
    tagline: "نظام متكامل لإدارة المؤسسات التعليمية",
    shortDesc: "إدارة شاملة للطلاب والمعلمين والمناهج",
    description: "نظام متكامل لإدارة المدارس يشمل القبول والتسجيل، الجداول، الحضور، الدرجات، والنتائج. مصمم خصيصاً للمدارس السعودية.",
    features: [
      "إدارة القبول والتسجيل",
      "جدولة الحصص الذكية",
      "متابعة الحضور والغياب",
      "درجات واختبارات",
      "تقارير أولياء الأمور",
      "إدارة المعلمين",
      "مكتبة رقمية",
      "مالية متكاملة"
    ],
    icon: GraduationCap,
    color: "purple",
    bg: "bg-purple-50",
    accent: "bg-purple-600",
    plans: [
      { name: "المدرسة الصغيرة", price: "499", period: "شهرياً", features: ["500 طالب", "20 معلم", "أساسيات", "دعمemail"] },
      { name: "المدرسة الكبيرة", price: "999", period: "شهرياً", features: ["2000 طالب", "معلمين غير محدودين", "جميع الميزات", "تطبيق أولياء أمور"] },
      { name: "المجموعة التعليمية", price: "1,999", period: "شهرياً", features: ["فروع متعددة", "تقارير مركزية", "دعم 24/7", "تخصيص"] }
    ],
    suitable: ["المدارس الخاصة", "المراكز التعليمية", "معاهد التدريب", "الجامعات"]
  },
  {
    id: "erp",
    title: "NexSys ERP المؤسسي",
    tagline: "الحل الشامل لربط جميع أقسام شركتك",
    shortDesc: "نظام متكامل لإدارة المؤسسة بالكامل",
    description: "الحل الشامل الذي يربط جميع أقسام شركتك في نظام واحد متكامل: المحاسبة، المخزون، الموارد البشرية، والمبيعات. مع لوحة تحكم إدارية متطورة.",
    features: [
      "ربط الفروع والمستودعات",
      "إدارة شؤون الموظفين",
      "نظام صلاحيات متقدم",
      "API تكامل مفتوح",
      "لوحة تحكم إدارية",
      "تقارير ذكية",
      "أتمتة العمليات",
      "دعم القرارات"
    ],
    icon: Building,
    color: "indigo",
    bg: "bg-indigo-50",
    accent: "bg-indigo-600",
    plans: [
      { name: "البدء", price: "1,499", period: "شهرياً", features: ["10 مستخدمين", "الأساسيات", "تقارير", "دعمemail"] },
      { name: "النمو", price: "2,999", period: "شهرياً", features: ["50 مستخدم", "جميع الميزات", "API", "تدريب"] },
      { name: "المؤسسي", price: "5,999", period: "شهرياً", features: ["مستخدمين غير محدودين", "تخصيص كامل", "دعم 24/7", "تنفيذ محلي"] }
    ],
    suitable: ["الشركات المتوسطة", "الشركات الكبرى", "المؤسسات الحكومية", "المجموعات التجارية"]
  }
];

const comparisons = [
  { feature: "واجهة عربية كاملة", basic: true, pro: true, enterprise: true },
  { feature: "دعم ضريبة القيمة المضافة", basic: true, pro: true, enterprise: true },
  { feature: "تطبيق جوال", basic: false, pro: true, enterprise: true },
  { feature: "ربط API", basic: false, pro: true, enterprise: true },
  { feature: "دعم فني 24/7", basic: false, pro: false, enterprise: true },
  { feature: "تدريب مجاني", basic: false, pro: true, enterprise: true },
  { feature: "تخصيص كامل", basic: false, pro: false, enterprise: true },
  { feature: "تنفيذ محلي", basic: false, pro: false, enterprise: true },
];

export default function SoftwarePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      {/* Hero Section */}
      <div className="bg-slate-900 py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
            <Star size={14} className="fill-current" /> حلولنا البرمجية المتكاملة
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            قوة البرمجيات
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              في يدك
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متكاملة من البرمجيات المصممة خصيصاً لاحتياجات السوق السعودي والخليجي. 
            حلول متكاملة، سهلة الاستخدام، ومدعومة بفريق خبراء متخصص.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText size={24} className="text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">6+</div>
                <div className="text-sm text-slate-500">برنامج متخصص</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Users size={24} className="text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">5,000+</div>
                <div className="text-sm text-slate-500">عميل نشط</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">12+</div>
                <div className="text-sm text-slate-500">سنوات خبرة</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Phone size={24} className="text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-500">دعم فني</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Software Cards */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">اختر البرنامج المناسب لعملك</h2>
          <p className="text-lg text-slate-600">كل برنامج يأتي بخطط متعددة تناسب احتياجاتك وميزانيتك</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareList.map((software) => (
            <div key={software.id} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 flex flex-col group">
              {/* Header */}
              <div className={`p-8 ${software.bg} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${software.accent} text-white flex items-center justify-center shadow-lg`}>
                    <software.icon size={32} />
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1">
                      <ShieldCheck size={12} className="text-blue-500" /> معتمد
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 relative z-10">{software.title}</h3>
                <p className="text-sm font-medium text-slate-500 relative z-10">{software.tagline}</p>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {software.shortDesc}
                </p>

                {/* Features Preview */}
                <div className="space-y-3 mb-6">
                  {software.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-600 text-sm font-medium">
                      <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center ml-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-slate-900">من</span>
                    <span className="text-4xl font-black text-blue-600">{software.plans[0].price}</span>
                    <span className="text-slate-500">ريال/{software.plans[0].period}</span>
                  </div>

                  <Link href={`/order?software=${software.id}`} className={`w-full py-4 ${software.accent} text-white rounded-xl font-bold text-center block hover:opacity-90 transition-opacity`}>
                    جربه مجاناً 14 يوم
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">قارن بين الخطط</h2>
          <p className="text-lg text-slate-600">اختر الخطة التي تناسب احتياجاتك</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="grid grid-cols-4 border-b border-slate-100">
            <div className="p-6 font-bold text-slate-900 text-right">الميزة</div>
            <div className="p-6 font-bold text-slate-900 text-center bg-slate-50">الأساسي</div>
            <div className="p-6 font-bold text-blue-600 text-center bg-blue-50">المتقدم</div>
            <div className="p-6 font-bold text-indigo-600 text-center bg-indigo-50">المؤسسي</div>
          </div>
          {comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-4 border-b border-slate-50">
              <div className="p-4 text-slate-600 text-sm font-medium text-right">{row.feature}</div>
              <div className="p-4 text-center bg-slate-50">
                {row.basic ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-slate-300">-</span>}
              </div>
              <div className="p-4 text-center bg-blue-50">
                {row.pro ? <CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto" /> : <span className="text-slate-300">-</span>}
              </div>
              <div className="p-4 text-center bg-indigo-50">
                {row.enterprise ? <CheckCircle2 className="w-5 h-5 text-indigo-500 mx-auto" /> : <span className="text-slate-300">-</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl shadow-blue-500/30">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">هل تحتاج مساعدة في اختيار البرنامج؟</h3>
        <p className="text-lg opacity-80 mb-8">فريقنا جاهز لمساعدتك في اختيار الحل الأنسب لعملك</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
            <Phone size={20} />
            تحدث مع خبير
          </Link>
          <a href="mailto:sales@nexsys.com" className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition-colors flex items-center gap-2 border border-blue-500">
            <Mail size={20} />
            راسلنا
          </a>
        </div>
      </div>

      {/* Custom Development */}
      <div className="max-w-5xl mx-auto mt-16 px-6">
        <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap size={32} className="text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">هل تحتاج حل مخصص؟</h3>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            نقدم خدمة تطوير برمجيات مخصصة حسب متطلباتك الفريدة. فريقنا من الخبراء مستعد لتنفيذ أفكارك.
          </p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
            اطلب عرضاً سعراً مخصصاً
          </Link>
        </div>
      </div>
    </div>
  );
}

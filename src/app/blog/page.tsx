import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Eye, MessageCircle, Share2, Calendar, Tag, TrendingUp, BookOpen, Code, Shield, Zap, BarChart3, Cloud, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'المدونة التقنية | NexSys Software',
  description: 'مقالات حصرية حول البرمجة، إدارة الأعمال، التقنيات الحديثة، وأفضل الممارسات في مجال البرمجيات والأعمال.',
  keywords: 'مدونة, برمجة, تقنية, أعمال, ERP, محاسبة, إدارة',
};

const articles = [
  {
    id: 1,
    title: "كيف تختار نظام ERP المناسب لشركتك؟",
    excerpt: "دليل شامل لاختيار نظام تخطيط موارد المؤسسات الذي يناسب حجم عملك ومتطلباتك الخاصة.",
    category: "أعمال",
    author: "أحمد محمد",
    date: "2026-02-05",
    readTime: "8 دقائق",
    views: 1250,
    image: "/blog-erp.jpg",
    tags: ["ERP", "إدارة الأعمال", "تقنية"],
    featured: true
  },
  {
    id: 2,
    title: "أفضل الممارسات لتأمين بيانات شركتك",
    excerpt: "تعرف على أهم الإجراءات الأمنية لحماية بياناتك من الاختراق والسرقة.",
    category: "أمن",
    author: "خالد عمر",
    date: "2026-02-03",
    readTime: "6 دقائق",
    views: 890,
    image: "/blog-security.jpg",
    tags: ["أمن المعلومات", "بيانات", "حماية"],
    featured: false
  },
  {
    id: 3,
    title: "مستقبل البرمجة في السعودية 2026",
    excerpt: "استعراض لأحدث اتجاهات البرمجة والتقنيات الناشئة في المملكة العربية السعودية.",
    category: "برمجة",
    author: "سارة عبدالله",
    date: "2026-02-01",
    readTime: "10 دقائق",
    views: 2100,
    image: "/blog-coding.jpg",
    tags: ["برمجة", "تقنية", "سعودية"],
    featured: true
  },
  {
    id: 4,
    title: "الفرق بين نظام المحاسبة ونظام ERP",
    excerpt: "فهم الفروق الجوهرية بين النظامين واختيار الأنسب لاحتياجات عملك.",
    category: "أعمال",
    author: "أحمد محمد",
    date: "2026-01-28",
    readTime: "7 دقائق",
    views: 780,
    image: "/blog-accounting.jpg",
    tags: ["محاسبة", "ERP", "مقارنة"],
    featured: false
  },
  {
    id: 5,
    title: "كيفية تحويل شركتك للعمل الرقمي",
    excerpt: "خطوات عملية للانتقال من العمل التقليدي إلى الرقمي بنجاح.",
    category: "تحول رقمي",
    author: "نورة سعيد",
    date: "2026-01-25",
    readTime: "12 دقائق",
    views: 1560,
    image: "/blog-digital.jpg",
    tags: ["تحول رقمي", "أعمال", "تطوير"],
    featured: false
  },
  {
    id: 6,
    title: "أهمية النسخ الاحتياطي للبيانات",
    excerpt: "لماذا يعتبر النسخ الاحتياطي ضرورة وليس خياراً للشركات في العصر الرقمي؟",
    category: "أمن",
    author: "خالد عمر",
    date: "2026-01-20",
    readTime: "5 دقائق",
    views: 650,
    image: "/blog-backup.jpg",
    tags: ["نسخ احتياطي", "بيانات", "أمان"],
    featured: false
  },
  {
    id: 7,
    title: "دليل اختيار برنامج نقاط البيع المناسب",
    excerpt: "ما الذي يجب مراعاته عند اختيار نظام نقاط البيع لمتجرك أو مطاعم؟",
    category: "تجارة",
    author: "سارة عبدالله",
    date: "2026-01-15",
    readTime: "9 دقائق",
    views: 980,
    image: "/blog-pos.jpg",
    tags: ["نقاط بيع", "تجارة", "تجزئة"],
    featured: false
  },
  {
    id: 8,
    title: "الذكاء الاصطناعي في إدارة الأعمال",
    excerpt: "كيف يستفيد أصحاب الأعمال من الذكاء الاصطناعي في تحسين العمليات وزيادة الأرباح.",
    category: "تقنية",
    author: "أحمد محمد",
    date: "2026-01-10",
    readTime: "11 دقائق",
    views: 2340,
    image: "/blog-ai.jpg",
    tags: ["ذكاء اصطناعي", "أعمال", "تقنية"],
    featured: true
  }
];

const categories = [
  { name: "أعمال", icon: BarChart3, count: 24 },
  { name: "برمجة", icon: Code, count: 18 },
  { name: "أمن", icon: Shield, count: 12 },
  { name: "تقنية", icon: Zap, count: 32 },
  { name: "تحول رقمي", icon: Cloud, count: 15 },
  { name: "تجارة", icon: Smartphone, count: 9 },
];

const featuredArticle = articles.find(a => a.featured);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen size={14} /> المدونة التقنية
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            آخر المقالات
            <span className="block text-2xl md:text-3xl font-medium text-slate-400 mt-2">
              والأخبار التقنية
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            مقالات حصرية من خبراء NexSys حول البرمجة، إدارة الأعمال، التقنيات الحديثة، وأفضل الممارسات.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <BookOpen size={20} className="text-blue-600" />
              <span className="font-bold text-slate-900">150+</span>
              <span className="text-slate-500">مقال</span>
            </div>
            <div className="flex items-center gap-3">
              <User size={20} className="text-blue-600" />
              <span className="font-bold text-slate-900">12</span>
              <span className="text-slate-500">كاتب متخصص</span>
            </div>
            <div className="flex items-center gap-3">
              <Eye size={20} className="text-blue-600" />
              <span className="font-bold text-slate-900">50,000+</span>
              <span className="text-slate-500">مشاهدة</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp size={20} className="text-blue-600" />
              <span className="font-bold text-slate-900">محدثة</span>
              <span className="text-slate-500">يومياً</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-12">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50">
                  <div className="h-80 bg-gradient-to-br from-blue-600 to-indigo-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen size={64} className="text-white/30" />
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        مقال مميز
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">{featuredArticle.category}</span>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {featuredArticle.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {featuredArticle.readTime}</span>
                    </div>
                    <Link href={`/blog/${featuredArticle.id}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors">
                        {featuredArticle.title}
                      </h2>
                    </Link>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                          <User size={20} className="text-slate-500" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{featuredArticle.author}</div>
                          <div className="text-sm text-slate-500">كاتب متخصص</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Eye size={16} /> {featuredArticle.views}
                        </span>
                        <Link href={`/blog/${featuredArticle.id}`} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                          اقرأ المزيد
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {articles.filter(a => !a.featured).map((article) => (
                <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code size={40} className="text-slate-400" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-600">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                    </div>
                    <Link href={`/blog/${article.id}`}>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <User size={14} className="text-slate-500" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Eye size={12} /> {article.views}
                        </span>
                        <button className="text-blue-500 hover:text-blue-600">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">
                تحميل المزيد من المقالات
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50">
              <h3 className="font-bold text-slate-900 mb-4">بحث في المقالات</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="ابحث عن موضوع..." 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <button className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50">
              <h3 className="font-bold text-slate-900 mb-4">التصنيفات</h3>
              <div className="space-y-3">
                {categories.map((cat, index) => (
                  <Link 
                    key={index} 
                    href={`/blog/category/${cat.name}`}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon size={18} />
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <span className="text-sm text-slate-500 bg-white px-2 py-1 rounded-lg">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50">
              <h3 className="font-bold text-slate-900 mb-4">الأكثر قراءة</h3>
              <div className="space-y-4">
                {articles.slice(0, 3).map((article, index) => (
                  <Link 
                    key={index}
                    href={`/blog/${article.id}`}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {article.title}
                      </h4>
                      <span className="text-xs text-slate-500">{article.views} مشاهدة</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50">
              <h3 className="font-bold text-slate-900 mb-4">الكلمات الدلالية</h3>
              <div className="flex flex-wrap gap-2">
                {["ERP", "محاسبة", "أمن", "برمجة", "بيانات", "سحابة", "ذكاء اصطناعي", "تحول رقمي", "نقاط بيع", "تخزين"].map((tag, index) => (
                  <Link 
                    key={index}
                    href={`/blog/tag/${tag}`}
                    className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <h3 className="font-bold">النشرة البريدية</h3>
              </div>
              <p className="text-sm text-blue-100 mb-4">
                اشترك لتصلك آخر المقالات والأخبار التقنية
              </p>
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-blue-200 focus:outline-none focus:border-white"
              />
              <button className="w-full mt-3 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

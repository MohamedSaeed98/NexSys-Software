import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Target, Award, Clock, CheckCircle, Star, TrendingUp, Shield, Lightbulb, Heart, Globe, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'من نحن | NexSys Software - قصتنا ورؤيتنا',
  description: 'تعرف على NexSys Software، الشركة الرائدة في تقديم الحلول البرمجية المتكاملة في المملكة العربية السعودية. نقدم حلول ERP ونقاط البيع وإدارة العيادات والمدارس.',
  keywords: 'من نحن, NexSys, برمجيات السعودية, حلول ERP, أنظمة محاسبية',
};

export default function AboutPage() {
  const stats = [
    { icon: Clock, value: '12+', label: 'سنوات خبرة', color: 'amber' },
    { icon: Users, value: '5,000+', label: 'عميل نشط', color: 'blue' },
    { icon: Award, value: '50+', label: 'جائزة ومشروع', color: 'emerald' },
    { icon: TrendingUp, value: '98%', label: 'نسبة النجاح', color: 'indigo' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'الابتكار',
      description: 'نسعى دائماً لتقديم أحدث التقنيات والحلول المبتكرة التي تواكب التطور التقني المتسارع',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في كل مرحلة من مراحل تطوير وتطبيق أنظمتنا',
      color: 'emerald'
    },
    {
      icon: Heart,
      title: 'العملاء أولاً',
      description: 'رضا عملائنا هو أولويتنا القصوى، ونبذل قصارى جهدنا لتلبية توقعاتهم',
      color: 'rose'
    },
    {
      icon: Globe,
      title: 'المحلية',
      description: 'فهم عميق لاحتياجات السوق السعودي والخليجي والمتطلبات الضريبية المحلية',
      color: 'cyan'
    },
    {
      icon: Zap,
      title: 'السرعة',
      description: 'نقدم حلولاً سريعة وفعالة تناسب متطلبات أعمالك دون تأخير',
      color: 'amber'
    },
    {
      icon: Target,
      title: 'الدقة',
      description: 'نضمن دقة البيانات والتقارير لإتخاذ قرارات أعمال صائبة ومبنية على معلومات موثوقة',
      color: 'violet'
    },
  ];

  const team = [
    {
      name: 'أحمد محمد',
      role: 'المؤسس والرئيس التنفيذي',
      bio: 'خبرة 15 عاماً في إدارة المشاريع البرمجية والتقنية',
      image: '/team-ceo.jpg',
    },
    {
      name: 'سارة عبدالله',
      role: 'مديرة تطوير الأعمال',
      bio: 'خبرة 10 سنوات في التسويق وبيع الحلول التقنية',
      image: '/team-director.jpg',
    },
    {
      name: 'خالد عمر',
      role: 'مدير التقنية',
      bio: 'متخصص في أنظمة ERP والذكاء الاصطناعي',
      image: '/team-tech.jpg',
    },
    {
      name: 'نورة سعيد',
      role: 'مديرة دعم العملاء',
      bio: 'خبرة 8 سنوات في خدمة العملاء وإدارة الدعم الفني',
      image: '/team-support.jpg',
    },
  ];

  const milestones = [
    { year: '2012', title: 'البداية', description: 'تأسيس الشركة بفريق من 5 أشخاص' },
    { year: '2015', title: 'التوسع', description: 'إطلاق أول نظام ERP متكامل' },
    { year: '2018', title: 'الريادة', description: '500 عميل نشط في المملكة' },
    { year: '2020', title: 'الابتكار', description: 'إطلاق نظام نقاط البيع والسحابة' },
    { year: '2023', title: 'التميز', description: 'جائزة أفضل شركة برمجيات خليجية' },
    { year: '2025', title: 'الريادة', description: '5,000+ عميل ونظام NexSys ERP' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-slate-900/95 to-slate-900/80 z-10"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-blue-400 mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            من نحن
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            NexSys Software
            <span className="block text-2xl md:text-3xl font-medium text-slate-400 mt-2">
              شريكك نحو النجاح الرقمي
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            نحن شركة سعودية رائدة في تقديم الحلول البرمجية المتكاملة، متخصصون في أنظمة ERP، 
            نقاط البيع، وإدارة العيادات والمدارس. منذ عام 2012، نحن شريك النجاح الرقمي لآلاف الشركات.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-30 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    stat.color === 'amber' ? 'bg-amber-50 text-amber-500' :
                    stat.color === 'blue' ? 'bg-blue-50 text-blue-500' :
                    stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-500' :
                    'bg-indigo-50 text-indigo-500'
                  }`}>
                    <stat.icon size={28} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">قصتنا</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  بدأت NexSys Software في عام 2012 برؤية طموحة: تقديم حلول برمجية محلية تلبي احتياجات 
                  الشركات السعودية والخليجية بطريقة مبسطة وفعالة.
                </p>
                <p>
                  في البداية، بدأنا بفريق صغير من المطورين المتحمسين الذين آمنوا بأن التقنية يمكن أن 
                  تحدث فرقاً حقيقياً في إدارة الأعمال. مع مرور السنين، نما فريقنا وتطورت حلولنا 
                  لتصبح من أقوى أنظمة ERP في المنطقة.
                </p>
                <p>
                  اليوم، نفخر بخدمة أكثر من 5,000 عميل نشط في مختلف القطاعات: التجزئة، المطاعم، 
                  العيادات الطبية، المدارس، والمؤسسات الحكومية والخاصة.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-1">
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">رحلتنا عبر السنين</h3>
                  <div className="space-y-4">
                    {milestones.map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm">
                          {item.year}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 rounded-3xl p-8 md:p-10 border border-slate-700">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">رؤيتنا</h3>
              <p className="text-slate-300 leading-relaxed">
                أن نكون الشريك التقني الأول للشركات والمؤسسات في المنطقة العربية، 
                وتقديم حلول برمجية مبتكرة تساعدها على تحقيق أهدافها ونموها المستمر.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-3xl p-8 md:p-10 border border-slate-700">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">رسالتنا</h3>
              <p className="text-slate-300 leading-relaxed">
                تمكين الشركات من إدارة أعمالها بكفاءة عالية من خلال توفير أنظمة برمجية 
                متكاملة، سهلة الاستخدام، ومدعومة بخدمة عملاء متميزة على مدار الساعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">قيمنا</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              هذه القيم تشكل أساس عملنا وتوجهنا في كل ما نقدمه لعملائنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-slate-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 hover:border-slate-200">
                <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center ${
                  value.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                  value.color === 'emerald' ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' :
                  value.color === 'rose' ? 'bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' :
                  value.color === 'cyan' ? 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white' :
                  value.color === 'amber' ? 'bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white' :
                  'bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white'
                }`}>
                  <value.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">لماذا تختار NexSys؟</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              نقدم لك مزايا فريدة تجعلنا الخيار الأمثل لاحتياجاتك البرمجية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'دعم فني 24/7', desc: 'فريق دعم فني متاح على مدار الساعة لحل جميع مشاكلك' },
              { title: 'تحديثات مستمرة', desc: 'نظام يتم تحديثه بشكل دوري لمواكبة التغييرات' },
              { title: 'تدريب مجاني', desc: 'نوفر تدريباً مجانياً لفريقك على استخدام النظام' },
              { title: 'ضمان جودة', desc: 'نقدم ضماناً على جميع منتجاتنا وخدماتنا' },
              { title: 'سهل الاستخدام', desc: 'واجهات مستخدم سهلة وبديهية لا تحتاج خبرة تقنية' },
              { title: 'توافق كامل', desc: 'نظام متوافق مع جميع المعايير المحلية والضريبية' },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">فريقنا</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              فريق متميز من الخبراء والمطورين المتخصصين في تقديم أفضل الحلول البرمجية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                    <Users size={40} />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-slate-900 mb-1">{member.name}</h4>
                  <div className="text-blue-600 text-sm font-medium mb-2">{member.role}</div>
                  <p className="text-xs text-slate-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-l from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            هل أنت مستعد لتحويل عملك الرقمي؟
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية حول أفضل الحلول البرمجية لعملك
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              احصل على استشارة مجانية
            </Link>
            <Link 
              href="/software" 
              className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition-colors border border-blue-500"
            >
              تصفح حلولنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

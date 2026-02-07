import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-24 pb-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl">N</div>
              <span className="text-2xl font-black tracking-tighter text-white leading-none">
                NEX<span className="text-blue-600">SYS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              نحن في نكسس نسعى لتقديم أحدث الحلول البرمجية التي تساهم في نمو وتطوير الشركات والمؤسسات في الوطن العربي، مع التركيز على الجودة، الابتكار، وخدمة العملاء المتميزة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-white hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"><Facebook size={20} /></a>
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-white hover:bg-blue-400 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"><Twitter size={20} /></a>
              <a href="https://instagram.com/nexsys" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-white hover:bg-pink-600 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20 overflow-hidden relative group">
                <Image src="/انستجرام.png" alt="Instagram" fill className="object-contain p-1" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-white hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 border-r-4 border-blue-600 pr-4">روابط هامة</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/" className="hover:text-blue-500 flex items-center gap-2 tracking-wide"><ExternalLink size={14} /> الرئيسية</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 flex items-center gap-2 tracking-wide"><ExternalLink size={14} /> من نحن</Link></li>
              <li><Link href="/software" className="hover:text-blue-500 flex items-center gap-2 tracking-wide"><ExternalLink size={14} /> عروضنا الحالية</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500 flex items-center gap-2 tracking-wide"><ExternalLink size={14} /> المدونة التقنية</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 flex items-center gap-2 tracking-wide"><ExternalLink size={14} /> اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 border-r-4 border-blue-600 pr-4">برامجنا</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/software" className="hover:text-blue-500 tracking-wide">NexSys Accounting</Link></li>
              <li><Link href="/software" className="hover:text-blue-500 tracking-wide">برنامج إدارة العيادات</Link></li>
              <li><Link href="/software" className="hover:text-blue-500 tracking-wide">برنامج إدارة المدارس</Link></li>
              <li><Link href="/software" className="hover:text-blue-500 tracking-wide">نظام NexSys ERP</Link></li>
              <li><Link href="/software" className="hover:text-blue-500 tracking-wide">الفاتورة الإلكترونية</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 border-r-4 border-blue-600 pr-4">تواصل معنا</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-xl text-blue-500"><MapPin size={20} /></div>
                <div>
                  <div className="text-white font-black text-sm">المقر الرئيسي</div>
                  <p className="text-xs mt-1">المملكة العربية السعودية، الرياض</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-xl text-blue-500"><Phone size={20} /></div>
                <div>
                  <div className="text-white font-black text-sm">المبيعات</div>
                  <p className="text-xs mt-1">05xxxxxxxx</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-xl text-blue-500"><Mail size={20} /></div>
                <div>
                  <div className="text-white font-black text-sm">الدعم الفني</div>
                  <p className="text-xs mt-1">support@nexsys.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold">&copy; {new Date().getFullYear()} NexSys Software. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest opacity-50">
            <a href="#" className="hover:text-white">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white">الشروط والأحكام</a>
            <a href="#" className="hover:text-white">خريطة الموقع</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

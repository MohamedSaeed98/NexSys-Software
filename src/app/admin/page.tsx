import { LayoutDashboard, Users, FileText, Settings, LogOut, Package } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { label: "إجمالي الطلبات", value: "24", icon: FileText, color: "text-blue-600" },
    { label: "المستخدمين", value: "150", icon: Users, color: "text-green-600" },
    { label: "البرامج النشطة", value: "4", icon: Package, color: "text-purple-600" },
  ];

  const recentOrders = [
    { id: 1, client: "شركة التقدم", software: "محاسبة", status: "قيد الانتظار", date: "2026-01-31" },
    { id: 2, client: "مؤسسة النجاح", software: "نقاط بيع", status: "مكتمل", date: "2026-01-30" },
    { id: 3, client: "محل الرياض", software: "مخازن", status: "قيد المراجعة", date: "2026-01-29" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <div className="text-2xl font-bold mb-10 text-blue-400">NexSys Admin</div>
        <nav className="space-y-4">
          <Link href="/admin" className="flex items-center gap-3 p-3 bg-blue-600 rounded-lg">
            <LayoutDashboard className="w-5 h-5" /> لوحة التحكم
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition">
            <FileText className="w-5 h-5" /> الطلبات
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition">
            <Users className="w-5 h-5" /> المستخدمين
          </Link>
          <div className="pt-10 border-t border-slate-800 mt-10">
            <Link href="/admin/settings" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition">
              <Settings className="w-5 h-5" /> الإعدادات
            </Link>
            <Link href="/" className="flex items-center gap-3 p-3 hover:bg-red-600 rounded-lg transition text-red-400 hover:text-white mt-4">
              <LogOut className="w-5 h-5" /> تسجيل خروج
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">نظرة عامة</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">مرحباً، المدير</span>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">A</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className={`w-12 h-12 ${stat.color} opacity-20`} />
            </div>
          ))}
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg text-gray-800">آخر الطلبات</h2>
            <button className="text-blue-600 text-sm font-bold hover:underline">عرض الكل</button>
          </div>
          <table className="w-full text-right">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="p-4">العميل</th>
                <th className="p-4">البرنامج</th>
                <th className="p-4">التاريخ</th>
                <th className="p-4">الحالة</th>
                <th className="p-4">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium">{order.client}</td>
                  <td className="p-4">{order.software}</td>
                  <td className="p-4 text-gray-500">{order.date}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === 'مكتمل' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-blue-600 hover:text-blue-800 font-bold">عرض</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Eye, Clock, CheckCircle, XCircle, Search, Filter, Download } from 'lucide-react';

interface Order {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  software: string;
  notes: string;
  createdAt: string;
  status: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-700';
      case 'contacted': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Clock size={16} />;
      case 'contacted': return <Eye size={16} />;
      case 'completed': return <CheckCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === 'all' || order.status === filter;
    const matchesSearch = 
      order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getSoftwareName = (id: string) => {
    const softwareNames: Record<string, string> = {
      accounting: 'NexSys Accounting Pro',
      inventory: 'NexSys Inventory',
      pos: 'NexSys POS Retail',
      erp: 'NexSys ERP Enterprise'
    };
    return softwareNames[id] || id;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-black text-slate-600">جاري تحميل الطلبات...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">طلبات العملاء</h1>
              <p className="text-slate-500 font-bold">إدارة ومتابعة طلبات العملاء ({orders.length} طلب)</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => window.print()}
                className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center gap-2"
              >
                <Download size={18} /> طباعة / تصدير
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text"
                placeholder="البحث بالاسم، البريد، أو اسم الشركة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-6 py-4 bg-slate-50 border-none rounded-xl font-bold text-slate-900 outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'new', 'contacted', 'completed'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-3 rounded-xl font-bold transition-colors ${
                    filter === f 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f === 'all' ? 'الكل' : f === 'new' ? 'جديد' : f === 'contacted' ? 'تم التواصل' : 'مكتمل'}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-16 text-center shadow-lg"
          >
            <Package size={80} className="mx-auto mb-6 text-slate-300" />
            <h2 className="text-2xl font-black text-slate-900 mb-4">لا توجد طلبات</h2>
            <p className="text-slate-500 font-bold">لم يتم استلام أي طلبات بعد</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black text-xl">
                        {order.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-black text-xl text-slate-900">{order.name}</h3>
                        <p className="text-sm font-bold text-slate-500">{order.company}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="font-bold text-blue-600">البريد:</span>
                        <span>{order.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="font-bold text-blue-600">الجوال:</span>
                        <span>{order.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="font-bold text-blue-600">البرنامج:</span>
                        <span>{getSoftwareName(order.software)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="font-bold text-blue-600">التاريخ:</span>
                        <span>{new Date(order.createdAt).toLocaleDateString('ar-SA')}</span>
                      </div>
                    </div>
                    {order.notes && (
                      <div className="mt-4 p-4 bg-slate-50 rounded-xl">
                        <p className="text-sm font-bold text-slate-600">
                          <span className="text-blue-600">ملاحظات:</span> {order.notes}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 rounded-xl font-bold flex items-center gap-2 ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status === 'new' ? 'جديد' : order.status === 'contacted' ? 'تم التواصل' : 'مكتمل'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

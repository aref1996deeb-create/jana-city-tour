"use client"; // الحلف السحري للخطأ الحين 🚀

import dynamic from 'next/dynamic';

// استدعاء ديناميكي لمنع مشاكل الـ SSR مع مكتبات الـ 3D
const VirtualTour = dynamic(() => import('./components/VirtualTour'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-5xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-600">
        شركة جنى سيتي ترحب بكم

        </h1>
        
        {/* عرض المكون التجريبي */}
        <VirtualTour />
      </div>
    </main>
  );
}
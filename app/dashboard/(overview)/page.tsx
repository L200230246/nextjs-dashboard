import CardWrapper from '@/app/dashboard/cards'; // Import Wrapper yang tadi dibuat
import RevenueChart from '@/app/dashboard/revenue-chart';
import LatestInvoices from '@/app/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { 
  RevenueChartSkeleton, 
  LatestInvoicesSkeleton,
  CardsSkeleton 
} from '@/app/ui/skeletons';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Dashboard',
};

// ... kode komponen Dashboard kamu tetap di bawahnya
 
export default async function Page() {
  // Sekarang page.tsx jauh lebih bersih karena data diambil di komponen masing-masing
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Bungkus CardWrapper dengan Suspense */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        
        {/* Jika kamu sudah mengerjakan latihan LatestInvoices, pakai Suspense juga di sini */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
'use client';
 
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import clsx from 'clsx';
// ... import icon ArrowLeftIcon dan ArrowRightIcon dari heroicons

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
 
  // Membuat URL baru berdasarkan nomor halaman yang diklik
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      {/* Di tutorial aslinya ada banyak kode UI di sini, 
          pastikan createPageURL dipanggil di dalam komponen Link atau button */}
      {allPages.map((page, index) => (
        <Link key={index} href={createPageURL(page)}>
          {page}
        </Link>
      ))}
    </div>
  );
}
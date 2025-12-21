import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/action';

// ... (CreateInvoice dan UpdateInvoice tetap sama)

export function DeleteInvoice({ id }: { id: string }) {
  // Solusi: Kita buat fungsi perantara yang ditandai dengan 'use server'
  // Ini memastikan Next.js tahu fungsi ini aman untuk dikirim ke Client
  async function deleteInvoiceWithId() {
    'use server';
    await deleteInvoice(id);
  }

  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
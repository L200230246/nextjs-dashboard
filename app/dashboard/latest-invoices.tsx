import { LatestInvoice } from '@/app/lib/definitions';

export default function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="rounded-xl border p-4 bg-white">
      <h2 className="text-lg font-semibold mb-4">Latest Invoices</h2>

      <div className="flex flex-col gap-4">
        {latestInvoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center gap-4">
            <img
              src={invoice.image_url}
              alt={invoice.name}
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">
              <p className="font-medium">{invoice.name}</p>
              <p className="text-sm text-gray-500">{invoice.email}</p>
            </div>

            <p className="font-semibold">{invoice.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

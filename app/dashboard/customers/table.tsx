// app/dashboard/customers/table.tsx
import React from 'react';
import type { FormattedCustomersTable } from '@/app/lib/definitions';

type Props = {
  data: FormattedCustomersTable[];
};

export default function CustomersTable({ data }: Props) {
  return (
    <table className="border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Email</th>
          <th className="border border-gray-300 p-2">Total Invoices</th>
          <th className="border border-gray-300 p-2">Total Pending</th>
          <th className="border border-gray-300 p-2">Total Paid</th>
        </tr>
      </thead>
      <tbody>
        {data.map((customer) => (
          <tr key={customer.id}>
            <td className="border border-gray-300 p-2">{customer.name}</td>
            <td className="border border-gray-300 p-2">{customer.email}</td>
            <td className="border border-gray-300 p-2">{customer.total_invoices}</td>
            <td className="border border-gray-300 p-2">{customer.total_pending}</td>
            <td className="border border-gray-300 p-2">{customer.total_paid}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

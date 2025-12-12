import { sql } from '@vercel/postgres';

export async function GET() {
  const result = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return Response.json(result.rows);
}

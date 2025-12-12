import { sql } from '@vercel/postgres';

export default async function Page() {
  const { rows } = await sql`SELECT * FROM customers`;

  return (
    <div style={{ padding: 20 }}>
      <h1>Data Customers</h1>
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}

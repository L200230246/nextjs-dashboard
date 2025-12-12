import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com"
    }
  });

  const bob = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@example.com"
    }
  });

  await prisma.invoice.createMany({
    data: [
      {
        amount: 100000,
        status: "paid",
        customerId: alice.id
      },
      {
        amount: 150000,
        status: "pending",
        customerId: bob.id
      }
    ]
  });

  console.log("Seed berhasil jalan!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

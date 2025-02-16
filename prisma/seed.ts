import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error("Admin credentials not found in environment variables");
    process.exit(1);
  }

  // Clean up the database
  await prisma.waitlistEntry.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      isAdmin: true,
    },
  });

  console.log(`Admin user created: ${admin.email}`);

  // Create some sample waitlist entries
  const sampleEntries = [
    { email: "john.doe@example.com" },
    { email: "jane.smith@example.com" },
    { email: "bob.wilson@example.com" },
  ];

  for (const entry of sampleEntries) {
    await prisma.waitlistEntry.create({
      data: entry,
    });
  }

  console.log(`Created ${sampleEntries.length} sample waitlist entries`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
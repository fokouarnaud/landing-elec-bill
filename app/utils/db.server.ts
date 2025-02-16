import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db__: PrismaClient | undefined;
}

// This is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient();
  }
  db = global.__db__;
  db.$connect();
}

export { db };

// Utility functions for common database operations

export async function createUser(email: string, hashedPassword: string, isAdmin: boolean = false) {
  return db.user.create({
    data: {
      email,
      password: hashedPassword,
      isAdmin,
    },
  });
}

export async function getUserByEmail(email: string) {
  return db.user.findUnique({
    where: { email },
  });
}

export async function getUserById(id: string) {
  return db.user.findUnique({
    where: { id },
  });
}

// Waitlist functions

export async function createWaitlistEntry(email: string) {
  return db.waitlistEntry.create({
    data: {
      email,
    },
  });
}

export async function getWaitlistEntries() {
  return db.waitlistEntry.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function updateWaitlistEntry(id: string, data: {
  status?: string;
  notes?: string;
  lastContactedAt?: Date;
}) {
  return db.waitlistEntry.update({
    where: { id },
    data,
  });
}

export async function getWaitlistStats() {
  const [total, pending, contacted, completed] = await Promise.all([
    db.waitlistEntry.count(),
    db.waitlistEntry.count({ where: { status: "pending" } }),
    db.waitlistEntry.count({ where: { status: "contacted" } }),
    db.waitlistEntry.count({ where: { status: "completed" } }),
  ]);

  return {
    total,
    pending,
    contacted,
    completed,
  };
}

export async function deleteWaitlistEntry(id: string) {
  return db.waitlistEntry.delete({
    where: { id },
  });
}

// Initialize admin user if it doesn't exist
export async function initializeAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.warn("Admin credentials not found in environment variables");
    return;
  }

  const existingAdmin = await getUserByEmail(adminEmail);
  if (!existingAdmin) {
    await createUser(adminEmail, adminPassword, true);
    console.log("Admin user created successfully");
  }
}
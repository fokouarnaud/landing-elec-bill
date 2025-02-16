import bcrypt from "bcryptjs";
import { db } from "./db.server";

export async function initializeAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.warn("Admin credentials not found in environment variables");
    return;
  }

  try {
    // Check if admin user already exists
    const existingAdmin = await db.user.findUnique({
      where: { email: adminEmail },
    });

    if (!existingAdmin) {
      // Create admin user
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await db.user.create({
        data: {
          email: adminEmail,
          password: hashedPassword,
          isAdmin: true,
        },
      });
      console.log("Admin user created successfully");
    }
  } catch (error) {
    console.error("Failed to initialize admin user:", error);
  }
}
import { db } from "./db.server";
import type { PrismaClient } from "@prisma/client";

type TransactionClient = Omit<
  PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;

interface WaitlistEntry {
  id: string;
  email: string;
  status: string;
  notes?: string | null;
  lastContactedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export async function addToWaitlist(email: string) {
  try {
    const entry = await db.waitlistEntry.create({
      data: {
        email,
      },
    });
    return { success: true, entry };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return {
          success: false,
          error: "This email is already on the waitlist.",
        };
      }
    }
    return {
      success: false,
      error: "An error occurred while adding to waitlist.",
    };
  }
}

export async function getWaitlistEntries() {
  try {
    const entries = await db.waitlistEntry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, entries };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch waitlist entries.",
    };
  }
}

export async function updateWaitlistEntry(
  id: string,
  data: {
    status?: string;
    notes?: string;
    lastContactedAt?: Date;
  }
) {
  try {
    const entry = await db.waitlistEntry.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
    return { success: true, entry };
  } catch (error) {
    return {
      success: false,
      error: "Failed to update waitlist entry.",
    };
  }
}

export async function deleteWaitlistEntry(id: string) {
  try {
    await db.waitlistEntry.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Failed to delete waitlist entry.",
    };
  }
}

export async function getWaitlistStats() {
  try {
    const stats = await db.$transaction(async (tx: TransactionClient) => {
      const [total, pending, contacted, completed] = await Promise.all([
        tx.waitlistEntry.count(),
        tx.waitlistEntry.count({ where: { status: "pending" } }),
        tx.waitlistEntry.count({ where: { status: "contacted" } }),
        tx.waitlistEntry.count({ where: { status: "completed" } }),
      ]);

      return {
        total,
        pending,
        contacted,
        completed,
      };
    });

    return { success: true, stats };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch waitlist statistics.",
    };
  }
}

export type { WaitlistEntry };
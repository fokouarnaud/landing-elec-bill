import { db } from "./db.server";
import bcrypt from "bcryptjs";

interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

export async function createUser(email: string, password: string, isAdmin: boolean = false) {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        isAdmin,
      },
      select: {
        id: true,
        email: true,
        isAdmin: true,
      },
    });
    return { success: true, user };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return {
          success: false,
          error: "A user with this email already exists.",
        };
      }
    }
    return {
      success: false,
      error: "An error occurred while creating the user.",
    };
  }
}

export async function verifyLogin(email: string, password: string) {
  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { success: false, error: "Invalid email or password." };
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return { success: false, error: "Invalid email or password." };
  }

  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  };
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        isAdmin: true,
      },
    });

    if (!user) {
      return { success: false, error: "User not found." };
    }

    return { success: true, user };
  } catch (error) {
    return {
      success: false,
      error: "An error occurred while fetching the user.",
    };
  }
}

export async function updateUser(
  id: string,
  data: {
    email?: string;
    password?: string;
  }
) {
  try {
    const updateData: any = { ...data };
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    const user = await db.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        isAdmin: true,
      },
    });

    return { success: true, user };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return {
          success: false,
          error: "A user with this email already exists.",
        };
      }
    }
    return {
      success: false,
      error: "An error occurred while updating the user.",
    };
  }
}

export async function deleteUser(id: string) {
  try {
    await db.user.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "An error occurred while deleting the user.",
    };
  }
}

export type { User };
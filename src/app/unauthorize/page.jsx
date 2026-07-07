"use client"; // if using App Router

import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { MdBlockFlipped, MdOutlineHome, MdOutlineLogin } from "react-icons/md";

export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="max-w-md w-full shadow-lg">
        <div className="flex flex-col items-center text-center space-y-6 p-8">
          {/* Icon or Emoji */}
          <div className="text-6xl">
            <MdBlockFlipped className="text-red-600" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Unauthorized Access
          </h1>

          {/* Message */}
          <p className="text-gray-600 dark:text-gray-400">
            You don’t have permission to view this page. Please log in with the
            correct account.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link href="/login">
              <Button
                variant="primary"
                onPress={() =>
                  authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        window.location.href = "/login";
                      },
                    },
                  })
                }
              >
                <MdOutlineLogin />
                Go to Login
              </Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">
                <MdOutlineHome />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

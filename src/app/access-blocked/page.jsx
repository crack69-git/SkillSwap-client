"use client";

import { Card, Button } from "@heroui/react";
import { ShieldX } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function BlockedPage() {
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login";
        },
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-default-50 px-4">
      <Card className="max-w-lg w-full border border-danger-200 shadow-lg">
        <div className="flex flex-col items-center text-center p-10">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-danger-100">
            <ShieldX className="h-10 w-10 text-danger" />
          </div>

          <h1 className="mb-3 text-3xl font-bold text-danger">
            Account Blocked
          </h1>

          <p className="mb-6 text-default-600 leading-7">
            Your account has been <strong>blocked by an administrator</strong>.
            You can no longer access SkillSwap until the restriction is removed.
          </p>

          <div className="mb-8 w-full rounded-lg bg-default-100 p-4 text-sm text-default-600">
            If you believe this action was taken in error, please contact the
            platform administrator or our support team for assistance.
          </div>

          <Button color="danger" size="lg" onPress={handleLogout}>
            Log Out
          </Button>
        </div>
      </Card>
    </div>
  );
}

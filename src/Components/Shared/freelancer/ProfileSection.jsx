import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ProfileSection = ({ user }) => {
  return (
    <div>
      <Card className="w-full items-stretch md:flex-row mt-5">
        <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
          <Image
            alt="Cherries"
            fill
            className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
            loading="lazy"
            src={user.image}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8">{user.name}</Card.Title>
            <Card.Description>{user.email}</Card.Description>
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm  text-foreground">
                Hourly Rate: {user.hourlyRate || "Not specified"}
              </span>
              <span className="text-xs text-muted">
                {user.skills && user.skills.length > 0
                  ? `Skills: ${user.skills.join(", ")}`
                  : "Skills: Not specified"}
              </span>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default ProfileSection;

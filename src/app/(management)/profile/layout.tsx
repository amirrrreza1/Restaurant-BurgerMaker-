"use client";

import ProfileSideBar from "@/Components/ProfileSidebar";
import React, { useState } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selected, setSelected] = useState<string>("dashboard");

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  return (
    <div className="flex min-h-screen">
      <ProfileSideBar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

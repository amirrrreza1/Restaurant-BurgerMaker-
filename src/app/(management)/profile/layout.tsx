"use client";

import ProfileSideBar from "@/Components/ProfileSidebar";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <ProfileSideBar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}

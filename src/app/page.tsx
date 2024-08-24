"use client";

// import { MainPane } from "@/components";
import BaseLayout from "@/components/BaseLayout";
import { UpcommingEvents } from "@/components/UpcommingEvents";

export default function Home() {
  return (
    <BaseLayout>
      <UpcommingEvents />
    </BaseLayout>
  );
}

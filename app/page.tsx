import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { NotificationBar } from "@/components/notificationBar";
import { WhatWeTeach } from "@/components/whatWeTeach";

export default function Home() {
  return (
    <main>
      <NotificationBar />
      <Navbar />
      <Hero />
      <WhatWeTeach />
    </main>
  );
}

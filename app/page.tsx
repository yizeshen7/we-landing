import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { NotificationBar } from "@/components/notification-bar";

export default function Home() {
  return (
    <main>
      <NotificationBar />
      <Navbar />
      <Hero />
    </main>
  );
}

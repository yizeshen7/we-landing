import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="bg-blue-600 text-white text-center py-2">
        Join our after school program that introduces a new and exciting field
        of engineering every week!
        <Button className="ml-4 bg-white text-blue-600 hover:bg-blue-200">
          Sign up now
        </Button>
      </div>
      <nav className="flex justify-between items-center py-4 px-8 bg-white">
        <img
          alt="Logo"
          className="h-10 w-10"
          height="40"
          src="/placeholder.jpg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
        <div className="flex items-center space-x-4">
          <Link className="text-gray-700 hover:text-gray-900" href="#">
            Sessions
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="#">
            What we teach
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="#">
            About us
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="#">
            Blogs
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="#">
            FAQs
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="#">
            Contact us
          </Link>
        </div>
      </nav>
      <div className="flex justify-between items-center px-8 py-12">
        <div className="max-w-lg space-y-6">
          <h1 className="text-6xl font-bold text-orange-600">WEngineer</h1>
          <p className="text-xl text-gray-600 italic">
            Igniting young minds to fuel the future
          </p>
          <p className="text-gray-700">
            We are a STEM education program designed to help fill the gap in
            STEM education between primary and secondary public education.
          </p>
          <p className="text-gray-700">
            We
            <span className="font-bold"> create</span>,{" "}
            <span className="font-bold">design</span>, and{""}
            <span className="font-bold"> teach </span>
            engaging educational seminars to
            <span className="font-bold"> foster a love for engineering</span>
            and encourage students to enter STEM careers.
          </p>
        </div>
        <img
          alt="Hero"
          className="h-[400px] w-[600px] rounded-lg"
          height="400"
          src="/placeholder.jpg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
      </div>
    </div>
  );
}

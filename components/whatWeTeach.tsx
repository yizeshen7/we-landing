import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function WhatWeTeach() {
  return (
    <div className="mx-auto px-4 py-12 bg-white">
      <h2 className="text-4xl font-bold text-left mb-12">What we teach...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            alt="Computer and Electrical Engineering"
            className="w-full h-auto mb-4"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h3 className="text-2xl font-semibold mb-2">
            Computer and Electrical Engineering
          </h3>
          <div className="flex space-x-2 mb-4">
            <Badge variant="secondary">Programming</Badge>
            <Badge variant="secondary">Breadboarding</Badge>
            <Badge variant="secondary">Circuit Design</Badge>
          </div>
          <p className="mb-4">
            Get ready to dive into the exciting world of coding and electronics!
            🚀 Students will build their knowledge on coding functions, Arduino,
            breadboards, circuits, and everything in-between.💡
          </p>
          <Link className="text-indigo-600 hover:text-indigo-800" href="#">
            {`Learn More >`}
          </Link>
        </div>
        <div>
          <img
            alt="Mechanical Engineering"
            className="w-full h-auto mb-4"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h3 className="text-2xl font-semibold mb-2">
            Mechanical Engineering
          </h3>
          <div className="flex space-x-2 mb-4">
            <Badge variant="secondary">Physics Theory</Badge>
            <Badge variant="secondary">Gears & Motors</Badge>
            <Badge variant="secondary">Real-World Modeling</Badge>
          </div>
          <p className="mb-4">
            Dive into mechanical engineering 🛠️ Explore design principles,
            mechanics, and cutting-edge tech. Get hands-on with robotics and
            materials for a dynamic engineering journey. 🌟
          </p>
          <Link className="text-indigo-600 hover:text-indigo-800" href="#">
            {`Learn More >`}
          </Link>
        </div>
        <div>
          <img
            alt="Civil/Environmental Engineering"
            className="w-full h-auto mb-4"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h3 className="text-2xl font-semibold mb-2">
            Civil/Environmental Engineering
          </h3>
          <div className="flex space-x-2 mb-4">
            <Badge variant="secondary">Bridges & Roads</Badge>
            <Badge variant="secondary">Sustainable Design</Badge>
            <Badge variant="secondary">Architecture & Buildings</Badge>
          </div>
          <p className="mb-4">
            Embark on a journey into civil and environmental engineering 🌍
            Explore infrastructure design, sustainability, and water resources.
            Get hands-on with projects in urban planning and environmental
            protection for a rewarding engineering experience.🏗️
          </p>
          <Link className="text-indigo-600 hover:text-indigo-800" href="#">
            {`Learn More >`}
          </Link>
        </div>
        <div>
          <img
            alt="Vehicle Engineering"
            className="w-full h-auto mb-4"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h3 className="text-2xl font-semibold mb-2">Vehicle Engineering</h3>
          <div className="flex space-x-2 mb-4">
            <Badge variant="secondary">Nautical Design</Badge>
            <Badge variant="secondary">Robotics</Badge>
            <Badge variant="secondary">Aerospace</Badge>
          </div>
          <p className="mb-4">
            Explore the world of vehicle engineering 🚗, from mechanics to
            cutting-edge technology, through hands-on projects and experiments.
            Delve into topics like aerodynamics, powertrain engineering, and
            autonomous driving algorithms for a thrilling learning experience.💡
          </p>
          <Link className="text-indigo-600 hover:text-indigo-800" href="#">
            {`Learn More >`}
          </Link>
        </div>
      </div>
    </div>
  );
}

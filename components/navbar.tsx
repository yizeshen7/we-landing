import Link from "next/link";

export function Navbar() {
  return (
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
  );
}

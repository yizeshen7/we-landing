export function Hero() {
  return (
    <div className="flex justify-between items-center px-8 py-12 bg-white">
      <div className="max-w-lg space-y-6">
        <h1 className="text-6xl font-bold text-orange-600">WEngineer</h1>
        <p className="text-xl text-gray-600 italic bg-midnight">
          Igniting young minds to fuel the future
        </p>
        <p className="text-gray-700">
          We are a STEM education program designed to help fill the gap in STEM
          education between primary and secondary public education.
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
  );
}

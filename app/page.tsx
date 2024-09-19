import Image from 'next/image'; // Import Image component from Next.js for optimization

function Home() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7]">
      <main className="flex-1 flex items-center justify-center p-8">
        {/* Left Section: Text */}
        <div className="w-full md:w-1/2 text-left space-y-6 -mt-64">
          <h1 className="text-5xl font-extrabold text-[#6b4e3d]">Welcome to Our Coffee Shop!</h1>
          <p className="text-lg text-[#8d6e5a]">Indulge in the finest iced coffee made with passion. We serve the best blends, carefully brewed to perfection.</p>
          <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="hidden md:block w-full md:w-1/2 pl-12 ">
          <Image
            src={"/images/Coffee.png"} // Path to the iced coffee image
            alt="Iced Coffee"
            className="rounded-xl object-cover"
            width={500}
            height={500}
            priority={true} // Optimizes image loading
          />
        </div>
      </main>
    </div>
  );
}

export default Home;

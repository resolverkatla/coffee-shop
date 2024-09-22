import FavoriteProducts from '@/components/FavoriteProducts';
import FloatingOrderButton from '@/components/FloatingOrderButton';
import Footer from '@/components/Footer';
import ReviewGrid from '@/components/ReviewGrid';
import Image from 'next/image';

function Home() {
  return (
    <div className="h-screen flex flex-col bg-cover bg-center bg-[url('/images/Background.jpg')]">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8 pt-12">
        {/* Left Section: Text */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h1 className="text-5xl font-extrabold text-[#6b4e3d]">
            Welcome to Our Coffee Shop!
          </h1>
          <p className="text-lg text-[#8d6e5a]">
            Indulge in the finest iced coffee made with passion. We serve the best blends, carefully brewed to perfection.
          </p>
          <button className="bg-brown-600 hover:bg-brown-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="hidden md:block w-full md:w-1/2 pl-8 mt-12 mb-20">
          <Image
            src="/images/Display.png" // Path to the iced coffee image
            alt="Iced Coffee"
            className="rounded-xl object-cover"
            width={800}
            height={800}
            priority={true} // Optimizes image loading
          />
        </div>
      </main>

      {/* Favorite Products Section */}
      <FavoriteProducts />
      <ReviewGrid />
      <Footer />
      <FloatingOrderButton />
    </div>
  );
}

export default Home;

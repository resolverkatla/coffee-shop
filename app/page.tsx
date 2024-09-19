import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Coffee Shop Landing Page</title>
      </Head>
      <Navbar />
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold">Welcome to our Coffee Shop!</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
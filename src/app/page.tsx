import Header from "@/components/header";
import Link from "next/link";
import {GoGift} from "react-icons/go";

export default function Home() {
  return (
    <>
      <Header />
      <main 
        className="relative flex justify-center mt-5 bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/images/mangrove-2.png')" }}
      >
        <section className="text-center">
          <h1 className="font-chikara text-primary text-9xl font-bold mt-6">BakaWAN</h1>
          <h2 className="font-poppins text-primary text-4xl">We Act Now</h2>
        </section>
        <section className="absolute bottom-16 left-1/2 -translate-x-1/2 text-background px-4 py-2 text-sm font-poppins sm:text-base max-w-[90%] md:max-w-2xl text-center">
          This project is supported by the <strong>National Geographic Society</strong><br />and <strong>The Nature Conservancy</strong>.
        </section>
      </main>
      
      {/* Overview section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="font-chikara text-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Project BakaWAN</h3>
          <p className="font-poppins text-secondary text-base sm:text-lg leading-relaxed">
            Project BakaWAN is an initiative created to support the community-led mangrove rehabilitation area in Barangay Sabang, Del Gallego, Camarines Sur. The rehabilitation area, established in 2021 by the Municipal Agricultural and Fishery Council (MAFC) and sustained by the Sabang Barangay Council, continues to thrive through local stewardship and the backing of Project BakaWAN.
          </p>
        </div>
      </section>

      {/* Stats section */}
      <section className="container mx-auto px-4 pb-16 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Stat 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="font-chikara text-primary text-4xl sm:text-5xl md:text-6xl">300+</div>
            <div className="font-poppins text-secondary mt-2">Number of trees planted</div>
          </div>
          {/* Stat 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="font-chikara text-primary text-4xl sm:text-5xl md:text-6xl">10+</div>
            <div className="font-poppins text-secondary mt-2">Number of initiatives supported</div>
          </div>
          {/* Stat 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="font-chikara text-primary text-4xl sm:text-5xl md:text-6xl">50+</div>
            <div className="font-poppins text-secondary mt-2">Community volunteers engaged</div>
          </div>
          {/* Stat 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="font-chikara text-primary text-4xl sm:text-5xl md:text-6xl">5+</div>
            <div className="font-poppins text-secondary mt-2">Partner organizations</div>
          </div>
        </div>
      </section>

      <section className="relative flex justify-center mt-5 bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/images/mangrove-1.png')" }}
      >
      </section>

      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="font-chikara text-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Goals</h3>
          
        </div>
      </section>
    </>
  );
}

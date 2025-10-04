import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { GoCreditCard, GoHeart, GoHome } from "react-icons/go";
import { TiCreditCard, TiHeart, TiHomeOutline } from "react-icons/ti";

export default function About() {
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
          <Card className="border-0 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="text-center">
              <div className="font-chikara text-primary text-4xl sm:text-5xl md:text-6xl">300+</div>
              <div className="font-poppins text-secondary mt-2">Number of trees planted</div>
            </CardContent>
          </Card>
          {/* Stat 2 */}
          <Card className="border-0 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="text-center">
              <div className="font-chikara text-primary text-4xl sm:text-5xl md:text-6xl">10+</div>
              <div className="font-poppins text-secondary mt-2">Number of initiatives supported</div>
            </CardContent>
          </Card>
          {/* Stat 3 */}
          <Card className="border-0 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="text-center">
              <div className="font-chikara text-primary text-4xl sm:text-5xl md:text-6xl">50+</div>
              <div className="font-poppins text-secondary mt-2">Community volunteers engaged</div>
            </CardContent>
          </Card>
          {/* Stat 4 */}
          <Card className="border-0 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="text-center">
              <div className="font-chikara text-primary text-4xl sm:text-5xl md:text-6xl">5+</div>
              <div className="font-poppins text-secondary mt-2">Partner organizations</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Goals section */}
      <section className="container mx-auto px-2 py-16 sm:py-20 md:py-24 bg-green-50">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="font-chikara text-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Mission</h3>
          <p className="text-secondary max-w-2xl mx-auto mb-12 text-lg">
            Through these three pillars, we aim to create lasting impact in mangrove conservation while empowering local communities.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex flex-col items-center text-center gap-8 p-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <TiHomeOutline className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-primary text-xl font-semibold">Strengthen Community Awareness and Participation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enhance education and outreach programs to increase local knowledge of the ecological, economic, and protective roles of mangroves, fostering stronger community ownership and active participation in conservation efforts.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex flex-col items-center text-center gap-8 p-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <TiCreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-primary text-xl font-semibold">Ensure Sustainable Financial and Resource Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Secure adequate funding and partnerships to provide long-term financial stability for the rehabilitation area, reducing reliance on personal contributions from volunteers and ensuring the continuity of mangrove conservation activities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex flex-col items-center text-center gap-8 p-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <TiHeart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-primary text-xl font-semibold">Mitigate Pollution and Safeguard Mangrove Health</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implement effective waste management and cleanup initiatives to reduce marine debris in the rehabilitation site, thereby protecting the restored mangrove ecosystem and sustaining its biodiversity and climate resilience benefits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>      
      
      {/* Image section */}
      <section className="relative flex justify-center mt-5 bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/images/mangrove-1.png')" }}
      >
      </section>
      <Footer />
    </>
  );
}

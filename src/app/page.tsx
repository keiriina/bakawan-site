import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center mt-10">
        <h1 className="font-chikara text-primary text-8xl font-bold">BakaWAN</h1>
        <h2 className="text-secondary text-2xl mt-4">We Act Now</h2>
      </main>
    </>
  );
}

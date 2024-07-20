import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <Hero />
      </main>
    </>
  );
}

import Card from "@/components/Card";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="px-5">
      <main className="max-w-4xl py-36 mx-auto min-h-[100dvh]">
        <Hero />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {Array.from({ length: 6 }, (_, index) => (
            <Card />
          ))}
        </div>
      </main>
    </div>
  );
}

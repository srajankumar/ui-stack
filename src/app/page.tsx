import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="px-5">
      <main className="max-w-4xl pt-36 pb-20 mx-auto min-h-[100dvh]">
        <Hero />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

"use client";

import React from "react";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";

export default function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref) as boolean;

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: +10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      className="px-5"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <main className="max-w-4xl pt-36 pb-20 mx-auto min-h-[100dvh]">
        <motion.div
          className="flex flex-wrap gap-3"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Hero />
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}

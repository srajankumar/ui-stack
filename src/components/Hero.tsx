import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 flex flex-col gap-2">
      <div className="text-4xl font-semibold">
        Konnichiwa <span className="wave">👋</span>
      </div>
      <div>
        A curated collection of{" "}
        <Link
          href="https://srajan.tech"
          target="_blank"
          className="underline underline-offset-2 hover:underline-offset-4"
        >
          srajan
        </Link>
        &apos;s beautifully developed frontend projects.
      </div>
    </div>
  );
};

export default Hero;

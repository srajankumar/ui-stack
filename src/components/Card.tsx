import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Project {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  links: {
    github: string;
    live: string;
  };
}

const Card: React.FC<{ project: Project }> = ({ project }) => {
  const { title, description, image, links } = project;

  return (
    <div className="h-full border rounded-lg overflow-hidden">
      <Link href={links.live} target="_blank" className="w-full">
        <Image
          src={`/projects/${image}`}
          alt={title}
          width={500}
          height={500}
          className="object-cover hover:opacity-50 transition-all duration-200 aspect-video"
        />
      </Link>
      <div className="p-5">
        <h1 className="title-font text-lg font-medium mb-3">{title}</h1>
        <p className="text-sm mb-3 leading-relaxed text-primary/60">
          {description}
        </p>
        <div className="flex gap-5">
          <Link
            target="_blank"
            className="hover:text-primary/60 transition-all duration-200"
            href={links.github}
          >
            <GitHubLogoIcon className="w-5 h-5 cursor-pointer" />
          </Link>
          <Link
            target="_blank"
            className="hover:text-primary/60 transition-all duration-200"
            href={links.live}
          >
            <GlobeIcon className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

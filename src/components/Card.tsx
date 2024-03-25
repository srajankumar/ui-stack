import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Globe } from "lucide-react";
import Link from "next/link";

const Card = () => {
  return (
    <div className="h-full border rounded-lg overflow-hidden">
      <div className="w-full">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/reoarts.png"
            alt="Image"
            width={500}
            height={500}
            className="object-cover"
          />
        </AspectRatio>
      </div>
      <div className="p-5">
        <h1 className="title-font text-lg font-medium mb-3">The Catalyzer</h1>
        <p className="text-sm mb-3 leading-relaxed text-primary/60">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
        <div className="flex gap-5">
          <Link href="/">
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
          <Link href="/">
            <GlobeIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

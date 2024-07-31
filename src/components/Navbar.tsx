import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers } from "lucide-react";
import ModeToggle from "./ModeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed backdrop-blur-md top-0 p-5 w-full flex justify-center left-0 z-50 bg-background/50">
      <div className="flex max-w-6xl w-full justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt=""
              width={30}
              height={30}
              className="hidden dark:flex"
            />
            <Image
              src="/logo-black.svg"
              alt=""
              width={30}
              height={30}
              className="dark:hidden flex"
            />
          </Link>
        </div>
        <div className="flex gap-3">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

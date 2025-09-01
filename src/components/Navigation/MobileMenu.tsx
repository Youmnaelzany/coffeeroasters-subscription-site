import Link from "next/link";

import { PanelsTopLeft } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  return (
    <div className="mt-2 md:hidden">
      <Sheet>
        <SheetTrigger>
          <PanelsTopLeft className="size-6 text-[#333D4B]" />
        </SheetTrigger>
        <SheetContent className="w-full bg-gradient-to-t from-[#FEFCF7] to-[#FEFCF7]/70 pt-16">
          <SheetHeader>
            <SheetDescription>
              <nav>
                <ul className="flex flex-col items-center justify-center gap-8">
                  <li>
                    <Link
                      href={"/"}
                      className="cursor-pointer font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal text-[#333D4B] uppercase"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about"}
                      className="cursor-pointer font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal text-[#333D4B] uppercase"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/plan"}
                      className="cursor-pointer font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal text-[#333D4B] uppercase"
                    >
                      Create your plan
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;

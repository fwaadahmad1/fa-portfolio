import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavRoutes } from "@/lib/NavRoutes";

const Nav = () => {
  return (
    <nav className={"absolute left-4 top-4"}>
      <Sheet>
        <SheetTrigger asChild>
          <div className={"bg-white rounded-full max-h-max max-w-max p-2"}>
            <Button
              variant={"ghost"}
              size={"icon"}
              className={"hover:bg-white"}
            >
              <Menu color={"#000000"} />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} className={"bg-white"}>
          <SheetClose>
            <X color="#000000" />
          </SheetClose>

          <div
            className={
              "flex flex-col h-full justify-center items-center text-black"
            }
          >
            {NavRoutes.map((route, index) => (
              <h1 key={index} className={"text-4xl tracking-tight lg:text-5xl py-4"}>
                {route.title}
              </h1>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Nav;

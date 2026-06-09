import React, { useEffect, useState } from "react";
import mt from "@material-tailwind/react";
import { NavLink } from "react-router";

const MaterialTailwind = (mt as any)?.default ?? mt;
const { Navbar, MobileNav, Button, IconButton, Input } = MaterialTailwind;

import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon
} from "@heroicons/react/24/solid";


const navItems = [
  { label: "About", to: "/user/about" }
];

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

export function ComplexNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="fixed inset-x-0 top-0 z-50 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <NavLink to="/" className="text-lg font-semibold gray-50">
          Beehive 🐝
        </NavLink>

        <div className="hidden items-center gap-6 lg:flex">
          
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{ className: "min-w-[240px]" }}
              className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
          </div>
          <Button color="amber" size="md" className="rounded-lg">
            Search
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            <span className="text-xl">{openNav ? "×" : "☰"}</span>
          </IconButton>
        </div>
      </div>

      <MobileNav open={openNav} className="fixed left-0 right-0 top-16 z-40">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
          
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{ className: "min-w-[240px]" }}
              className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
          </div>
          <Button color="amber" size="md" className="rounded-lg">
            Search
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

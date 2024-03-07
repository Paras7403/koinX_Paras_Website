"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "./logo";
import { MenuIcon, X } from "lucide-react";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const changeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuItems = ["Crypto Taxes", "Free Tools", "Resource Center"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="md:block hidden">
          <Link color="foreground">
            Crypto Taxes
          </Link>
        </NavbarItem>
        <NavbarItem className="md:block hidden">
          <Link color="foreground">
            Free Tools
          </Link>
        </NavbarItem>
        <NavbarItem className="md:block hidden">
          <Link color="foreground" >
            Resouces
          </Link>
        </NavbarItem>
        <NavbarItem className="md:block hidden">
          <Button
            className="bg-[#2870EA] text-white font-medium"
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent className="md:hidden items-center flex justify-center w-full">
        <button onClick={setIsMenuOpen}>{!isMenuOpen ? <MenuIcon /> : <X />}</button>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <Button color="primary">Get Started</Button>
      </NavbarMenu>
    </Navbar>
  );
}

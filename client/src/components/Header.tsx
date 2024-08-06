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
import { Progress } from "@nextui-org/react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
      "Profile",
      "Dashboard",
      "Settings",
      "Help",
      "Connect Wallet",
    ];
  return (
    <Navbar className="bg-black text-white" onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit text-2xl">APT-<span className="text-yellow-500">REELIFY</span></p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link className="text-white" href="#">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className="text-white" href="#">
          Integrations
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
     
      <NavbarItem>
        <Button  color="primary" href="#" variant="flat">
          Connect Wallet
        </Button>
      </NavbarItem>
    </NavbarContent>
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2
                ? "primary"
                : index === menuItems.length - 1
                ? "danger"
                : "foreground"
            }
            className="w-full"
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  )
}

export default Header
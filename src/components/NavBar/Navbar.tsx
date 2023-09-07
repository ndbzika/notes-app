import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useNav } from "@/components/NavBar/useNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel } from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isLogged } = useNav();

  return (
    <NavigationMenu>
      <NavigationMenuList className="w-screen">
        <NavigationMenuItem className="w-32">
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {(isLogged && (
          <>
            <NavigationMenuItem className="w-32">
              <Link to="/notes">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  My Notes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-32">
              <DropdownMenu>
                <DropdownMenuTrigger className={navigationMenuTriggerStyle()}>
                  <span>Account</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel> My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link to={"/profile"}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <Link to="/logout">
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </>
        )) || (
          <>
            <NavigationMenuItem className="w-32">
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-32">
              <Link to="/login">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Login
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

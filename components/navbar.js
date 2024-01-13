'use client'
import { usePathname } from "next/navigation";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

const siteConfig={ navItems: [
	{
		label: "Home",
		href: "/",
	},
{
  label: "Services",
  href: "/services",
},
{
  label: "Contact",
  href: "/contact",
},

{
  label: "My Profile",
  href: "/profile",
},
{
  label: "About",
  href: "/about",
}
],}

import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";


import Image from "next/image";

export const Navbar = () => {
const pathname=usePathname();	
// console.log(pathname==='/services')
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image alt="Image" height={40}width={40}src="/topi.png"/>
						<p className="font-bold text-inherit">Tahiri Services</p>
					</NextLink>
				</NavbarBrand>
				
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			><NavbarItem className="hidden md:flex">
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (<div key={item.href}><NavbarItem >
							<Link
								color={pathname!==item.href?"primary":"success"}
								href={item.href}
							>
								{item.label}
							</Link>
						</NavbarItem></div>
					))}
				</ul>
				</NavbarItem>
				<NavbarItem className="hidden sm:flex gap-2">
					
					<ThemeSwitch />
				</NavbarItem>			
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
			
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (<div key={`${item}-${index}`}>
						<NavbarMenuItem>
							<Link
								color={pathname!==item.href?"primary":"secondary"}
								href={`${item.href}`}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
						</div>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};

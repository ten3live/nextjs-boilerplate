import React from "react";
import {Navbar, NavbarBrand,NavbarMenu, NavbarContent,NavbarMenuToggle,NavbarMenuItem, NavbarItem, Link, Button} from "@nextui-org/react";
import styles from '../styles/Navbar.module.css';
import Image from "next/image";
import Modal from './Modal'
export default function App() {
 
  return (
    <Navbar>
    

      <NavbarBrand >
          <Image width={50} height={50} alt="User settings" src="/topi.png" /> 
          <p className="font-bold text-inherit"id={styles.title}style={{marginTop:10}}>Tahiri Services</p>
        </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       
        <NavbarItem isActive>
        <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Register
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
           <Modal name="Login"/>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle id={styles.title} />
      </NavbarContent>

      <NavbarMenu>
      <NavbarMenuItem isActive>
        <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#" aria-current="page">
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Register
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
           <Modal name="Login"/>
          </Link>
        </NavbarMenuItem>
        
      </NavbarMenu>
    </Navbar>
  );
}

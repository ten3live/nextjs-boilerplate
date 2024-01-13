'use client'
import React,{useEffect} from 'react'
import { Link } from "@nextui-org/link";
import Image from 'next/image'
import { Card,CardHeader } from "@nextui-org/react"
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { Spinner } from '@nextui-org/spinner';
import ImageCarousel from '@/components/Carousel';
import clsx from "clsx";

export default function Home() {

// useEffect(() => {
//   <Spinner></Spinner>

//   return () => {
// 	second
//   }
// }, [third])

return (<div>
		<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
		<ImageCarousel className="opacity-40 blur-0" />
	
		<section className="absolute flex flex-col items-center justify-center gap-4 py-8 mt-4 md:py-10">
		
			<div className=" inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "secondary" })}>Welcome to </h1><br/>
				<h1 className={clsx(`${title({ color: "violet" })}`,'')}>Tahiri Services&nbsp;</h1>
				<br />
			
				<h3 className={subtitle({color: "dark"})}>
				Powerful services that grow your business.
				</h3>
			</div>
			
			<div className="flex gap-3">
			<Link
				
				className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				href="/services"
			>
				
				Services
			</Link>
				<Link
					
					href="/contact"
					className={buttonStyles({ color: "secondary", radius: "full", variant: "shadow" })}

				>
					Contact Us
				</Link>
				
			</div>
			
		</section>
		</div>
		<section  className="items-center text-center justify-evenly py-5">
		<h1 className={title({ color: "violet" })}>Services&nbsp;</h1>

		<div className="md:flex items-center justify-evenly py-5">

		<Card className="bg-gradient-to-br from-violet-500 to-fuchsia-500 col-span-12 sm:col-span-4 m-10 h-[120px] w-[250px]">
      <CardHeader className="flex-col !items-center py-8 px-5">
        <h2 className="text-white uppercase font-bold text-large">Android Apps</h2>
        <p className="text-tiny text-white/60 font-medium">Develop Android App</p>
      </CardHeader>
      
    </Card>
		<Card className="bg-gradient-to-br from-violet-500 to-fuchsia-500 col-span-12 sm:col-span-4 m-10 h-[120px] w-[250px]">
      <CardHeader className="flex-col !items-center py-8 px-5">
        <h2 className="text-white uppercase font-bold text-large">Websites</h2>
        <p className="text-tiny text-white/60 font-medium">Develop Amazing Website</p>
      </CardHeader>
      
    </Card>
		<Card className="bg-gradient-to-br from-violet-500 to-fuchsia-500 col-span-12 sm:col-span-4 m-10 h-[120px] w-[250px]">
      <CardHeader className="flex-col !items-center py-8 px-5">
	  <h2 className="text-white uppercase font-bold text-large">SEO</h2>
        <p className="text-tiny text-white/60 font-medium">Search Engine Optimization</p>
      </CardHeader>
      
    </Card>
		<Card className="bg-gradient-to-br from-violet-500 to-fuchsia-500 col-span-12 sm:col-span-4 m-10 h-[120px] w-[250px] ">
      <CardHeader className=" flex-col !items-center py-8 px-5">
        <h2 className="text-white uppercase font-bold text-large">Graphics Design</h2>
        <p className="text-tiny text-white/60 font-medium ">Design Logo - Headers - Footers</p>
      </CardHeader>
      
    </Card>

	</div>
		</section>
	
		</div>
	);
}

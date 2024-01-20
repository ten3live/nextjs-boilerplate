'use client'
import React,{useEffect} from 'react'
import { Link } from "@nextui-org/link";
import Image from 'next/image'
import { Card,CardHeader } from "@nextui-org/react"
import { button as buttonStyles } from "@nextui-org/theme";

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
		<div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
		<ImageCarousel className="opacity-90  " />
	
		<section className="absolute  text-white flex flex-col items-center justify-center gap-4 py-10 mt-4 md:py-10">
		
			<div className="inline-block max-w-lg text-center justify-center">
	
				<h1 className={' text-4xl font-bold bg-gradient-to-br rounded-md text-center px-1 py-1 from-purple-950 to-blue-900 lg:text-7xl'}>Tahiri Services</h1>

				
				<p className={"text-center bg-gradient-to-br opacity-80 from-purple-900 to-slate-600 rounded-md"}>
				Powerful services that grow your business.
				</p>
				<br />
			
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
		<h4 className={'text-5xl text-slate-900'}>Services&nbsp;</h4>

		<div className="md:flex block items-center grid place-content-center justify-center md:justify-evenly py-2">

		<Card className="bg-gradient-to-br from-purple-800 to-slate-900 col-span-12 sm:col-span-4 m-10 h-[120px] w-[250px]">
      <CardHeader className="flex-col !items-center py-8 px-5">
        <h2 className="text-white uppercase font-bold text-large">Android Apps</h2>
        <p className="text-tiny text-white/60 font-medium">Develop Android App</p>
      </CardHeader>
      
    </Card>
		<Card className="bg-gradient-to-br from-purple-800 to-slate-900 col-span-12 sm:col-span-4 m-10 h-[120px] w-[250px]">
      <CardHeader className="flex-col !items-center py-8 px-5">
        <h2 className="text-white uppercase font-bold text-large">Websites</h2>
        <p className="text-tiny text-white/60 font-medium">Develop Amazing Website</p>
      </CardHeader>
      
    </Card>
		<Card className="bg-gradient-to-br from-purple-800 to-slate-900 col-span-12 sm:col-span-4 m-10 h-[120px] w-[250px]">
      <CardHeader className="flex-col !items-center py-8 px-5">
	  <h2 className="text-white uppercase font-bold text-large">SEO</h2>
        <p className="text-tiny text-white/60 font-medium">Search Engine Optimization</p>
      </CardHeader>
      
    </Card>
		<Card className="bg-gradient-to-br from-purple-800 to-slate-900 col-span-12 sm:col-span-4 m-10 h-[120px] w-[250px] ">
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

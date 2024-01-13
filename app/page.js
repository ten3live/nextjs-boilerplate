import { Link } from "@nextui-org/link";
import Image from 'next/image'
import { Card,CardHeader } from "@nextui-org/react"
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import ImageCarousel from '@/components/Carousel';


export default function Home() {
	return (<div>
		<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><ImageCarousel/></div>
		<section className="flex flex-col items-center justify-center gap-4 py-8 mt-4 md:py-10">
		
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Welcome to </h1><br/>
				<h1 className={title({ color: "violet" })}>Tahiri Services&nbsp;</h1>
				<br />
			
				<h3 className={subtitle({ class: "mt-4 px-4" })}>
					Here we provide Quality services to you such as Website Development,Android Apps,Logo Design and SEO
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
		<section className="flex items-center justify-evenly">
		<Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
	  	width={400}
		height={400}
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/topi.png"
      />
    </Card>
		<Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
	  	width={400}
		height={400}
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/topi.png"
      />
    </Card>
		<Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
	  	width={400}
		height={400}
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/topi.png"
      />
    </Card>
		<Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
	  	width={400}
		height={400}
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/topi.png"
      />
    </Card>


		</section>
		</div>
	);
}

'use client'

import Image from "next/image";


export const Footer = () => {
	const currentYear = new Date().getFullYear();
return (<div className="flex items-end w-full min-h-screen text-white">

    <footer className="w-full text-white-700 bg-violet-950 body-font">
        <div
            className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a className="flex items-center justify-center font-medium text-white-900 title-font md:justify-start">
                   <Image width={80}height={80}src={'/favicon.ico'}/>
                </a>
                <p className="mt-2 text-sm text-white-500">Tahiri Services</p>
                <div className="mt-4">
                 
                </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white-900 uppercase title-font">About</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Company</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Careers</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Blog</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white-900 uppercase title-font">Support</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Contact Support</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Help Resources</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Release Updates</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white-900 uppercase title-font">Platform
                    </h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Terms &amp; Privacy</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Pricing</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">FAQ</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white-900 uppercase title-font">Contact</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">Send a Message</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">ten3live@gmail.com</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-white-500 cursor-pointer hover:text-white-900">+92 305 8452372</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
                <p className="text-sm text-black capitalize xl:text-center">© {currentYear} All rights reserved </p>
            </div>
        </div>
    </footer>

</div>
	);
};

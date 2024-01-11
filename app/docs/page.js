'use client'
import { useState, useEffect } from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

import {animals} from "@/components/data";

export default function DocsPage() {
	const [isClient, setIsClient] = useState(false)
	const radius = ['full', 'lg', 'md', 'sm', 'none'];
	const itemClasses = {
		base: "py-0 w-full",
		title: "font-normal text-medium",
		trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
		indicator: "text-medium",
		content: "text-small px-2",
	  };
	  const defaultContent =
	  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	
	 
 
	  useEffect(() => {
		setIsClient(true)
	  }, [])
	return (<div>{isClient &&<div><Accordion
      showDivider={false}
      className="p-2 flex flex-col gap-1 w-full max-w-[300px]"
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        aria-label="Connected devices"
        
        subtitle={
          <p className="flex">
            2 issues to <p className="text-primary ml-1">fix now</p>
          </p>
        }
        title="Connected devices"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Apps Permissions"
       
        subtitle="3 apps have read permissions"
        title="Apps Permissions"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Pending tasks"
        classNames={{ subtitle: "text-warning" }}
       
        subtitle="Complete your profile"
        title="Pending tasks"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Card expired"
        classNames={{ subtitle: "text-danger" }}
  
        subtitle="Please, update now"
        title={
          <p className="flex gap-1 items-center">
            Card expired
            <p className="text-default-400 text-small">*4812</p>
          </p>
        }
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
	

	{/* Auto Complete */}

    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete 
        label="Select an animal" 
        className="max-w-xs" 
      >
        {animals.map((animal) => (
          <AutocompleteItem key={animal.value} value={animal.value}>
            {animal.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        label="Favorite Animal"
        placeholder="Search an animal"
        className="max-w-xs"
        defaultItems={animals}
      >
        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
      </Autocomplete>
    </div>


	{/* Avatar*/}

	<Avatar src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" size="lg" />


{/* Breadcrumb*/}



	<div className="flex flex-col flex-wrap gap-4">
      {radius.map((r) => (
        <Breadcrumbs key={r} radius={r} variant="solid">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      ))}
    </div>












	</div>
}</div>);
}

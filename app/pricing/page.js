'use client'
import React from "react";

import { Input } from "@nextui-org/input";
import {Listbox,ListboxItem, ListboxSection, cn} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue} from "@nextui-org/react";
import {useInfiniteScroll} from "@nextui-org/use-infinite-scroll";
import {useAsyncList} from "@react-stately/data";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,RadioGroup, Radio,useDisclosure, Checkbox, Link} from "@nextui-org/react";

export default function PricingPage() {
	const [value, setValue] = React.useState("");
	const [page, setPage] = React.useState(1);
	const {isOpen, onOpen, onClose} = useDisclosure();

  
	const [isLoading, setIsLoading] = React.useState(true);
	const [hasMore, setHasMore] = React.useState(false);
	const [modalPlacement, setModalPlacement] = React.useState("auto");
    const [backdrop, setBackdrop] = React.useState('opaque')

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }


  
	const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
	const sizes = ["sm", "md", "lg"];
	const isInvalid = React.useMemo(() => {
	  if (value === "") return false;
  
	  return validateEmail(value) ? false : true;
	}, [value]);
  
	let list = useAsyncList({
	  async load({signal, cursor}) {
  
		if (cursor) {
		  setIsLoading(false);
		}
  
		// If no cursor is available, then we're loading the first page.
		// Otherwise, the cursor is the next URL to load, as returned from the previous page.
		const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", {signal});
		let json = await res.json();
  
		setHasMore(json.next !== null);  
		return {
			items: json.results,
			cursor: json.next,
		  };
		},
	  });
	
	  const [loaderRef, scrollerRef] = useInfiniteScroll({hasMore, onLoadMore: list.loadMore});
	
	return (
		<div>
			<h1>Valid Email</h1>
			    <Input
      value={value}
      type="email"
      label="Email"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="max-w-xs"
    />



<div className="w-full flex flex-col gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input size={size} type="email" label="Email" />
          <Input size={size} type="email" label="Email" placeholder="Enter your email" />
        </div>
      ))}  
    </div>


	<div>
	<Listbox
      aria-label="User Menu"
      onAction={(key) => alert(key)}
      className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem
        key="issues"
       
      >
        Issues
      </ListboxItem>
      <ListboxItem
        key="pull_requests"
      
      >
        Pull Requests
      </ListboxItem>
      <ListboxItem
        key="discussions"
      
      >
        Discussions
      </ListboxItem>
      <ListboxItem
        key="actions"
       
      >
        Actions
      </ListboxItem>
      <ListboxItem
        key="projects"
     
      >
        Projects
      </ListboxItem>
      <ListboxItem
        key="releases"
        className="group h-auto py-3"
      
        textValue="Releases"
      >
        <div className="flex flex-col gap-1">
          <span>Releases</span>
          <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
            <span className="text-tiny text-default-600">@nextui-org/react@2.0.10</span>
            <div className="flex gap-2 text-tiny">
              <span className="text-default-500">49 minutes ago</span>
              <span className="text-success">Latest</span>
            </div>
          </div>
        </div>
      </ListboxItem>
      <ListboxItem
        key="contributors"
      
      >
        Contributors
      </ListboxItem>
      <ListboxItem
        key="watchers"
       
      >
        Watchers
      </ListboxItem>
      <ListboxItem
        key="license"
        endContent={<span className="text-small text-default-400">MIT</span>}
      
      >
        License
      </ListboxItem>
    </Listbox>
    </div>

    <Table
      isHeaderSticky
      aria-label="Example table with infinite pagination"
      baseRef={scrollerRef}
      bottomContent={
        hasMore ? (
          <div className="flex w-full justify-center">
            <Spinner ref={loaderRef} color="white" />
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[400px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn key="height">Height</TableColumn>
        <TableColumn key="mass">Mass</TableColumn>
        <TableColumn key="birth_year">Birth year</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner color="white" />}
      >
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>






{/* <div>      <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal></div> */}



<div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button  
            key={b}
            variant="flat" 
            color="warning" 
            onPress={() => handleOpen(b)}
            className="capitalize"
          >
           {b}
          </Button>
        ))}  
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
 


		</div>
	);
}

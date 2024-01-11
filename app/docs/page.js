'use client'
import React,{ useState, useEffect } from 'react'
import {Accordion, AccordionItem, Chip, CircularProgress} from "@nextui-org/react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {Textarea,Button,Link,ButtonGroup} from "@nextui-org/react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Image,Slider,Divider,Checkbox,CheckboxGroup} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User,Radio,RadioGroup} from "@nextui-org/react";
import {Tabs, Tab, Input} from "@nextui-org/react";

import {animals} from "@/components/data";

export default function DocsPage() {
	const [isClient, setIsClient] = useState(false)
  const [liked, setLiked] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [value, setValue] = React.useState(75);
  const [selectedColor, setSelectedColor] = React.useState("default")
  const [selected, setSelected] = React.useState("login");
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const variants = ["solid", "bordered", "light", "flat", "faded", "shadow"];

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue((v) => (v >= 100 ? 0 : v + 10));
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);

	const radius = ['full', 'lg', 'md', 'sm', 'none'];

  const DropdownContent = ({variant, color}) => (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          color={color}
          variant={variant}
          className="capitalize"
        >
          {variant}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dropdown Variants"
        color={color} 
        variant={variant}
      >
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )


  const list = [
    {
      title: "Orange",
      img: "/topi.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/topi.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/topi.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/topi.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/topi.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/topi.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/topi.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/topi.png",
      price: "$12.20",
    },
  ];

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

    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
      <Textarea
        label="Description"
        placeholder="Enter your description (Default autosize)"
      />
      <Textarea
        minRows={2}
        label="Description"
        placeholder="Enter your description (Min rows 2)"
      />
      <Textarea
        maxRows={3}
        label="Description"
        placeholder="Enter your description (Max rows 3)"
      />
    </div>
    <div className="flex flex-wrap gap-4 items-center">
      <Button color="default">
        Default
      </Button>
      <Button color="primary">
        Primary
      </Button>  
      <Button color="secondary">
        Secondary
      </Button>  
      <Button color="success">
        Success
      </Button>  
      <Button color="warning">
        Warning
      </Button>  
      <Button color="danger">
        Danger
      </Button>
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Button
    </Button>
    <Button
      href="https://github.com/nextui-org/nextui"
      as={Link}
      color="primary"
      showAnchorIcon
      variant="solid"
    >
      Button Link
    </Button>
  
    {/* <Button color="success" endContent={<CameraIcon/>}>
        Take a photo
      </Button>    
      <Button color="danger" variant="bordered" startContent={<UserIcon/>}>
        Delete user
      </Button> */}

<Button color="primary" variant="solid">
        Solid
      </Button>
      <Button color="primary" variant="faded">
        Faded
      </Button>  
      <Button color="primary" variant="bordered">
        Bordered
      </Button>  
      <Button color="primary" variant="light">
        Light
      </Button>  
      <Button color="primary" variant="flat">
        Flat
      </Button>  
      <Button color="primary" variant="ghost">
        Ghost
      </Button>  
      <Button color="primary" variant="shadow">
        Shadow
      </Button>  

      <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    </div>
    



    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
        <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
      </CardHeader>
      <Image
        removeWrapper
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
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/topi.png"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/topi.png"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl">Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/topi.png"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/topi.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/topi.png"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
  </div>

  <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="/topi.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-small text-foreground/80">12 Tracks</p>
                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <div
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <div className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <div />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <div size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <div />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <div className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/topi.png"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/topi.png"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
    <div className="flex gap-4">
      <Checkbox defaultSelected size="sm">Small</Checkbox>
      <Checkbox defaultSelected size="md">Medium</Checkbox>
      <Checkbox defaultSelected size="lg">Large</Checkbox>
    </div>  

    <div className="flex gap-4">
      <Chip color="warning" variant="solid">Solid</Chip>
      <Chip color="warning" variant="bordered">Bordered</Chip>
      <Chip color="warning" variant="light">Light</Chip>
      <Chip color="warning" variant="flat">Flat</Chip>
      <Chip color="warning" variant="faded">Faded</Chip>
      <Chip color="warning" variant="shadow">Shadow</Chip>
      <Chip color="warning" variant="dot">Dot</Chip>
    </div>
    <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          2800 Data points
        </Chip>
      </CardFooter>
    </Card>
    <CircularProgress
      aria-label="Loading..."
      size="lg"
      value={value}
      color="warning"
      showValueLabel={true}
    />
	
  
  
  <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description="@tonyreichert"
            name="Tony Reichert"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@tonyreichert</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">NextUI Components</h4>
        <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-small">
        <div>Blog</div>
        <Divider orientation="vertical" />
        <div>Docs</div>
        <Divider orientation="vertical" />
        <div>Source</div>
      </div>

      <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownItem
          key="new"
          shortcut="⌘N"
          description="Create a new file"
        
        >
          New file
        </DropdownItem>
        <DropdownItem
          key="copy"
          shortcut="⌘C"
          description="Copy the file link"
        
        >
          Copy link
        </DropdownItem>
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          showDivider
          description="Allows you to edit the file"

        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧D"
          description="Permanently delete the file"
         
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <DropdownContent key={variant} color={selectedColor} variant={variant} />
      ))}
      <RadioGroup
        label="Select dropdown color"
        orientation="horizontal"
        color={selectedColor}
        defaultValue="default"
        onValueChange={setSelectedColor}
      >
        <Radio value="default">Default</Radio>
        <Radio value="primary">Primary</Radio>
        <Radio value="secondary">Secondary</Radio>
        <Radio value="success">Success</Radio>
        <Radio value="warning">Warning</Radio>
        <Radio value="danger">Danger</Radio>
      </RadioGroup>
    </div>

    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>

      <Image
      isBlurred
      isZoomed

      width={240}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      classNames="m-5"
    />
   <Image
      width={300}
      height={200}
      isZoomed

      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
      fallbackSrc="https://via.placeholder.com/300x200"
      alt="NextUI Image with fallback"
    />
<Image
      width={300}
      height={200}
      isZoomed

      alt="NextUI hero Image with delay"
      src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />

<div className="w-full flex flex-col gap-2 max-w-[240px]">
      <Input
        label="Email"
        placeholder="Enter your email"
        value={value}
        onValueChange={setValue}
      />
      <p className="text-default-500 text-small">Input value: {value}</p>
      <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            "hide"
          ) : (
            "show"
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
    <div className="w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        
      />
    </div>
</div>
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          // startContent={
          //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          // }
        />
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui.org"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          // endContent={
          //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          // }
        />
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.org/</span>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          label="Email"
          placeholder="nextui"
          labelPlacement="outside"
          // startContent={
          //   <MailIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          // }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">@gmail.com</span>
            </div>
          }
        />
        <Input
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>ARS</option>
                <option>EUR</option>
              </select>
            </div>
          }
          type="number"
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.org</span>
            </div>
          }
        />
      </div>
    </div>  

    </div>







 

    </div>
  
  </div>
  
}</div>);
}

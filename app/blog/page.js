'use client'
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Progress, Snippet, Spacer, Spinner, Switch} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button, User} from "@nextui-org/react";
import {RadioGroup, Radio, useRadio, VisuallyHidden, cn} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Card,Skeleton} from "@nextui-org/react";
import {Tabs, Tab, CardBody, CardHeader} from "@nextui-org/react";

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
const tabs = [
    {
      id: "photos",
      label: "Photos",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "music",
      label: "Music",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "videos",
      label: "Videos",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];
export const CustomRadio = (props) => {
	const {
	  Component,
	  children,
	  isSelected,
	  description,
	  getBaseProps,
	  getWrapperProps,
	  getInputProps,
	  getLabelProps,
	  getLabelWrapperProps,
	  getControlProps,
	} = useRadio(props);
  
	return (
	  <Component
		{...getBaseProps()}
		className={cn(
		  "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
		  "max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
		  "data-[selected=true]:border-primary",
		)}
	  >
		<VisuallyHidden>
		  <input {...getInputProps()} />
		</VisuallyHidden>
		<span {...getWrapperProps()}>
		  <span {...getControlProps()} />
		</span>
		<div {...getLabelWrapperProps()}>
		  {children && <span {...getLabelProps()}>{children}</span>}
		  {description && (
			<span className="text-small text-foreground opacity-70">{description}</span>
		  )}
		</div>
	  </Component>
	);
  };
  

export default function BlogPage() {
	const [value, setValue] = React.useState(50);
const users = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
  {
    key: "5",
    name: "Emily Collins",
    role: "Marketing Manager",
    status: "Active",
  },
  {
    key: "6",
    name: "Brian Kim",
    role: "Product Manager",
    status: "Active",
  },
  {
    key: "7",
    name: "Laura Thompson",
    role: "UX Designer",
    status: "Active",
  },
  {
    key: "8",
    name: "Michael Stevens",
    role: "Data Analyst",
    status: "Paused",
  },
  {
    key: "9",
    name: "Sophia Nguyen",
    role: "Quality Assurance",
    status: "Active",
  },
  {
    key: "10",
    name: "James Wilson",
    role: "Front-end Developer",
    status: "Vacation",
  },
  {
    key: "11",
    name: "Ava Johnson",
    role: "Back-end Developer",
    status: "Active",
  },
  {
    key: "12",
    name: "Isabella Smith",
    role: "Graphic Designer",
    status: "Active",
  },
  {
    key: "13",
    name: "Oliver Brown",
    role: "Content Writer",
    status: "Paused",
  },
  {
    key: "14",
    name: "Lucas Jones",
    role: "Project Manager",
    status: "Active",
  },
  {
    key: "15",
    name: "Grace Davis",
    role: "HR Manager",
    status: "Active",
  },
  {
    key: "16",
    name: "Elijah Garcia",
    role: "Network Administrator",
    status: "Active",
  },
  {
    key: "17",
    name: "Emma Martinez",
    role: "Accountant",
    status: "Vacation",
  },
  {
    key: "18",
    name: "Benjamin Lee",
    role: "Operations Manager",
    status: "Active",
  },
  {
    key: "19",
    name: "Mia Hernandez",
    role: "Sales Manager",
    status: "Paused",
  },
  {
    key: "20",
    name: "Daniel Lewis",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    key: "21",
    name: "Amelia Clark",
    role: "Social Media Specialist",
    status: "Active",
  },
  {
    key: "22",
    name: "Jackson Walker",
    role: "Customer Support",
    status: "Active",
  },
  {
    key: "23",
    name: "Henry Hall",
    role: "Security Analyst",
    status: "Active",
  },
  {
    key: "24",
    name: "Charlotte Young",
    role: "PR Specialist",
    status: "Paused",
  },
  {
    key: "25",
    name: "Liam King",
    role: "Mobile App Developer",
    status: "Active",
  },
];
	const [page, setPage] = React.useState(1);
	const rowsPerPage = 4;
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));
	const [selectedColor, setSelectedColor] = React.useState("default");
	const [isLoaded, setIsLoaded] = React.useState(false);
	const CustomCard = () => (
		<Card className="w-[200px] space-y-5 p-4" radius="2xl">
		  <div className="h-24 rounded-lg bg-default-300"></div>
		  <div className="space-y-3">
			<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
			<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
			<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
		  </div>
		</Card>
	  );
	const toggleLoad = () => {
	  setIsLoaded(!isLoaded);
	};
  
	const selectedValue = React.useMemo(
	  () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
	  [selectedKeys]
	);
  
	const pages = Math.ceil(users.length / rowsPerPage);
  
	const items = React.useMemo(() => {
	  const start = (page - 1) * rowsPerPage;
	  const end = start + rowsPerPage;
  
	  return users.slice(start, end);
	}, [page, users]);
  
  
	return (
		<div>
			    <Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name">NAME</TableColumn>
        <TableColumn key="role">ROLE</TableColumn>
        <TableColumn key="status">STATUS</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>



	<Popover showArrow placement="bottom">
      <PopoverTrigger>
        <User   
          as="button"
          name="Zoe Lang"
          description="Product Designer"
          className="transition-transform"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <h1>SomeThing</h1>
      </PopoverContent>
    </Popover>

	<Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
    />
	    <Progress
      aria-label="Downloading..."
      size="md"
      value={value}
      color="success"
      showValueLabel={true}
      className="max-w-md"
    />





<RadioGroup label="Plans">
      <CustomRadio description="Up to 20 items" value="free">
        Free
      </CustomRadio>
      <CustomRadio description="Unlimited items. $10 per month." value="pro">
        Pro
      </CustomRadio>
      <CustomRadio
        description="24/7 support. Contact us for pricing."
        value="enterprise"
      >
        Enterprise
      </CustomRadio>
    </RadioGroup>

    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>


	<div className="flex flex-col gap-3">
      <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <div className="h-24 rounded-lg bg-secondary"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
          </Skeleton>
        </div>
      </Card>
      <Button size="sm" variant="flat" color="secondary" onPress={toggleLoad}>
        {isLoaded ? "Show" : "Hide"} Skeleton
      </Button>

	  <div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12"/>
      </div>  
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
      </div>
    </div>
    <div className="flex flex-wrap gap-4">
      <Snippet variant="bordered">npm install @nextui-org/react</Snippet>
      <Snippet variant="flat" color="warning">npm install @nextui-org/react</Snippet>
	  <Spacer x={10} />
	  
	  <Snippet variant="solid" color="primary">npm install @nextui-org/react</Snippet>
      <Snippet variant="shadow" color="secondary">npm install @nextui-org/react</Snippet>
    </div> 


	<div className="flex">
      <CustomCard />
      <Spacer x={4} />
      <CustomCard />
      <Spacer x={4} />
      <CustomCard />
    </div>
	<Spinner label="Default" color="default" labelColor="foreground"/>
      <Spinner label="Primary" color="primary" labelColor="primary"/>
      <Spinner label="Secondary" color="secondary" labelColor="secondary"/>
      <Spinner label="Success" color="success" labelColor="success"/>
      <Spinner label="Warning" color="warning" labelColor="warning"/>
      <Spinner label="Danger" color="danger" labelColor="danger"/>
	  <Switch defaultSelected color="default">Default</Switch>
      <Switch defaultSelected color="primary">Primary</Switch>
      <Switch defaultSelected color="secondary">Secondary</Switch>
      <Switch defaultSelected color="success">Success</Switch>
      <Switch defaultSelected color="warning">Warning</Switch>
      <Switch defaultSelected color="danger">Danger</Switch>
	  <div className="flex flex-col gap-3">
      <Table 
        color={selectedColor}
        selectionMode="multiple" 
        defaultSelectedKeys={["2", "3"]} 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <RadioGroup 
        label="Selection color"
        orientation="horizontal"
        value={selectedColor} 
        onValueChange={setSelectedColor}
      >
        {colors.map((color) => (
          <Radio
            key={color}
            color={color}  
            value={color}
            className="capitalize"
          >
            {color}
          </Radio>  
        ))}
      </RadioGroup>
    </div>

    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
    </div>
		</div>
	);
}

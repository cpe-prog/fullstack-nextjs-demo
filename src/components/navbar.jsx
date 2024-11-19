/* eslint-disable @next/next/no-img-element */
"use client";

import LOGO from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DashboardIcon, Humburger, InventoryIcon, ItemsIcon } from "./icons";
import { ModeToggle } from "./mode";
import ProfileInfo from "./profileInfo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NavBar() {
	const [isClick, setIsClick] = useState(false);

	const handleClick = () => {
		setIsClick(!isClick);
		console.log(isClick);
	};

	const position = "flex justify-center";
	const inActive =
		"py-2 px-2 m-0 w-32 flex justify-start rounded-md bg-foreground text-background";
	return (
		<div className="w-full h-20 w- backdrop-blur-md border-b-2 border-slate-700 fixed shadow-lg">
			<nav className="h-20 px-8 flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<Link className="flex gap-2 items-center" href={"/"}>
						<Image src={LOGO} width={55} height={55} alt="logo" />
						<h1>FoodHub</h1>
					</Link>
					<div className="ml-8">
						<Button onClick={handleClick} size="icon" variant="outline">
							<Humburger />
						</Button>
					</div>
				</div>
				<div>
					<Input />
				</div>
				<div className="flex gap-4 items-center">
					<ProfileInfo />
					<ModeToggle />
				</div>
			</nav>
			<aside
				className={`border-r-2 border-slate-700 shadow-lg h-screen ${
					isClick ? "w-20" : "w-56"
				} `}
			>
				<div className="grid grid-cols-1 w-full">
					<div className={`mt-10 ${position}`}>
						<Button className={isClick ? "" : inActive}>
							<Link
								className="flex gap-2 items-center text-start"
								href={"/dashboard"}
							>
								<DashboardIcon />
								{isClick ? "" : "Dashboard"}
							</Link>
						</Button>
					</div>
					<div className={`${position} mt-4`}>
						<Button className={isClick ? "" : inActive}>
							<Link
								className="flex gap-2 items-center text-start"
								href={"/items"}
							>
								<ItemsIcon />
								{isClick ? "" : "Items"}
							</Link>
						</Button>
					</div>
					<div className={`${position} mt-4`}>
						<Button className={isClick ? "" : inActive}>
							<Link
								className="flex gap-2 items-center text-start"
								href={"/inventory"}
							>
								<InventoryIcon />
								{isClick ? "" : "Inventory"}
							</Link>
						</Button>
					</div>
				</div>
			</aside>
		</div>
	);
}

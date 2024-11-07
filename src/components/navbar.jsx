/* eslint-disable @next/next/no-img-element */
import LOGO from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { DashboardIcon, Humburger, InventoryIcon, ItemsIcon } from "./icons";
import { ModeToggle } from "./mode";
import ProfileInfo from "./profileInfo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NavBar() {
	const position = "flex justify-center";
	const inActive =
		"p-0 m-0 w-32 flex justify-start rounded-md bg-foreground text-background";
	return (
		<div className="w-full h-20 w- backdrop-blur-md border-b-2 border-slate-700 fixed shadow-lg">
			<nav className="h-20 px-8 flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<Link className="flex gap-2 items-center" href={"/"}>
						<Image src={LOGO} width={55} height={55} alt="logo" />
						<h1>FoodHub</h1>
					</Link>
					<div className="ml-8">
						<Humburger />
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
			<aside className="border-r-2 border-slate-700 shadow-lg w-56 h-screen">
				<div className="grid grid-cols-1 w-full">
					<div className={`mt-10 ${position}`}>
						<Button variant="outline" className={inActive}>
							<Link className="p-2 text-start" href={"/dashboard"}>
								<div className="flex gap-2">
									<DashboardIcon />
									Dashboard
								</div>
							</Link>
						</Button>
					</div>
					<div className={`${position} mt-4`}>
						<Button variant="outline" className={inActive}>
							<Link className="p-2 text-start" href={"/items"}>
								<div className="flex gap-2">
									<ItemsIcon />
									Items
								</div>
							</Link>
						</Button>
					</div>
					<div className={`${position} mt-4`}>
						<Button variant="outline" className={inActive}>
							<Link className="p-2 text-start" href={"/inventory"}>
								<div className="flex gap-2">
									<InventoryIcon />
									Inventory
								</div>
							</Link>
						</Button>
					</div>
				</div>
			</aside>
		</div>
	);
}

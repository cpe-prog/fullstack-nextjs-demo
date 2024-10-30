/* eslint-disable @next/next/no-img-element */
import LOGO from "@/assets/images/logo.png";
import Image from "next/image";
import MenuBar from "./menubar";
import { ModeToggle } from "./mode";
import ProfileInfo from "./profileInfo";
import { Button } from "./ui/button";

export default function NavBar() {
	return (
		<div className="w-full h-20 backdrop-blur-md fixed shadow-lg">
			<nav className="h-20 px-8 flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<Image src={LOGO} width={55} height={55} alt="logo" />
					<h1>FoodHub</h1>
				</div>
				<div>
					<MenuBar />
				</div>
				<div className="flex gap-4 items-center">
					<Button>Get Started</Button>
					<ProfileInfo />
					<ModeToggle />
				</div>
			</nav>
		</div>
	);
}

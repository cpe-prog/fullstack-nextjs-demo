/* eslint-disable @next/next/no-img-element */
import LOGO from "@/assets/images/logo.png";
import Image from "next/image";
import { ModeToggle } from "./mode";
import ProfileInfo from "./profileInfo";
import { Input } from "./ui/input";

export default function NavBar() {
	return (
		<div className="w-full h-20 backdrop-blur-md fixed shadow-lg">
			<nav className="h-20 px-8 flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<Image src={LOGO} width={55} height={55} alt="logo" />
					<h1>FoodHub</h1>
					<div className="ml-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-menu"
						>
							<line x1="4" x2="20" y1="12" y2="12" />
							<line x1="4" x2="20" y1="6" y2="6" />
							<line x1="4" x2="20" y1="18" y2="18" />
						</svg>
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
			<aside className=" shadow-lg w-56 h-screen">Hello</aside>
		</div>
	);
}

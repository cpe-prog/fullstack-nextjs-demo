import Logo from "@/assets/images/logo.png";
import { CircleHelp, Contact, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode";
import ProfileInfo from "./profileInfo";
import { Button } from "./ui/button";

export default function NavBar() {
	return (
		<div className="h-20 border-b-2 border-slate-600 w-full fixed">
			<nav className="flex px-8 py-8 h-20 w-full justify-between items-center">
				<div className="flex items-center gap-3">
					<Image src={Logo} alt="logo" width={50} height={50} />
					FoodPark
				</div>
				<div className="flex gap-5"></div>
				<div className="flex items-center gap-5">
					<Button>SignIn</Button>
					<ProfileInfo />
					<ModeToggle />
				</div>
			</nav>
			<aside className="border-r-2 border-slate-600 h-screen w-56">
				<div className="w-full grid grid-cols-1">
					<div className="flex justify-center mt-10">
						<Button className="w-36" variant="outline">
							<Link href={"/"}>
								<div className="flex items-center justify-start text-start gap-5">
									<Home />
									Home
								</div>
							</Link>
						</Button>
					</div>

					<div className="flex justify-center mt-10">
						<Button className="w-36" variant="outline">
							<Link href={"/about"}>
								<div className="flex items-center justify-start text-start gap-5">
									<CircleHelp />
									About
								</div>
							</Link>
						</Button>
					</div>
					<div className="flex justify-center mt-10">
						<Button className="w-36" variant="outline">
							<Link className="flex justify-start" href={"/contact"}>
								<div className="flex items-center justify-start text-start gap-5">
									<Contact />
									Contact
								</div>
							</Link>
						</Button>
					</div>
				</div>
			</aside>
		</div>
	);
}

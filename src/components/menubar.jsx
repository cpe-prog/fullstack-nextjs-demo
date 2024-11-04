import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

export default function MenuBar() {
	return (
		<>
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>
						<Link href={"/"}>Home</Link>
					</MenubarTrigger>
					<MenubarTrigger>
						<Link href={"/dashboard"}>Dashboard</Link>
					</MenubarTrigger>
					<MenubarTrigger>
						<Link href={"/about"}>About</Link>
					</MenubarTrigger>
					<MenubarTrigger>
						<Link href={"/docs"}>Docs</Link>
					</MenubarTrigger>
					<MenubarTrigger>
						<Link href={"/contact"}>Contact</Link>
					</MenubarTrigger>
				</MenubarMenu>
			</Menubar>
		</>
	);
}

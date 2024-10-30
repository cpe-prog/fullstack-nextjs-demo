import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function MenuBar() {
	return (
		<>
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>Dashboard</MenubarTrigger>
					<MenubarTrigger>About</MenubarTrigger>
					<MenubarTrigger>Docs</MenubarTrigger>
					<MenubarTrigger>Contact</MenubarTrigger>
				</MenubarMenu>
			</Menubar>
		</>
	);
}

import NavBar from "@/components/navbar";

export default function Layout({ children }) {
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-56">
				<NavBar />
			</div>
			<div className="flex-grow p-6 overflow-x-auto overflow-y-auto mt-14 md:p-4">
				{children}
			</div>
		</div>
	);
}

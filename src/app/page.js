// import Image from "next/image";
// import { productList } from "@/lib/product";
"use client";

import { LoaderCircle } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		setTimeout(() => {}, 3000);
		redirect("/dashboard");
	});

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="flex gap-3 text-xl">
				<LoaderCircle className="animate-spin" />
				Loading...
			</div>
		</div>
	);
}

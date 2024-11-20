import { productList } from "@/lib/product";
import Image from "next/image";

export default function Products() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 items-center gap-10 justify-center h-screen w-full">
			{productList.map((product) => (
				<div
					key={product.id}
					className="w-56 h-auto p-8 bg-slate-400 rounded-md"
				>
					<div className="grid text-center gap-5 justify-center">
						<h1>{product.productName}</h1>
						<Image src={product.productImage} alt="lotion" />
						<p>{product.description}</p>
					</div>
					<div className="mt-10 flex items-center justify-between">
						<b>Price: {product.price}</b>
						<b>Rate: {product.rate}</b>
					</div>
				</div>
			))}
		</div>
	);
}

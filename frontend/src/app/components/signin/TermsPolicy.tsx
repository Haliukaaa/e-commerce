import Link from "next/link";

export const TermsPolicy = () => {
	return (
		<div className="fixed z-20 w-screen h-screen pointer-events-none">
			<div className="absolute bottom-20 xl:bottom-28 xl:right-24 right-4 text-sm cursor-pointer pointer-events-auto">
				<Link href="/terms">
					<span className="hover:text-blue-500 transition-colors duration-300 ease-in-out">
						Үйлчилгээний нөхцөл
					</span>
				</Link>{" "}
				|{" "}
				<Link href="/policy">
					<span className="hover:text-blue-500 transition-colors duration-300 ease-in-out">
						Нууцлалын бодлого
					</span>
				</Link>
			</div>
		</div>
	);
};

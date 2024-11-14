import React from "react";

import Image from "next/image";

import { SignupSection, TermsPolicy } from "@/app/components/signin";

export default function Signup() {
	return (
		<div className="flex justify-center flex-1 sm:gap-6 md:gap-16 lg:gap-20">
			<section className="display-none relative sm:w-3/5 lg:w-2/4">
				<Image
					src="/login-img.jpeg"
					alt="брэндийн зураг"
					fill
					sizes="100vw"
					loading="lazy"
					className="object-cover"
				/>
			</section>
			<section className="flex w-4/5 flex-col justify-center">
				<SignupSection />
			</section>
			<TermsPolicy />
		</div>
	);
}

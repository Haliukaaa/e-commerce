import React from "react";

import Image from "next/image";

import { SignupSection } from "@/app/components/signup";

export default function Login() {
	return (
		<div className="flex justify-center bg-white md:gap-16 lg:gap-20">
			<section className="display-none relative md:w-3/5 lg:w-2/4">
				<Image
					src="/login-img.jpeg"
					alt="брэндийн зураг"
					layout="fill"
					objectFit="cover"
				/>
			</section>
			<section className="flex w-4/5 flex-col justify-center">
				<SignupSection />
			</section>
		</div>
	);
}

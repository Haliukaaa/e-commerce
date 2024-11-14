import React from "react";
import Link from "next/link";

type TitleProps = {
	title: string;
	subtitle: string;
	addClass?: string;
	spanText?: string;
	spanText2?: string;
	href: string;
};

export const TitleSubtitle = ({
	title,
	subtitle,
	addClass,
	spanText,
	spanText2,
	href,
}: TitleProps): JSX.Element => {
	return (
		<div className="flex flex-col gap-5 md:gap-9 sm:w-4/5 lg:w-full mb-4 w-full">
			<h1 className="font-bold text-primary text-3xl">{title}</h1>
			<p className="text-gray-400 text-base font-semibold">
				{subtitle}
				<Link href={href}>
					<span className={`${addClass}`}> {spanText}</span>
				</Link>
				<span> {spanText2}</span>
			</p>
		</div>
	);
};

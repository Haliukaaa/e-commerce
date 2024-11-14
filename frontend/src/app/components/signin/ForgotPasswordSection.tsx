"use client";
import React from "react";
import Image from "next/image";
import { TitleSubtitle } from ".";
import Form from "rc-field-form";
import type { Meta, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Field } from "rc-field-form";
import Link from "next/link";
import { emailValidation } from "@/app/validations/auth-validation";

interface ForgotPasswordValues {
	email: string;
}

type ChildProps = {
	[key: string]: any;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: () => void;
};

export const ForgotPasswordSection = (): JSX.Element => {
	const [form] = Form.useForm<ForgotPasswordValues>();

	const onFinish = (values: ForgotPasswordValues) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (
		errorInfo: ValidateErrorEntity<ForgotPasswordValues>
	) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="w-full lg:w-2/3 xl:w-2/4">
			<TitleSubtitle
				addClass="text-blue-500"
				title="Нууц үг мартсан?"
				subtitle="Та бүртгэлтэй утасны дугаараа оруулна уу. Бид таны и-мэйл хаяг руу нууц үг сэргээх код явуулах болно."
				href="/"
			/>

			<Form
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				className="w-full flex flex-col gap-4"
				initialValues={{ email: "" }}
			>
				<div className="form-control">
					<Field name="email" rules={emailValidation()}>
						{(control: ChildProps, meta: Meta) => (
							<div className="sm:w-4/5 lg:w-full">
								<input
									{...control}
									type="email"
									placeholder="И-мэйл хаяг"
									className={`input input-primary w-full rounded-md text-black ${
										meta.errors && meta.errors.length > 0 ? "input-error" : ""
									}`}
								/>
								{meta.errors && meta.errors.length > 0 && (
									<div className="text-error text-sm mt-1">
										{meta.errors[0]}
									</div>
								)}
							</div>
						)}
					</Field>
				</div>
				<Link href="/login">
					<p className="cursor-pointer mb-6 text-blue-500 text-sm">Нэвтрэх</p>
				</Link>
				<button
					type="submit"
					className="btn group rounded-none btn-primary w-full sm:w-4/5 text-white text-lg"
				>
					Сэргээх{" "}
					<span className="ml-12 transition-transform duration-200 ease-in-out group-hover:translate-x-2">
						<Image
							src="/right-arrow.png"
							alt="үргэлжлүүлэх"
							width={19}
							height={14}
						/>
					</span>
				</button>
			</Form>
		</div>
	);
};

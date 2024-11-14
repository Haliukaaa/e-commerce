"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TitleSubtitle } from ".";
import Form from "rc-field-form";
import type { FormInstance } from "rc-field-form";
import type { Meta, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Field } from "rc-field-form";
import Link from "next/link";
import {
	emailValidation,
	passwordValidation,
} from "@/app/validations/auth-validation";

interface LoginValues {
	email: string;
	password: string;
}

type ChildProps = {
	[key: string]: any;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: () => void;
};

export const LoginSection = (): JSX.Element => {
	const [form] = Form.useForm<LoginValues>();

	const onFinish = (values: LoginValues) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<LoginValues>) => {
		console.log("Failed:", errorInfo);
	};

	const renderField = (
		type: "email" | "password",
		placeholder: string,
		name: keyof LoginValues,
		form: FormInstance<LoginValues>
	) => (
		<div className="form-control">
			<Field
				name={name}
				rules={name === "email" ? emailValidation() : passwordValidation()}
			>
				{(control: ChildProps, meta: Meta) => (
					<div className="w-full sm:w-4/5 md:w-full lg:w-full">
						<input
							{...control}
							type={type}
							placeholder={placeholder}
							className={`input input-primary w-full rounded-md text-black ${
								meta.errors && meta.errors.length > 0 ? "input-error" : ""
							}`}
						/>
						{meta.errors && meta.errors.length > 0 && (
							<div className="text-error text-sm mt-1">{meta.errors[0]}</div>
						)}
					</div>
				)}
			</Field>
		</div>
	);

	return (
		<div className="w-full lg:w-2/3 xl:w-2/4">
			<TitleSubtitle
				addClass="text-blue-500"
				title="Нэвтрэх"
				subtitle="Хэрэв та бүртгэл үүсгэж амжаагүй бол бүртгэлээ үүсгээрэй"
				href="/"
			/>

			<Form
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				className="w-full flex flex-col gap-4"
				initialValues={{ email: "", password: "" }}
			>
				{renderField("email", "И-мэйл хаяг", "email", form)}
				{renderField("password", "Нууц үг", "password", form)}

				<div className="flex justify-between"><Link href="/signup">
					<p className="cursor-pointer mb-6 text-blue-500 text-sm">
						Бүртгүүлэх?
					</p>
				</Link>
                <Link href="/password">
					<p className="cursor-pointer mb-6 text-blue-500 text-sm">
						Нууц үг мартсан
					</p>
				</Link></div>
				<button
					type="submit"
					className="btn group rounded-none btn-primary w-full sm:w-4/5 text-white text-lg"
				>
					Үргэлжлүүлэх{" "}
					<span className="ml-12 transition-transform duration-200 ease-in-out group-hover:translate-x-2">
						<Image
							src="/right-arrow.png"
							alt="нэвтрэх"
							width={19}
							height={14}
						/>
					</span>
				</button>
			</Form>
		</div>
	);
};

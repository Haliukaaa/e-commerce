"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TitleSubtitle } from ".";
import Form from "rc-field-form";
import type { FormInstance } from "rc-field-form";
import type { Meta, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Field } from "rc-field-form";
import { Alert } from "./";
import {
	emailValidation,
	passwordValidation,
	confirmPasswordValidation,
} from "@/app/validations/auth-validation";

interface SignupValues {
	email: string;
	password: string;
	confirmPassword: string;
}

type ChildProps = {
	[key: string]: any;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: () => void;
};

export const SignupSection = (): JSX.Element => {
	const [form] = Form.useForm<SignupValues>();
	const [showSuccess, setShowSuccess] = useState<boolean>(false);

	const onFinish = (values: SignupValues) => {
		console.log("Success:", values);
		setShowSuccess(true);

		setTimeout(() => {
			setShowSuccess(false);
		}, 3000);
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<SignupValues>) => {
		console.log("Failed:", errorInfo);
		setShowSuccess(false);
	};

	const renderField = (
		type: "email" | "password" | "text",
		placeholder: string,
		name: keyof SignupValues,
		form: FormInstance<SignupValues>
	) => (
		<div className="form-control">
			<Field
				name={name}
				rules={
					name === "email"
						? emailValidation()
						: name === "password"
							? passwordValidation()
							: confirmPasswordValidation(form)
				}
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
		<div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/4">
			{showSuccess && (
				<Alert text="Амжилттай бүртгэгдлээ!"/>
			)}
			<TitleSubtitle
				addClass="text-blue-500"
				spanText="энд дарж нэвтрээрэй."
				title="Бүртгүүлэх"
				subtitle="Бүртгэлтэй юу? Тэгвэл"
				href="/login"
			/>

			<Form
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				className="w-full flex flex-col gap-4"
				initialValues={{ email: "", password: "", confirmPassword: "" }}
			>
				{renderField("email", "И-мэйл хаяг", "email", form)}
				{renderField("password", "Нууц үг", "password", form)}
				{renderField("password", "Нууц үг давтах", "confirmPassword", form)}
				<button
					type="submit"
					className="btn rounded-none group btn-primary mt-14 w-full sm:w-4/5 text-white text-lg"
				>
					Бүртгүүлэх{" "}
					<span className="ml-12 transition-transform duration-200 ease-in-out group-hover:translate-x-2">
						<Image
							src="/right-arrow.png"
							alt="бүртгүүлэх"
							width={19}
							height={14}
						/>
					</span>
				</button>
			</Form>
		</div>
	);
};

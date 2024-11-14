"use client";
import React from "react";
import Image from "next/image";
import { TitleSubtitle } from "./";
import Form from "rc-field-form";
import type { FormInstance } from "rc-field-form";
import type { Meta, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Field } from "rc-field-form";
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

	const onFinish = (values: SignupValues) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<SignupValues>) => {
		console.log("Failed:", errorInfo);
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
					<div>
						<input
							{...control}
							type={type}
							placeholder={placeholder}
							className={`input input-primary w-full text-black ${
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
			<TitleSubtitle
				addClass="text-blue-500"
				spanText="Бүртгэлтэй"
				title="Бүртгүүлэх"
				subtitle="Бүртгүүлэх?"
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
					className="btn btn-primary mt-14 w-3/4 text-white text-lg"
				>
					Бүртгүүлэх{" "}
					<span className="ml-12">
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

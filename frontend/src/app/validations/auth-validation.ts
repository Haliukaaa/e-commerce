import { FormInstance } from "rc-field-form";
import { Rule } from "rc-field-form/es/interface";

export const emailValidation = (): Rule[] => [
	{
		required: true,
		message: "Та и-мэйл хаягаа оруулна уу.",
	},
	{ type: "email", message: "Та зөв форматтай и-мэйл хаяг оруулаарай." },
];

export const passwordValidation = (): Rule[] => [
	{ required: true, message: "Та нууц үгээ оруулна уу." },
	{
		min: 8,
		message: "Таны нууц үг доод тал нь 8 тэмдэгт байх ёстой.",
	},
];

export const confirmPasswordValidation = (form: FormInstance): Rule[] => [
	{
		required: true,
		message: "Нууц үгээ давтан оруулна уу.",
	},
	{
		validator: (_: any, value: string) => {
			if (!value || form.getFieldValue("password") === value) {
				return Promise.resolve();
			}
			return Promise.reject("Нууц үг таарахгүй байна");
		},
	},
];

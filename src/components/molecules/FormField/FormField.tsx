import React from "react";
import { Input } from "../../atoms/Input";
import { Text } from "../../atoms/Text";
import "./FormField.css";

export interface FormFieldProps {
	/**
	 * Field label
	 */
	label?: string;
	/**
	 * Field error message
	 */
	error?: string;
	/**
	 * Field help text
	 */
	helpText?: string;
	/**
	 * Field is required
	 */
	required?: boolean;
	/**
	 * Input props
	 */
	inputProps?: React.ComponentProps<typeof Input>;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
	label,
	error,
	helpText,
	required = false,
	inputProps = {},
	className = "",
}) => {
	const fieldClasses = [
		"form-field",
		error ? "form-field--error" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	const inputVariant = error ? "error" : inputProps.variant || "default";

	return (
		<div className={fieldClasses}>
			{label && (
				<label className="form-field__label">
					<Text as="span" size="sm" weight="medium">
						{label}
						{required && (
							<span className="form-field__required"> *</span>
						)}
					</Text>
				</label>
			)}
			<Input
				{...inputProps}
				variant={inputVariant}
				className={`form-field__input ${inputProps.className || ""}`}
			/>
			{error && (
				<Text
					as="p"
					size="xs"
					color="error"
					className="form-field__error"
				>
					{error}
				</Text>
			)}
			{helpText && !error && (
				<Text
					as="p"
					size="xs"
					color="muted"
					className="form-field__help"
				>
					{helpText}
				</Text>
			)}
		</div>
	);
};

export default FormField;

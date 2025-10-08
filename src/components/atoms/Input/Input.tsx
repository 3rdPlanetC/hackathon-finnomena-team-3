import React from "react";
import "./Input.css";

export interface InputProps {
	/**
	 * Input type
	 */
	type?: "text" | "email" | "password" | "number" | "tel" | "url";
	/**
	 * Input placeholder
	 */
	placeholder?: string;
	/**
	 * Input value
	 */
	value?: string;
	/**
	 * Input name
	 */
	name?: string;
	/**
	 * Input id
	 */
	id?: string;
	/**
	 * Input size
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Input variant
	 */
	variant?: "default" | "error" | "success";
	/**
	 * Disabled state
	 */
	disabled?: boolean;
	/**
	 * Required field
	 */
	required?: boolean;
	/**
	 * Change handler
	 */
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Blur handler
	 */
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	/**
	 * Focus handler
	 */
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const Input: React.FC<InputProps> = ({
	type = "text",
	placeholder,
	value,
	name,
	id,
	size = "medium",
	variant = "default",
	disabled = false,
	required = false,
	onChange,
	onBlur,
	onFocus,
	className = "",
}) => {
	const inputClasses = [
		"input",
		`input--${size}`,
		`input--${variant}`,
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<input
			type={type}
			className={inputClasses}
			placeholder={placeholder}
			value={value}
			name={name}
			id={id}
			disabled={disabled}
			required={required}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
		/>
	);
};

export default Input;

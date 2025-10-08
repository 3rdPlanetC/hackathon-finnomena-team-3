import React from "react";
import "./Button.css";

export interface ButtonProps {
	/**
	 * Button variant
	 */
	variant?: "primary" | "secondary" | "danger" | "ghost";
	/**
	 * Button size
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Button content
	 */
	children: React.ReactNode;
	/**
	 * Disabled state
	 */
	disabled?: boolean;
	/**
	 * Click handler
	 */
	onClick?: () => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "medium",
	children,
	disabled = false,
	onClick,
	className = "",
}) => {
	const buttonClasses = [
		"button",
		`button--${variant}`,
		`button--${size}`,
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button className={buttonClasses} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;

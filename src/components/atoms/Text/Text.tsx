import React from "react";
import "./Text.css";

export interface TextProps {
	/**
	 * Text content
	 */
	children: React.ReactNode;
	/**
	 * Text size
	 */
	size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
	/**
	 * Text weight
	 */
	weight?: "light" | "normal" | "medium" | "semibold" | "bold";
	/**
	 * Text color
	 */
	color?: "primary" | "secondary" | "muted" | "error" | "success" | "warning";
	/**
	 * Text alignment
	 */
	align?: "left" | "center" | "right" | "justify";
	/**
	 * HTML element to render
	 */
	as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const Text: React.FC<TextProps> = ({
	children,
	size = "base",
	weight = "normal",
	color = "primary",
	align = "left",
	as: Component = "p",
	className = "",
}) => {
	const textClasses = [
		"text",
		`text--${size}`,
		`text--${weight}`,
		`text--${color}`,
		`text--${align}`,
		className,
	]
		.filter(Boolean)
		.join(" ");

	return <Component className={textClasses}>{children}</Component>;
};

export default Text;

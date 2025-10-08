import React from "react";
import { Text } from "../../atoms/Text";
import "./Card.css";

export interface CardProps {
	/**
	 * Card title
	 */
	title?: string;
	/**
	 * Card subtitle
	 */
	subtitle?: string;
	/**
	 * Card content
	 */
	children: React.ReactNode;
	/**
	 * Card variant
	 */
	variant?: "default" | "elevated" | "outlined";
	/**
	 * Card size
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Click handler
	 */
	onClick?: () => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const Card: React.FC<CardProps> = ({
	title,
	subtitle,
	children,
	variant = "default",
	size = "medium",
	onClick,
	className = "",
}) => {
	const cardClasses = [
		"card",
		`card--${variant}`,
		`card--${size}`,
		onClick ? "card--clickable" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={cardClasses} onClick={onClick}>
			{(title || subtitle) && (
				<div className="card__header">
					{title && (
						<Text
							as="h3"
							size="lg"
							weight="semibold"
							className="card__title"
						>
							{title}
						</Text>
					)}
					{subtitle && (
						<Text
							as="p"
							size="sm"
							color="secondary"
							className="card__subtitle"
						>
							{subtitle}
						</Text>
					)}
				</div>
			)}
			<div className="card__content">{children}</div>
		</div>
	);
};

export default Card;

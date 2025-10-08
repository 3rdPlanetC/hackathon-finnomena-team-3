import React from "react";
import { Text } from "../../atoms/Text";
import "./Footer.css";

export interface FooterProps {
	/**
	 * Footer content
	 */
	children?: React.ReactNode;
	/**
	 * Copyright text
	 */
	copyright?: string;
	/**
	 * Footer links
	 */
	links?: Array<{
		label: string;
		href: string;
		onClick?: () => void;
	}>;
	/**
	 * Social media links
	 */
	socialLinks?: Array<{
		label: string;
		href: string;
		icon?: React.ReactNode;
	}>;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const Footer: React.FC<FooterProps> = ({
	children,
	copyright = `© ${new Date().getFullYear()} My App. All rights reserved.`,
	links = [],
	socialLinks = [],
	className = "",
}) => {
	return (
		<footer className={`footer ${className}`}>
			<div className="footer__container">
				{children && <div className="footer__content">{children}</div>}

				<div className="footer__bottom">
					<div className="footer__links">
						{links.map((link, index) => (
							<a
								key={index}
								href={link.href}
								onClick={link.onClick}
								className="footer__link"
							>
								{link.label}
							</a>
						))}
					</div>

					{socialLinks.length > 0 && (
						<div className="footer__social">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className="footer__social-link"
									aria-label={social.label}
								>
									{social.icon || social.label}
								</a>
							))}
						</div>
					)}

					<div className="footer__copyright">
						<Text size="sm" color="muted">
							{copyright}
						</Text>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

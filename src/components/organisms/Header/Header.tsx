import React from "react";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import { SearchBox } from "../../molecules/SearchBox";
import "./Header.css";

export interface HeaderProps {
	/**
	 * Site title
	 */
	title?: string;
	/**
	 * Site logo
	 */
	logo?: React.ReactNode;
	/**
	 * Navigation items
	 */
	navItems?: Array<{
		label: string;
		href: string;
		onClick?: () => void;
	}>;
	/**
	 * Show search box
	 */
	showSearch?: boolean;
	/**
	 * Search handler
	 */
	onSearch?: (value: string) => void;
	/**
	 * User menu items
	 */
	userMenuItems?: Array<{
		label: string;
		onClick: () => void;
	}>;
	/**
	 * User name
	 */
	userName?: string;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({
	title = "My App",
	logo,
	navItems = [],
	showSearch = false,
	onSearch,
	userMenuItems = [],
	userName,
	className = "",
}) => {
	return (
		<header className={`header ${className}`}>
			<div className="header__container">
				<div className="header__brand">
					{logo && <div className="header__logo">{logo}</div>}
					<Text
						as="h1"
						size="xl"
						weight="bold"
						className="header__title"
					>
						{title}
					</Text>
				</div>

				{navItems.length > 0 && (
					<nav className="header__nav">
						<ul className="header__nav-list">
							{navItems.map((item, index) => (
								<li key={index} className="header__nav-item">
									<a
										href={item.href}
										onClick={item.onClick}
										className="header__nav-link"
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				)}

				<div className="header__actions">
					{showSearch && (
						<div className="header__search">
							<SearchBox
								placeholder="Search..."
								onSearch={onSearch}
								showButton={false}
								className="header__search-box"
							/>
						</div>
					)}

					{userMenuItems.length > 0 && (
						<div className="header__user-menu">
							{userName && (
								<Text size="sm" className="header__user-name">
									{userName}
								</Text>
							)}
							<div className="header__user-actions">
								{userMenuItems.map((item, index) => (
									<Button
										key={index}
										variant="ghost"
										size="small"
										onClick={item.onClick}
										className="header__user-action"
									>
										{item.label}
									</Button>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

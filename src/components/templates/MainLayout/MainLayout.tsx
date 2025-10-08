import React from "react";
import { Header } from "../../organisms/Header";
import { Footer } from "../../organisms/Footer";
import "./MainLayout.css";

export interface MainLayoutProps {
	/**
	 * Page content
	 */
	children: React.ReactNode;
	/**
	 * Header props
	 */
	headerProps?: React.ComponentProps<typeof Header>;
	/**
	 * Footer props
	 */
	footerProps?: React.ComponentProps<typeof Footer>;
	/**
	 * Show header
	 */
	showHeader?: boolean;
	/**
	 * Show footer
	 */
	showFooter?: boolean;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	headerProps = {},
	footerProps = {},
	showHeader = true,
	showFooter = true,
	className = "",
}) => {
	return (
		<div className={`main-layout ${className}`}>
			{showHeader && <Header {...headerProps} />}
			<main className="main-layout__content">{children}</main>
			{showFooter && <Footer {...footerProps} />}
		</div>
	);
};

export default MainLayout;

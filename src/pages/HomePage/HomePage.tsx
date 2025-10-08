import React from "react";
import { MainLayout } from "../../components/templates/MainLayout";
import { Button, Text, Card, SearchBox, FormField } from "../../components";
import "./HomePage.css";

export const HomePage: React.FC = () => {
	const handleSearch = (value: string) => {
		console.log("Search:", value);
	};

	const handleButtonClick = () => {
		console.log("Button clicked!");
	};

	return (
		<MainLayout
			headerProps={{
				title: "Atomic Design Demo",
				showSearch: true,
				onSearch: handleSearch,
				navItems: [
					{ label: "Home", href: "/" },
					{ label: "About", href: "/about" },
					{ label: "Contact", href: "/contact" },
				],
				userMenuItems: [
					{
						label: "Profile",
						onClick: () => console.log("Profile clicked"),
					},
					{
						label: "Settings",
						onClick: () => console.log("Settings clicked"),
					},
					{
						label: "Logout",
						onClick: () => console.log("Logout clicked"),
					},
				],
				userName: "John Doe",
			}}
			footerProps={{
				links: [
					{ label: "Privacy Policy", href: "/privacy" },
					{ label: "Terms of Service", href: "/terms" },
					{ label: "Support", href: "/support" },
				],
				socialLinks: [
					{ label: "Twitter", href: "https://twitter.com" },
					{ label: "GitHub", href: "https://github.com" },
					{ label: "LinkedIn", href: "https://linkedin.com" },
				],
			}}
		>
			<div className="home-page">
				<div className="home-page__container">
					<section className="home-page__hero">
						<Text
							as="h1"
							size="4xl"
							weight="bold"
							align="center"
							className="home-page__title"
						>
							Welcome to Atomic Design
						</Text>
						<Text
							as="p"
							size="xl"
							color="secondary"
							align="center"
							className="home-page__subtitle"
						>
							A comprehensive React component library built with
							atomic design principles
						</Text>
						<div className="home-page__actions">
							<Button
								variant="primary"
								size="large"
								onClick={handleButtonClick}
							>
								Get Started
							</Button>
							<Button
								variant="secondary"
								size="large"
								onClick={handleButtonClick}
							>
								Learn More
							</Button>
						</div>
					</section>

					<section className="home-page__features">
						<Text
							as="h2"
							size="3xl"
							weight="bold"
							align="center"
							className="home-page__section-title"
						>
							Features
						</Text>
						<div className="home-page__cards">
							<Card
								title="Atomic Components"
								subtitle="Built with atomic design principles"
								variant="elevated"
								className="home-page__card"
							>
								<Text>
									Our components are organized using atomic
									design methodology, making them reusable,
									maintainable, and scalable.
								</Text>
							</Card>

							<Card
								title="TypeScript Support"
								subtitle="Fully typed components"
								variant="elevated"
								className="home-page__card"
							>
								<Text>
									All components are built with TypeScript,
									providing excellent developer experience and
									type safety.
								</Text>
							</Card>

							<Card
								title="Responsive Design"
								subtitle="Mobile-first approach"
								variant="elevated"
								className="home-page__card"
							>
								<Text>
									Components are designed to work seamlessly
									across all device sizes with a mobile-first
									approach.
								</Text>
							</Card>
						</div>
					</section>

					<section className="home-page__demo">
						<Text
							as="h2"
							size="3xl"
							weight="bold"
							align="center"
							className="home-page__section-title"
						>
							Try It Out
						</Text>
						<div className="home-page__demo-content">
							<div className="home-page__demo-section">
								<Text
									as="h3"
									size="xl"
									weight="semibold"
									className="home-page__demo-title"
								>
									Search Component
								</Text>
								<SearchBox
									placeholder="Search for something..."
									onSearch={handleSearch}
									className="home-page__search"
								/>
							</div>

							<div className="home-page__demo-section">
								<Text
									as="h3"
									size="xl"
									weight="semibold"
									className="home-page__demo-title"
								>
									Form Components
								</Text>
								<div className="home-page__form">
									<FormField
										label="Name"
										required
										inputProps={{
											placeholder: "Enter your name",
											name: "name",
										}}
									/>
									<FormField
										label="Email"
										required
										inputProps={{
											type: "email",
											placeholder: "Enter your email",
											name: "email",
										}}
									/>
									<FormField
										label="Message"
										inputProps={{
											placeholder: "Enter your message",
											name: "message",
										}}
										helpText="Optional message field"
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</MainLayout>
	);
};

export default HomePage;

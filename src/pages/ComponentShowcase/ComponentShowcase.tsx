import React, { useState } from "react";
import { MainLayout } from "../../components/templates/MainLayout";
import {
	Button,
	Input,
	Text,
	Card,
	SearchBox,
	FormField,
} from "../../components";
import "./ComponentShowcase.css";

export const ComponentShowcase: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange =
		(field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setFormData((prev) => ({
				...prev,
				[field]: e.target.value,
			}));
		};

	const handleSearch = (value: string) => {
		console.log("Search:", value);
	};

	return (
		<MainLayout
			headerProps={{
				title: "Component Showcase",
				navItems: [
					{ label: "Home", href: "/" },
					{ label: "Showcase", href: "/showcase" },
				],
			}}
		>
			<div className="component-showcase">
				<div className="component-showcase__container">
					<Text
						as="h1"
						size="4xl"
						weight="bold"
						align="center"
						className="component-showcase__title"
					>
						Component Showcase
					</Text>
					<Text
						as="p"
						size="lg"
						color="secondary"
						align="center"
						className="component-showcase__subtitle"
					>
						Explore all available components in our atomic design
						system
					</Text>

					{/* Atoms Section */}
					<section className="component-showcase__section">
						<Text
							as="h2"
							size="3xl"
							weight="bold"
							className="component-showcase__section-title"
						>
							Atoms
						</Text>

						<div className="component-showcase__grid">
							<Card title="Button Component" variant="elevated">
								<div className="component-showcase__button-group">
									<div className="component-showcase__button-row">
										<Button variant="primary">
											Primary
										</Button>
										<Button variant="secondary">
											Secondary
										</Button>
										<Button variant="danger">Danger</Button>
										<Button variant="ghost">Ghost</Button>
									</div>
									<div className="component-showcase__button-row">
										<Button size="small">Small</Button>
										<Button size="medium">Medium</Button>
										<Button size="large">Large</Button>
									</div>
									<div className="component-showcase__button-row">
										<Button disabled>Disabled</Button>
									</div>
								</div>
							</Card>

							<Card title="Input Component" variant="elevated">
								<div className="component-showcase__input-group">
									<Input placeholder="Default input" />
									<Input
										placeholder="Error state"
										variant="error"
									/>
									<Input
										placeholder="Success state"
										variant="success"
									/>
									<Input
										placeholder="Disabled input"
										disabled
									/>
								</div>
							</Card>

							<Card title="Text Component" variant="elevated">
								<div className="component-showcase__text-group">
									<Text size="xs">Extra Small Text</Text>
									<Text size="sm">Small Text</Text>
									<Text size="base">Base Text</Text>
									<Text size="lg">Large Text</Text>
									<Text size="xl">Extra Large Text</Text>
									<Text size="2xl">2X Large Text</Text>
									<Text size="3xl">3X Large Text</Text>
									<Text size="4xl">4X Large Text</Text>
								</div>
								<div className="component-showcase__text-group">
									<Text weight="light">Light Weight</Text>
									<Text weight="normal">Normal Weight</Text>
									<Text weight="medium">Medium Weight</Text>
									<Text weight="semibold">
										Semibold Weight
									</Text>
									<Text weight="bold">Bold Weight</Text>
								</div>
								<div className="component-showcase__text-group">
									<Text color="primary">Primary Color</Text>
									<Text color="secondary">
										Secondary Color
									</Text>
									<Text color="muted">Muted Color</Text>
									<Text color="error">Error Color</Text>
									<Text color="success">Success Color</Text>
									<Text color="warning">Warning Color</Text>
								</div>
							</Card>
						</div>
					</section>

					{/* Molecules Section */}
					<section className="component-showcase__section">
						<Text
							as="h2"
							size="3xl"
							weight="bold"
							className="component-showcase__section-title"
						>
							Molecules
						</Text>

						<div className="component-showcase__grid">
							<Card
								title="SearchBox Component"
								variant="elevated"
							>
								<SearchBox
									placeholder="Search for something..."
									onSearch={handleSearch}
								/>
								<div style={{ marginTop: "1rem" }}>
									<SearchBox
										placeholder="Search without button"
										onSearch={handleSearch}
										showButton={false}
									/>
								</div>
							</Card>

							<Card
								title="FormField Component"
								variant="elevated"
							>
								<div className="component-showcase__form-group">
									<FormField
										label="Name"
										required
										inputProps={{
											placeholder: "Enter your name",
											value: formData.name,
											onChange: handleInputChange("name"),
										}}
									/>
									<FormField
										label="Email"
										required
										inputProps={{
											type: "email",
											placeholder: "Enter your email",
											value: formData.email,
											onChange:
												handleInputChange("email"),
										}}
										error="Please enter a valid email address"
									/>
									<FormField
										label="Message"
										inputProps={{
											placeholder: "Enter your message",
											value: formData.message,
											onChange:
												handleInputChange("message"),
										}}
										helpText="This is optional"
									/>
								</div>
							</Card>

							<Card title="Card Variants" variant="elevated">
								<div className="component-showcase__card-group">
									<Card
										title="Default Card"
										subtitle="Default variant"
									>
										<Text>
											This is a default card with border.
										</Text>
									</Card>
									<Card
										title="Elevated Card"
										subtitle="Elevated variant"
										variant="elevated"
									>
										<Text>
											This card has a shadow for
											elevation.
										</Text>
									</Card>
									<Card
										title="Outlined Card"
										subtitle="Outlined variant"
										variant="outlined"
									>
										<Text>
											This card has a thick border.
										</Text>
									</Card>
								</div>
							</Card>
						</div>
					</section>

					{/* Interactive Demo */}
					<section className="component-showcase__section">
						<Text
							as="h2"
							size="3xl"
							weight="bold"
							className="component-showcase__section-title"
						>
							Interactive Demo
						</Text>

						<Card title="Form Demo" variant="elevated" size="large">
							<div className="component-showcase__demo-form">
								<Text
									as="h3"
									size="xl"
									weight="semibold"
									className="component-showcase__demo-title"
								>
									Contact Form
								</Text>
								<div className="component-showcase__form-row">
									<FormField
										label="First Name"
										required
										inputProps={{
											placeholder: "John",
											value: formData.name,
											onChange: handleInputChange("name"),
										}}
									/>
									<FormField
										label="Email"
										required
										inputProps={{
											type: "email",
											placeholder: "john@example.com",
											value: formData.email,
											onChange:
												handleInputChange("email"),
										}}
									/>
								</div>
								<FormField
									label="Message"
									inputProps={{
										placeholder:
											"Tell us about your project...",
										value: formData.message,
										onChange: handleInputChange("message"),
									}}
									helpText="Optional: Describe your requirements"
								/>
								<div className="component-showcase__form-actions">
									<Button variant="primary" size="large">
										Send Message
									</Button>
									<Button variant="secondary" size="large">
										Save Draft
									</Button>
								</div>
							</div>
						</Card>
					</section>
				</div>
			</div>
		</MainLayout>
	);
};

export default ComponentShowcase;

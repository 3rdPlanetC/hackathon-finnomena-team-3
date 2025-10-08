# React Atomic Design System

A comprehensive React component library built with atomic design principles, TypeScript, and Vite.

## 🚀 Features

-   **Atomic Design Methodology**: Components organized into atoms, molecules, organisms, templates, and pages
-   **TypeScript Support**: Fully typed components with excellent developer experience
-   **Responsive Design**: Mobile-first approach with responsive components
-   **Modern Styling**: CSS with custom properties and dark mode support
-   **Accessibility**: Built with accessibility best practices
-   **Developer Experience**: Hot reload, ESLint, and comprehensive documentation

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Text/
│   ├── molecules/       # Simple combinations of atoms
│   │   ├── SearchBox/
│   │   ├── Card/
│   │   └── FormField/
│   ├── organisms/       # Complex UI components
│   │   ├── Header/
│   │   └── Footer/
│   └── templates/       # Page-level layouts
│       └── MainLayout/
├── pages/              # Complete pages
│   └── HomePage/
└── App.tsx
```

## 🧩 Component Categories

### Atoms

-   **Button**: Interactive button with multiple variants and sizes
-   **Input**: Form input with validation states
-   **Text**: Typography component with various sizes and weights

### Molecules

-   **SearchBox**: Search input with button
-   **Card**: Content container with header and body
-   **FormField**: Input with label, error, and help text

### Organisms

-   **Header**: Site header with navigation and user menu
-   **Footer**: Site footer with links and social media

### Templates

-   **MainLayout**: Complete page layout with header and footer

## 🛠️ Getting Started

### Prerequisites

-   Node.js 16+
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-atomic-design
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

## 🎨 Usage Examples

### Basic Button

```tsx
import { Button } from "./components";

<Button variant="primary" size="large" onClick={handleClick}>
	Click me
</Button>;
```

### Form Field

```tsx
import { FormField } from "./components";

<FormField
	label="Email"
	required
	inputProps={{
		type: "email",
		placeholder: "Enter your email",
	}}
	error="Please enter a valid email"
/>;
```

### Search Box

```tsx
import { SearchBox } from "./components";

<SearchBox placeholder="Search..." onSearch={(value) => console.log(value)} />;
```

### Complete Layout

```tsx
import { MainLayout } from "./components";

<MainLayout
	headerProps={{
		title: "My App",
		showSearch: true,
		navItems: [
			{ label: "Home", href: "/" },
			{ label: "About", href: "/about" },
		],
	}}
>
	<div>Your page content here</div>
</MainLayout>;
```

## 🎯 Atomic Design Principles

This project follows Brad Frost's atomic design methodology:

1. **Atoms**: Basic HTML elements (buttons, inputs, labels)
2. **Molecules**: Simple groups of UI elements (search box, form field)
3. **Organisms**: Complex UI components (header, footer, navigation)
4. **Templates**: Page-level objects (layouts)
5. **Pages**: Specific instances of templates

## 🎨 Styling

-   CSS with custom properties for theming
-   Responsive design with mobile-first approach
-   Dark mode support via `prefers-color-scheme`
-   Consistent spacing and typography scale
-   Focus states and accessibility considerations

## 📱 Responsive Design

All components are built with a mobile-first approach:

-   Flexible layouts that adapt to different screen sizes
-   Touch-friendly interactive elements
-   Optimized typography for readability

## ♿ Accessibility

-   Semantic HTML elements
-   ARIA labels and roles where appropriate
-   Keyboard navigation support
-   Focus management
-   Color contrast compliance

## 🔧 Customization

### Theming

Components use CSS custom properties that can be overridden:

```css
:root {
	--color-primary: #646cff;
	--color-secondary: #f1f5f9;
	--border-radius: 6px;
}
```

### Component Variants

Most components support multiple variants:

-   Button: `primary`, `secondary`, `danger`, `ghost`
-   Input: `default`, `error`, `success`
-   Card: `default`, `elevated`, `outlined`

## 📚 Component API

Each component is fully documented with TypeScript interfaces. Check the component files for detailed prop documentation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

-   [Atomic Design](https://atomicdesign.bradfrost.com/) by Brad Frost
-   [React](https://reactjs.org/) by Facebook
-   [Vite](https://vitejs.dev/) for the build tool
-   [TypeScript](https://www.typescriptlang.org/) for type safety

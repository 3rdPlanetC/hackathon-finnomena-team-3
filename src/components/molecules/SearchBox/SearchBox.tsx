import React, { useState } from "react";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import "./SearchBox.css";

export interface SearchBoxProps {
	/**
	 * Search placeholder text
	 */
	placeholder?: string;
	/**
	 * Initial search value
	 */
	initialValue?: string;
	/**
	 * Search button text
	 */
	buttonText?: string;
	/**
	 * Show search button
	 */
	showButton?: boolean;
	/**
	 * Search handler
	 */
	onSearch?: (value: string) => void;
	/**
	 * Change handler
	 */
	onChange?: (value: string) => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
	placeholder = "Search...",
	initialValue = "",
	buttonText = "Search",
	showButton = true,
	onSearch,
	onChange,
	className = "",
}) => {
	const [searchValue, setSearchValue] = useState(initialValue);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
		onChange?.(value);
	};

	const handleSearch = () => {
		onSearch?.(searchValue);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className={`search-box ${className}`}>
			<Input
				type="text"
				placeholder={placeholder}
				value={searchValue}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				className="search-box__input"
			/>
			{showButton && (
				<Button onClick={handleSearch} className="search-box__button">
					{buttonText}
				</Button>
			)}
		</div>
	);
};

export default SearchBox;

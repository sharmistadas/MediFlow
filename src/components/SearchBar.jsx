import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="searchbar-wrap">
      <FaSearch aria-hidden="true" />
      <input
        type="search"
        className="searchbar-input"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={placeholder}
      />
    </div>
  );
}

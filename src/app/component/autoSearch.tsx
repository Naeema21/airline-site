import React, { useState } from "react";
import { AutoSearchProps } from "../utils/types";

const AutoSearch: React.FC<AutoSearchProps> = ({ label, options, error, name  }) => {
    // console.log(error)
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length === 0) {
            setSuggestions([]);
            return;
        }

        const filteredSuggestions = options.filter(country =>
            country.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="autosearch-container">
            <label htmlFor="exampleDataList13" className="form-label">{label}</label>
            <input
                className="form-control"
                id={name}
                name={name}
                placeholder='country, city or airport'
                value={searchTerm}
                onChange={handleInputChange}
            />
            {
                <div className={`dropdown-menu ${suggestions.length > 1 ? 'show' : ''}`}>
                    <ul className="drop-rest">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion)}
                                style={{ cursor: 'pointer' }}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            }
            {error && <span className="text-danger error">{error}</span>}
        </div>
    );
}

export default AutoSearch;

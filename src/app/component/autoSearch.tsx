import React, { useState } from "react";
import { AutoSearchProps } from "../utils/types";
import { airportData } from '../utils/airport';

const AutoSearch: React.FC<AutoSearchProps> = ({ label, error, name, setFieldValue }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<any>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length === 0) {
            setSuggestions([]);
            return;
        }

        const filteredSuggestions = airportData.filter(data =>
            data.country.toLowerCase().includes(value.toLowerCase()) ||
            data.city.toLowerCase().includes(value.toLowerCase()) ||
            data.name.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion: any) => {
        setSearchTerm(suggestion.name);
        setFieldValue(name, suggestion.code);
        setSuggestions([]);
    };

    return (
        <div className="autosearch-container">
            <label htmlFor="exampleDataList13" className="form-label">{label}</label>
            <input
                maxLength={150}
                className="form-control"
                id={name}
                name={name}
                placeholder='country, city or airport'
                value={searchTerm}
                onChange={handleInputChange}
            />
            {
                <div className={`dropdown-menu px-2 ${suggestions.length > 0 ? 'show' : ''}`}>
                    <ul className="drop-rest">
                        {suggestions.map((suggestion: any, index: number) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion)}
                                style={{ cursor: 'pointer' }} className="mb-2">
                                {`${suggestion.name} (${suggestion.code})`}
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

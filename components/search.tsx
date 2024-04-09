import React, { useState } from 'react';

const Search: React.FC<{ onSearch: (city: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Enter location"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
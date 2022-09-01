import React, {useEffect, useState} from 'react';
import './SearchBar2.css';



function SearchBar2({setQueryHandler}) {

    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(e);
        setQueryHandler(query);

    }

    return (
        <div className="searchbar-outer-wrap">
            <div className="outer-searchbar">
                <div className="inner-searchbar">
                    <h1>Search all recipes</h1>
                    <form className="search-form" onSubmit={onFormSubmit}>
                        <input
                            className="search-bar"
                            type="text"
                            name="ingredients"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder=" search by recipe name, ingredients and cuisines"
                        />

                    </form>
                </div>
            </div>
        </div>


    );

}


export default SearchBar2;

import React, {useState} from 'react';
import './SearchBar.css';



function SearchBar({setIngredientHandler}) {

    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(e);
        setIngredientHandler(query);

    }

    return (
        <div className="searchbar-wrap">
            <div className="outer-introduction">
                <div className="inner-introduction">
                    <h1>What's in my fridge?</h1>
                    <p>It's also possible to search recipes by the ingredients in your fridge, just fill in whatever you
                        have lying around and see what recipes you can find!</p>
                    <form className="search-form" onSubmit={onFormSubmit}>
                        <input
                            className="search-bar"
                            type="text"
                            name="ingredients"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="tomatoes, zucchini, cheese"
                        />

                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;

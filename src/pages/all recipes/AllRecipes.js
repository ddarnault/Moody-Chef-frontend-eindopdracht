import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchBar2 from "../../components/searchbar2/SearchBar2";
import './AllRecipes.css'



function AllRecipes() {

    const apiKey = 'e3070ee165f2452bbe899506f2f45319';

    const [recipes, setRecipes] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        async function fetchRecipeData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${searchQuery}&query=${searchQuery}&cuisine=${searchQuery}&addRecipeInformation=true&number=50`);
                console.log(result.data.results);
                setRecipes(result.data.results);
            } catch (e) {
                console.error(e);
            }
        }

        if (searchQuery) {
            fetchRecipeData();
        }

    }, [searchQuery]);

    return (
        <div>
            <SearchBar2 setQueryHandler={setSearchQuery}/>
            <div className="all-search-result">
                <div className="all-search-outer-container">
                    <div className="all-search-inner-container">
                        {recipes.map((rec) => {
                            return (
                                <div className="card-outer-container" key={rec.id}>
                                    <img className="recipe-image" src={rec.image}
                                         alt="Random recipe image"/>
                                    <h4 className="recipe-title">{rec.title}</h4>
                                    <div className="card-inner-container">
                                        <p>Servings:</p>
                                        <p className="recipe-info">{rec.servings}</p>
                                        <p className="recipe-info">|</p>
                                        <p>Preptime:</p>
                                        <p className="recipe-info">{rec.readyInMinutes} mins</p>
                                    </div>
                                    <a className="recipe-button" href={rec.sourceUrl}>recipe</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllRecipes;

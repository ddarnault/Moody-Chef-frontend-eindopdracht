import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {useHistory} from "react-router-dom";
import './Home.css';
import backgroundImage from "../../assets/pexels-ella-olsson-1640770.jpg";
import SearchBar from "../../components/searchbar/SearchBar";
import Slider from "../../components/slider/Slider";


function Home() {

    const history = useHistory();

    const apiKey = 'e3070ee165f2452bbe899506f2f45319';

    const [ingredientRecipes, setIngredientRecipes] = useState([]);

    const [minuteRecipes, setMinuteRecipes] = useState([]);

    const [ingredients, setIngredients] = useState('');

    const [minutes, setMinutes] = useState('');


    useEffect(() => {
        async function fetchMinuteData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&maxReadyTime=${minutes}&addRecipeInformation=true&number=30`);
                console.log(result.data.results);
                setMinuteRecipes(result.data.results);
            } catch (e) {
                console.error(e);
            }
        }

        if (minutes) {
            fetchMinuteData();
        }

    }, [minutes]);


    useEffect(() => {
        async function fetchIngredientData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${ingredients}&addRecipeInformation=true&number=30`);
                console.log(result.data.results);
                setIngredientRecipes(result.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        if (ingredients) {
            fetchIngredientData();
        }

    }, [ingredients]);

    return (

        <div className="outer-container">
            <div className="inner-container">
                <img className="bg-image" src={backgroundImage} alt="background-image"/>

                <Slider setMinuteHandler={setMinutes}/>
                <div className="min-search-result">
                    <div className="recipe-outer-container">
                        <div className="recipe-inner-container">
                            <Splide options={{
                                perPage: 4,
                                arrows: false,
                                pagination: false,
                                drag: "free",
                                gap: "200px",
                                height: "410px",
                            }}>
                                {minuteRecipes.map((min) => {
                                    return (
                                        <SplideSlide>
                                            <div className="card-outer-container" key={min.id}>
                                                <img className="recipe-image" src={min.image}
                                                     alt="Random recipe image"/>
                                                <h4 className="recipe-title">{min.title}</h4>
                                                <div className="card-inner-container">
                                                    <p>Servings:</p>
                                                    <p className="recipe-info">{min.servings}</p>
                                                    <p className="recipe-info">|</p>
                                                    <p>Preptime:</p>
                                                    <p className="recipe-info">{min.readyInMinutes} mins</p>
                                                </div>
                                                <a className="recipe-button" href={min.sourceUrl}>recipe</a>
                                            </div>
                                        </SplideSlide>
                                    );
                                })}
                            </Splide>
                        </div>
                    </div>
                </div>

                <SearchBar setIngredientHandler={setIngredients}/>
                <h2 className="h2-title">You can cook this with your ingredients:</h2>
                <div className="search-result">

                    <div className="recipe-outer-container">
                        <div className="recipe-inner-container">
                            <Splide options={{
                                perPage: 4,
                                arrows: false,
                                pagination: false,
                                drag: "free",
                                gap: "200px",
                                height: "430px"

                            }}>
                                {ingredientRecipes.map((ing) => {
                                    return (
                                        <SplideSlide>
                                            <div className="card-outer-container" key={ing.id}>
                                                <img className="recipe-image" src={ing.image}
                                                     alt="Random recipe image"/>
                                                <h4 className="recipe-title">{ing.title}</h4>
                                                <div className="card-inner-container">
                                                    <p>Servings:</p>
                                                    <p className="recipe-info">{ing.servings}</p>
                                                    <p className="recipe-info">|</p>
                                                    <p>Preptime:</p>
                                                    <p className="recipe-info">{ing.readyInMinutes} mins</p>
                                                </div>
                                                <a className="recipe-button" href={ing.sourceUrl}>recipe</a>
                                            </div>
                                        </SplideSlide>
                                    );
                                })}
                            </Splide>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Home;
/*
d14ff5b0266343ee9d4db7f767d10ea4 <--- eigen api
e3070ee165f2452bbe899506f2f45319
*/






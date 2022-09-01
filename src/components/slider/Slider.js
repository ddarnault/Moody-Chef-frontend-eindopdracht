import React, {useState} from 'react';
import './Slider.css';
function Slider({setMinuteHandler}) {

    const [sliderValue, setSliderValue] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(e);
        setMinuteHandler(sliderValue);
    }


    return (
        <div>
            <form className="slider-form" onSubmit={onFormSubmit}>
                <h2 className="slider-form-title">Welcome to Moody Chef, let's search some recipes</h2>
                <div className="range-slider-outer-container">
                    <section className="minutes">
                    <p>I want to cook for a maximum of</p>
                    <label
                        className="slider-minutes-value"
                        htmlFor="time-range"
                    >
                          {sliderValue}
                    </label>
                    <p>minutes</p>
                    </section>
                    <input className="range-slider"
                        id="time-range"
                        type="range"
                        min="10"
                        max="120"
                        step="1"
                        onChange={(e) => setSliderValue(e.target.value)}
                        value={sliderValue}
                    />

                </div>
                <button
                    className="recipe-submit-button"
                    type="submit"
                >
                    get recipes
                </button>
            </form>
        </div>
    );
}

export default Slider;



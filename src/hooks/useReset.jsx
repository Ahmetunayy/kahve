import React from 'react'

const useReset = (setCoffeeDetails, setText, setKahve, setActiveCoffee) => {
    const handleReset = () => {
        setActiveCoffee(null)
        console.log('reset')
        // First, reset the heights with a smooth transition
        setCoffeeDetails((prevDetails) => ({
            ...prevDetails,
            height1: 0,
            height2: 0,
            height3: 0,
        }));

        setText(false)
        setKahve(false)

        // Clear the text after the heights have been animated
        setTimeout(() => {
            setCoffeeDetails({
                ingredient1: null,
                ingredient2: null,
                ingredient3: null,
                textHeight1: 0,
                textHeight2: 0,
                textHeight3: 0,
                position1: 0,
                position2: 0,
                position3: 0,
                color1: null,
                color2: null,
                color3: null,
            });
        }, 800);
    };

    return handleReset;
};


export default useReset
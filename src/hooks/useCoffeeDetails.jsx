import { useState, useEffect } from 'react';

const useCoffeeDetails = (activeCoffee, coffeeTypes) => {
    const [coffeeDetails, setCoffeeDetails] = useState({
        ingredient1: null,
        ingredient2: null,
        ingredient3: null,
        height1: 0,
        height2: 0,
        height3: 0,
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


    // Ensure the effect only runs when activeCoffee actually changes
    useEffect(() => {
        if (!activeCoffee) return; // Avoid unnecessary updates

        const selectedCoffee = coffeeTypes[activeCoffee] || {};

        // Only update coffeeDetails if there's a change
        setCoffeeDetails((prevDetails) => {
            if (
                prevDetails.ingredient1 === selectedCoffee.ingredient1 &&
                prevDetails.ingredient2 === selectedCoffee.ingredient2 &&
                prevDetails.ingredient3 === selectedCoffee.ingredient3 &&
                prevDetails.height1 === selectedCoffee.height1 &&
                prevDetails.height2 === selectedCoffee.height2 &&
                prevDetails.height3 === selectedCoffee.height3 &&
                prevDetails.position1 === selectedCoffee.position1 &&
                prevDetails.position2 === selectedCoffee.position2 &&
                prevDetails.position3 === selectedCoffee.position3 &&
                prevDetails.color1 === selectedCoffee.color1 &&
                prevDetails.color2 === selectedCoffee.color2 &&
                prevDetails.color3 === selectedCoffee.color3
            ) {
                return prevDetails; // No change, so return previous
            }

            return {
                ingredient1: selectedCoffee.ingredient1 || null,
                ingredient2: selectedCoffee.ingredient2 || null,
                ingredient3: selectedCoffee.ingredient3 || null,
                height1: selectedCoffee.height1 || 0,
                height2: selectedCoffee.height2 || 0,
                height3: selectedCoffee.height3 || 0,
                position1: selectedCoffee.position1 || 0,
                position2: selectedCoffee.position2 || 0,
                position3: selectedCoffee.position3 || 0,
                textHeight1: selectedCoffee.textHeight1 || 0,
                textHeight2: selectedCoffee.textHeight2 || 0,
                textHeight3: selectedCoffee.textHeight3 || 0,
                color1: selectedCoffee.color1 || null,
                color2: selectedCoffee.color2 || null,
                color3: selectedCoffee.color3 || null,
            };
        });
    }, [activeCoffee, coffeeTypes]);

    return [coffeeDetails, setCoffeeDetails];
};

export default useCoffeeDetails;
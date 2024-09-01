import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GlassFillSVG = ({ fillHeights, colors, ingredients, textHeights }) => {
  const { height1, height2, height3 } = fillHeights;
  const { color1, color2, color3 } = colors;
  const { ingredient1, ingredient2, ingredient3} = ingredients;
  const { textHeight1, textHeight2, textHeight3} = textHeights;

  return (
    <svg width="400px" height="400px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="64" height="64" fill="white" />
      <path d="M8 24h40v24a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V24z" fill="white" stroke="black" />

      <AnimatePresence>
        {height3 > 0 && (
          <motion.rect
            key="layer3"
            x="8"
            y={48 - height3}
            width="40"
            height={height3}
            fill={color3 || "transparent"}
            initial={{ height: 0, y: 48 }}
            animate={{ height: height3, y: 48 - height3 }}
            exit={{ height: 0, y: 48,
              transition: { delay: 0,duration: 0.5 }  }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {height2 > 0 && (
          <motion.rect
            key="layer2"
            x="8"
            y={48 - height2}
            width="40"
            height={height2}
            fill={color2 || "transparent"}
            initial={{ height: 0, y: 48 }}
            animate={{ height: height2, y: 48 - height2 }}
            exit={{ height: 0, y: 48,
              transition: { delay: 0.3,duration: 0.5 } }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {height1 > 0 && (
          <motion.rect
            key="layer1"
            x="8"
            y={48 - height1}
            width="40"
            height={height1}
            fill={color1 || "transparent"}
            initial={{ height: 0, y: 48 }}
            animate={{ height: height1, y: 48 - height1 }}
            exit={{ height: 0, y: 48,
              transition: { delay: 0.6,duration: 0.5 } 
             }}
            transition={{ ease:'easeIn' ,duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <text x="35%" y={77 - textHeight1} fill="white" className="small">{ingredient1}</text>
      <text x="34.5%" y={77 - textHeight2} fill="white" className="small">{ingredient2}</text>
      <text x="20" y={77 - textHeight3} fill="white" className="small">{ingredient3}</text>

      <rect x="0" y="56" width="64" height="14" fill="white" />
      <path d="M 8 50 L 8 56 L 15 56 C 11 55 9 53 8 50" fill="white" />
      <path d="M 48 50 L 48 56 L 41 56 C 44 55 47 53 48 50" fill="white" />
      <path d="M8 24h40v24a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V24z" fill="none" stroke="black" />
      <line x1="28" y1="16" x2="28" y2="8" stroke="black" />
      <line x1="16" y1="16" x2="16" y2="8" stroke="black" />
      <line x1="40" y1="16" x2="40" y2="8" stroke="black" />
      <path d="M48 44h5.42A2.59 2.59 0 0 0 56 41.42v-6.84A2.59 2.59 0 0 0 53.42 32H48" stroke="black" />
    </svg>
  );
};

function App() {
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
    color1: null,
    color2: null,
    color3: null,
  });

  const coffeeTypes = {
    Latte: {
      ingredient1: "Espresso", color1: 'red', height1: 24, textHeight1: 24,
      ingredient2: "Sıcak Süt", color2: 'blue', height2: 33, textHeight2: 35,
      ingredient3: "Süt Köpüğü", color3: '#D3B58F', height3: 36, textHeight3: 48,
    },
    Cappuccino: {
      ingredient1: "Espresso", color1: 'red', height1: 24, textHeight1: 24,
      ingredient2: "Sıcak Süt", color2: 'blue', height2: 28, textHeight2: 24,
      ingredient3: "Süt Köpüğü", color3: '#D3B58F', height3: 30, textHeight3: 24,
    },
    Americano: {
      ingredient1: "Espresso", color1: '#4E2C1E', height1: 0.3, textHeight1: 24,
      ingredient2: "Su", color2: '#A6E3E9', height2: 0.7,textHeight2: 24,
    },
  };

  const handleClick = (coffee) => {

    setCoffeeDetails((prevDetails) => ({
      ...prevDetails,
      height1: 0,
      height2: 0,
      height3: 0,
    }));

 
    setTimeout(() => {
      const selectedCoffee = coffeeTypes[coffee] || {};

      setCoffeeDetails({
        ingredient1: selectedCoffee.ingredient1 || null,
        ingredient2: selectedCoffee.ingredient2 || null,
        ingredient3: selectedCoffee.ingredient3 || null,
        height1: selectedCoffee.height1 || 0,
        height2: selectedCoffee.height2 || 0,
        height3: selectedCoffee.height3 || 0,
        textHeight1: selectedCoffee.textHeight1 || 0,
        textHeight2: selectedCoffee.textHeight2 || 0,
        textHeight3: selectedCoffee.textHeight3 || 0,
        color1: selectedCoffee.color1 || null,
        color2: selectedCoffee.color2 || null,
        color3: selectedCoffee.color3 || null,
      });

      console.log(`Selected coffee: ${selectedCoffee.ingredient1}`);
    }, 600);
  };

  const handleReset = () => {
    setCoffeeDetails({
      height1: 0,
      height2: 0,
      height3: 0,
    });
  };

  return (
    <div className="App">
      <h1>Glass Fill Animation</h1>

      <GlassFillSVG 
        fillHeights={{ height1: coffeeDetails.height1, height2: coffeeDetails.height2, height3: coffeeDetails.height3 }}
        colors={{ color1: coffeeDetails.color1, color2: coffeeDetails.color2, color3: coffeeDetails.color3 }}
        ingredients={{ingredient1: coffeeDetails.ingredient1, ingredient2: coffeeDetails.ingredient2, ingredient3: coffeeDetails.ingredient3}}
        textHeights={{textHeight1: coffeeDetails.textHeight1,textHeight2: coffeeDetails.textHeight2,textHeight3: coffeeDetails.textHeight3,}}
      />

      <div className="button-container">
        {Object.keys(coffeeTypes).map((coffee) => (
          <button key={coffee} onClick={() => handleClick(coffee)}>
            {coffee}
          </button>
        ))}
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

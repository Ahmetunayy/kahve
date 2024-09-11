import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GlassFillSVG = ({ fillHeights, colors, ingredients, textHeights, positions }) => {
  const { height1, height2, height3 } = fillHeights;
  const { position1, position2, position3 } = positions;
  const { color1, color2, color3 } = colors;
  const { ingredient1, ingredient2, ingredient3 } = ingredients;
  const { textHeight1, textHeight2, textHeight3 } = textHeights;

  return (
    <svg width="550px" height="550px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="64" height="64" fill="white" />
      <path d="M8 24h40v24a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V24z" strokeWidth={0.1} fill="white" stroke="black" />

      <AnimatePresence>
        {height3 > 0 && (
          <motion.rect
            key="layer3"
            x="8"
            y={56 - position3}
            width="40"
            height={height3}
            fill={color3 || "transparent"}
            initial={{ height: 0, y: 56 }}
            animate={{ height: height3, y: 56 - position3 }}
            exit={{
              height: 0, y: 48,
              transition: { delay: 0, duration: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {height2 > 0 && (
          <motion.rect
            key="layer2"
            x="8"
            y={56 - position2}
            width="40"
            height={height2}
            fill={color2 || "transparent"}
            initial={{ height: 0, y: 56 }}
            animate={{ height: height2, y: 56 - position2 }}
            exit={{
              height: 0, y: 48,
              transition: { delay: 0.3, duration: 0.5 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {height1 > 0 && (
          <motion.rect
            key="layer1"
            x="8"
            y={56 - position1}
            width="40"
            height={height1}
            fill={color1 || "transparent"}
            initial={{ height: 0, y: 56 }}
            animate={{ height: height1, y: 56 - position1 }}
            exit={{
              height: 0, y: 48,
              transition: { delay: 0.6, duration: 0.5 }

            }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <text x="28px" y={56 - 3} text-anchor="middle" fill="white" className="small">{ingredient1}</text>

      <text x="28px" y={40} text-anchor="middle" fill="white" className="small">{ingredient2}</text>

      <text x="28px" y={(24 + (56 - (56 - position1))) / 2} text-anchor="middle" fill="white" className="small">{ingredient3}</text>

      <rect x="0" y="56" width="64" height="14" fill="white" />

      <path d="M 7 50 L 7 58 L 15 56 C 11 55 9 53 8 50" fill="white" />
      <path d="M 49 50 L 49 57 L 41 56 C 44 55 47 53 48 50" fill="white" />
      <path d="M8 24h40v24a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V24z" strokeWidth={0.5} fill="none" stroke="black" />

      <path d="M48 44h5.42A2.59 2.59 0 0 0 56 41.42v-6.84A2.59 2.59 0 0 0 53.42 32H48" fill='none' strokeWidth={0.5} stroke="black" />
    </svg>
  );
};

function App() {
  const [activeCoffee, setActiveCoffee] = useState(null);

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

  const [kahve, setKahve] = useState(false)

  const coffeeTypes = {
    Latte: {
      ingredient1: "Espresso", color1: 'red', height1: 32, position1: 32, textHeight1: 24,
      ingredient2: "Sıcak Süt", color2: 'blue', height2: 32, position2: 41, textHeight2: 35,
      ingredient3: "Süt Köpüğü", color3: '#D3B58F', height3: 32, position3: 44, textHeight3: 48,
    },
    Cappuccino: {
      ingredient1: "Espresso", color1: 'red', height1: 32, position1: 32, textHeight1: 26,
      ingredient2: "Sıcak Süt", color2: 'blue', height2: 32, position2: 32, textHeight2: 39,
      ingredient3: "Süt Köpüğü", color3: '#D3B58F', height3: 32, position3: 44, textHeight3: 48,
    },
    Americano: {
      ingredient1: "Espresso", color1: '#4E2C1E', height1: 0.3, position1: 24, textHeight1: 24,
      ingredient2: "Su", color2: '#A6E3E9', height2: 0.7, position2: 24, textHeight2: 24,
    },
  };

  const [text, setText] = useState(false)

  const handleClick = (coffee) => {
    setKahve(true)
    setText(true)

    setActiveCoffee(coffee)
    console.log('kahve = ', kahve)
    setCoffeeDetails((prevDetails) => ({
      ...prevDetails,
      height1: 0,
      height2: 0,
      height3: 0,

    }));



    if (kahve) {
      setTimeout(() => {
        const selectedCoffee = coffeeTypes[coffee] || {};

        setCoffeeDetails({
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
        });

        console.log(`Selected coffee: ${selectedCoffee.ingredient1}`);
      }, 800);
    }
    else {
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
        position1: selectedCoffee.position1 || 0,
        position2: selectedCoffee.position2 || 0,
        position3: selectedCoffee.position3 || 0,
        color1: selectedCoffee.color1 || null,
        color2: selectedCoffee.color2 || null,
        color3: selectedCoffee.color3 || null,
      });

      console.log(`Selected coffee: ${selectedCoffee.ingredient1}`);
    };
  }


  const handleReset = () => {
    // First, reset the heights with a smooth transition
    setCoffeeDetails((prevDetails) => ({
      ...prevDetails,
      height1: 0,
      height2: 0,
      height3: 0,
    }));
    setText(false)
    setKahve(false)

    // Use a timeout to clear the text after the heights have been animated
    setTimeout(() => {
      setCoffeeDetails((prevDetails) => ({
        ...prevDetails,
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
      }));
    }, 800); // Set the delay to match the animation duration

  };

  return (
    <div className="overflow-hidden h-screen flex flex-col">
      <div className='flex justify-center items-center'>
        <h1 className='philosopher-bold text-[70px]'>Bir Bardak kahve ?</h1>
      </div>
      <motion.div className='h-[80vh] mb-28 flex justify-center items-center w-screen'>
        {/* Eski div'in animasyonu */}
        <motion.div
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <GlassFillSVG
            positions={{ position1: coffeeDetails.position1, position2: coffeeDetails.position2, position3: coffeeDetails.position3 }}
            fillHeights={{ height1: coffeeDetails.height1, height2: coffeeDetails.height2, height3: coffeeDetails.height3 }}
            colors={{ color1: coffeeDetails.color1, color2: coffeeDetails.color2, color3: coffeeDetails.color3 }}
            ingredients={{ ingredient1: coffeeDetails.ingredient1, ingredient2: coffeeDetails.ingredient2, ingredient3: coffeeDetails.ingredient3 }}
            textHeights={{ textHeight1: coffeeDetails.textHeight1, textHeight2: coffeeDetails.textHeight2, textHeight3: coffeeDetails.textHeight3 }}
          />


        </motion.div>

        {/* Yeni div'in animasyonu */}
        <AnimatePresence>
          {text && (
            <motion.div
              className=' h-[200px] flex justify-center items-center'
              initial={{ width: 0 }}  // Starts with 0 width
              animate={{ width: 800 }}  // Expands to 600px width
              exit={{ width: 0 }}  // Shrinks back to 0 width on exit
              transition={{ duration: 1.5, ease: "easeInOut" }}  // Smooth transition
            >
              {/* Animate the opacity of the <p> element with a delay */}
              <motion.p
                className='px-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
              >
                Latte, İtalyanca 'süt' anlamına gelir ve 'caffè latte' ise 'sütlü kahve' demektir. İtalya'da ortaya çıkan latte, espresso ve buharda ısıtılmış süt ile yapılır. 19. yüzyılda Avrupa'da sütlü kahve yaygınlaşmaya başladı. 20. yüzyılda ise özellikle Amerika'da popüler hale geldi ve kahve zincirleri (örneğin Starbucks) ile küresel bir içecek haline geldi. Latte, süt köpüğüyle tamamlanır ve günümüzde dünya genelinde farklı şekillerde sunulmaktadır.";

              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

      <div className='flex flex-grow justify-center py-8 '>
        <div className="button-container flex gap-1 bg-[#3e3e3e] h-16 px-4 rounded-lg self-end items-center ">
          {Object.keys(coffeeTypes).map((coffee) => (
            <button className={`h-12 items-center border-[1px] border-[#4e4e4e] rounded-lg px-4 text-white hover:border-white ${activeCoffee === coffee ? 'hover:border-yellow-300 hover:text-yellow-300 border-yellow-400 text-yellow-400' : ''
              }`} key={coffee} onClick={() => handleClick(coffee)}>
              {coffee}
            </button>
          ))}
          <button onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

    </div>


  );
}

export default App;

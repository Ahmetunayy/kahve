import React, { act, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './components/Button';
import Explanation from './components/Explanation';
import GlassFillSVG from './components/GlassFillSVG';
import useCoffeeDetails from './hooks/useCoffeeDetails';
import useReset from './hooks/useReset';
import Navbar from './components/Navbar';

function App() {
  const [activeCoffee, setActiveCoffee] = useState(null);
  const [kahve, setKahve] = useState(false);
  const [text, setText] = useState(false);



  const coffeeTypes = {
    Latte: {
      title: "Latte'nin",
      ingredient1: 'Espresso',
      color1: '#564334',
      height1: 32,
      position1: 47,
      textHeight1: 24,
      ingredient2: 'Sıcak Süt',
      color2: '#e7e4d3',
      height2: 30,
      position2: 30,
      textHeight2: 35,
      ingredient3: 'Süt Köpüğü',
      color3: '#fff',
      height3: 32,
      position3: 24,
      textHeight3: 48,
    },
    Cappuccino: {
      title: "Cappuccino'nun",
      ingredient1: 'Espresso',
      color1: '#564334',
      height1: 32,
      position1: 47,
      textHeight1: 26,
      ingredient2: 'Sıcak Süt',
      color2: '#e7e4d3',
      height2: 32,
      position2: 35,
      textHeight2: 39,
      ingredient3: 'Süt Köpüğü',
      color3: '#fff',
      height3: 32,
      position3: 24,
      textHeight3: 48,
    },
    Machiato: {
      title: "Machiato'nun",
      ingredient1: 'Espresso',
      color1: '#564334',
      height1: 32,
      position1: 47,
      textHeight1: 26,
      ingredient2: 'Süt Köpüğü',
      color2: 'blue',
      height2: 32,
      position2: 32,
      textHeight2: 39,
      ingredient3: 'Empty',
      color3: 'transparent',
      height3: 32,
      position3: 0,
      textHeight3: 48,
    },
    "Flat White": {
      title: "Flat White'ın",
      ingredient1: 'Espresso',
      color1: '#564334',
      height1: 32,
      position1: 47,
      textHeight1: 24,
      ingredient2: 'Sıcak Süt',
      color2: '#e7e4d3',
      height2: 32,
      position2: 24,
      textHeight2: 39,
      ingredient3: 'Empty',
      color3: 'transparent',
      height3: 32,
      position3: 0,
      textHeight3: 48,
    },
    Americano: {
      title: "Americano'nun",
      ingredient1: 'Espresso',
      color1: '#564334',
      height1: 32,
      position1: 47,
      textHeight1: 24,
      ingredient2: 'Sıcak Su',
      color2: '#A6E3E9',
      height2: 32,
      position2: 24,
      textHeight2: 24,
      ingredient3: 'Empty',
      color3: 'transparent',
      height3: 32,
      position3: 0,
      textHeight3: 48,
    },
  };

  const [coffeeDetails, setCoffeeDetails] = useCoffeeDetails(activeCoffee, coffeeTypes);

  const handleReset = useReset(setCoffeeDetails, setText, setKahve, setActiveCoffee);

  const handleClick = (coffee) => {
    if (activeCoffee) {
      // Reset the current coffee details to initial empty state

      setActiveCoffee(null)
      setCoffeeDetails((prevDetails) => ({
        ...prevDetails,
        height1: 0,
        height2: 0,
        height3: 0,
      }));
      console.log('resetlendin')
      setKahve(false);

      // Delay for the reset to finish before selecting the new coffee
      setTimeout(() => {
        setActiveCoffee(coffee);
        setKahve(true);
        setText(true);
      }, 1000); // The timeout delay ensures a smooth transition
    } else {
      // If no coffee is selected, directly select the new one
      setActiveCoffee(coffee);
      setKahve(true);
      setText(true);
    }
  };

  const words = coffeeDetails.title ? coffeeDetails.title.split(" ") : [];


  return (
    <div className=" bg-[#ddd7d1] flex items-center">
      <div className='h-screen overflow-hidden w-screen lg:w-screen flex flex-col'>

        <div className="flex flex-col justify-center items-center py-6">
          <AnimatePresence>
            <motion.h1
              className="text-[#0e0e0e] philosopher-bold leading-none 2xl:text-[120px] xl:text-[120px] lg:text-[100px]">
              {activeCoffee
                ? words.map((word, wordIndex) => (
                  <motion.span key={wordIndex}
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * charIndex }}
                        exit={{ opacity: 0, transition: { delay: 0.2 * charIndex } }}
                        key={charIndex}
                      >
                        {char}
                      </motion.span>

                    ))}
                  </motion.span>
                ))
                : <motion.h1
                  key='key'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.2 }}
                  className=' text-[#0e0e0e] leading-none 2xl:text-[120px] xl:text-[120px] lg:text-[100px]'>
                  <p>Kahvenin</p>
                </motion.h1>}

            </motion.h1>
          </AnimatePresence>



          <h1 className="text-[#0e0e0e] philosopher-bold  leading-none 2xl:text-[120px] xl:text-[120px] lg:text-[100px] "> Hikayesi</h1>
        </div>

        <motion.div className="flex flex-grow justify-center items-center w-screen">
          <motion.div transition={{ duration: 1.5, ease: 'easeInOut' }}>
            <GlassFillSVG
              positions={{
                position1: coffeeDetails.position1,
                position2: coffeeDetails.position2,
                position3: coffeeDetails.position3,
              }}
              fillHeights={{
                height1: coffeeDetails.height1,
                height2: coffeeDetails.height2,
                height3: coffeeDetails.height3,
              }}
              colors={{
                color1: coffeeDetails.color1,
                color2: coffeeDetails.color2,
                color3: coffeeDetails.color3,
              }}
              ingredients={{
                ingredient1: coffeeDetails.ingredient1,
                ingredient2: coffeeDetails.ingredient2,
                ingredient3: coffeeDetails.ingredient3,
              }}
              textHeights={{
                textHeight1: coffeeDetails.textHeight1,
                textHeight2: coffeeDetails.textHeight2,
                textHeight3: coffeeDetails.textHeight3,
              }}
            />
          </motion.div>

          <AnimatePresence>{text && <Explanation />}</AnimatePresence>
        </motion.div>

        <div className="border-black flex justify-center py-4">
          <Button coffeeTypes={coffeeTypes} activeCoffee={activeCoffee} handleClick={handleClick} handleReset={handleReset} />
        </div>
      </div>
    </div>
  );
}

export default App;

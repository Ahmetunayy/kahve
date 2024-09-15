import React from 'react';

const Button = ({ coffeeTypes, handleClick, activeCoffee, handleReset }) => {
    return (
        <div>
            <div className="button-container flex gap-1 bg-[#3e3e3e] h-16 px-4 rounded-lg self-end items-center">
                {Object.keys(coffeeTypes).map((coffee) => (
                    <button
                        className={`h - 12 items-center border-[1px] border-[#4e4e4e] rounded-lg px-4 text-white hover:border-white ${activeCoffee === coffee ? 'hover:border-yellow-300 hover:text-yellow-300 border-yellow-400 text-yellow-400' : ''
                            }`}
                        key={coffee}
                        onClick={() => handleClick(coffee)}
                    >
                        {coffee}
                    </button>
                ))}
                <button onClick={handleReset}>Reset</button>
            </div>
        </div >
    );
};

export default Button;
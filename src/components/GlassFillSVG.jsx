import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GlassFillSVG = ({ fillHeights, colors, ingredients, textHeights, positions }) => {
    const { height1, height2, height3 } = fillHeights;
    const { position1, position2, position3 } = positions;
    const { color1, color2, color3 } = colors;
    const { ingredient1, ingredient2, ingredient3 } = ingredients;
    const { textHeight1, textHeight2, textHeight3 } = textHeights;

    return (
        <svg width="600px" height="400px" viewBox="5.5 20 45 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="8" width="64" height="64" fill="#ddd7d1" />
            <path d="M8 24h40v24a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V24z" strokeWidth={0.1} fill="#ddd7d1" stroke="black" />

            <AnimatePresence>
                {height3 > 0 && (
                    <motion.rect
                        key="layer3"
                        x="8"
                        y={0}
                        width="40"
                        height={height3}
                        fill={color3 || "transparent"}
                        initial={{ height: 0, y: 56 }}
                        animate={{ height: height3, y: position3 }}
                        exit={{
                            height: 0, y: 56,
                            transition: { delay: 0, duration: 0.55 }
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
                        y={0}
                        width="40"
                        height={height2}
                        fill={color2 || "transparent"}
                        initial={{ height: 0, y: 56 }}
                        animate={{ height: height2, y: position2 }}
                        exit={{
                            height: 0, y: 56,
                            transition: { delay: 0.25, duration: 0.45 }
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
                        y={0}
                        width="40"
                        height={height1}
                        fill={color1 || "transparent"}
                        initial={{ height: 0, y: 56 }}
                        animate={{ height: height1, y: position1 }}
                        exit={{
                            height: 0, y: 56,
                            transition: { delay: 0.6, duration: 0.5 }

                        }}
                        transition={{ duration: 0.5 }}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {height3 > 0 && (<motion.text
                    key="text1"
                    x="28px"
                    y={(56 + position1) / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#ba7533"
                    className="small"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0.6, duration: 0 }
                    }}
                    transition={{ delay: 0.3 }}
                >
                    {ingredient1}
                </motion.text>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {height2 > 0 && (<motion.text
                    x="28px"
                    y={(position1 + position2) / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#ba7533"
                    className="small"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{ delay: 0.5 }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0.3, duration: 0 }
                    }}
                >
                    {ingredient2}
                </motion.text>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {height1 > 0 && (<motion.text
                    x="28px"
                    y={(position2 + position3) / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#ba7533"
                    className="small"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0, duration: 0 }
                    }}
                    transition={{ delay: 0.9 }}
                >
                    {ingredient3}
                </motion.text>
                )}
            </AnimatePresence>

            {/* These are amouts on the left */}

            <AnimatePresence>
                {height3 > 0 && (<motion.text
                    key="text1"
                    x="3px"
                    y={(56 + position1) / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#ba7533"
                    className="amount"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0.6, duration: 0 }
                    }}
                    transition={{ delay: 0.3 }}
                >
                    90ml
                </motion.text>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {height2 > 0 && (<motion.text
                    x="3px"
                    y={(position1 + position2) / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#ba7533"
                    className="amount"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{ delay: 0.5 }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0.3, duration: 0 }
                    }}
                >
                    100ml
                </motion.text>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {height1 > 0 && (<motion.text
                    x="3px"
                    y={(position2 + position3) / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#ba7533"
                    className="amount"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0, duration: 0 }
                    }}
                    transition={{ delay: 0.9 }}
                >
                    60ml
                </motion.text>
                )}
            </AnimatePresence>

            <rect x="0" y="56" width="64" height="20" fill="#ddd7d1" />
            <path d="M 7 50 L 7 58 L 15 56 C 11 55 9 53 8 50" fill="#ddd7d1" />
            <path d="M 49 50 L 49 57 L 41 56 C 44 55 47 53 48 50" fill="#ddd7d1" />
            <path d="M8 24h40v24a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V24z" strokeWidth={0.5} fill="none" stroke="black" />

            <path d="M48 44h5.42A2.59 2.59 0 0 0 56 41.42v-6.84A2.59 2.59 0 0 0 53.42 32H48" fill='none' strokeWidth={0.5} stroke="black" />
        </svg>
    );
};

export default GlassFillSVG
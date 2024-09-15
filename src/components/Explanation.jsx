import React from 'react'
import { motion } from 'framer-motion'

const Explanation = () => {
    return (
        <div>
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
        </div>
    )
}

export default Explanation
import React from 'react'
import { motion } from 'framer-motion'

const Explanation = () => {
    return (
        <div>
            <motion.div
                className=' h-[200px] flex justify-center items-center'
                initial={{ width: 0 }}  // Starts with 0 width
                animate={{ width: 700 }}  // Expands to 600px width
                exit={{ width: 0 }}  // Shrinks back to 0 width on exit
                transition={{ duration: 1.5, ease: "easeInOut" }}  // Smooth transition
            >
                {/* Animate the opacity of the <p> element with a delay */}
                <motion.p
                    className='px-10 text-[18px] text-justify '
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
                >
                    &emsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quam, veritatis animi non, voluptatem aspernatur repellendus deserunt cumque error perferendis id delectus doloremque nobis rem, ea asperiores deleniti dignissimos omnis mollitia corporis optio repudiandae perspiciatis nisi. Hic magni et est.
                    <br /><br /> &emsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam omnis, iusto temporibus non ullam inventore autem maiores corporis adipisci harum iste at perferendis sint voluptates! Voluptatem atque asperiores ratione! Sequi ad, dolorum mollitia iusto rerum temporibus voluptates, tempore, consectetur possimus corrupti accusamus obcaecati. At in veritatis earum non atque rerum! Quos debitis nisi architecto quas? Harum odit velit repellat.

                </motion.p>
            </motion.div>
        </div>
    )
}

export default Explanation
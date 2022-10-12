import * as React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";

const CustomLeftArrow = ({ onClick }) => (
    <motion.div
        whileTap={{ scale: 0.75 }}
        className="h-12 w-15 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center absolute left-[calc(4%+1px)] "
        onClick={() => onClick()}
    >
        <MdChevronLeft className="text-lg text-white" />
    </motion.div >);


const CustomRightArrow = ({ onClick }) => {
    return <motion.div
        whileTap={{ scale: 0.75 }}
        className="h-12 w-15 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center absolute right-[calc(4%+1px)]"
        onClick={() => onClick()}
    >
        <MdChevronRight className="text-lg text-white" />
    </motion.div >
};

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        
    }
};

export {
    CustomLeftArrow,
    CustomRightArrow,
    responsive
};
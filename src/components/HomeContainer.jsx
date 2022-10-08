import React, { useEffect, useState } from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { motion } from "framer-motion";

const HomeContainer = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === heroData.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 7000)

        return () => clearInterval(intervalId);
    }, [currentIndex])

    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full overflow-y-hidden"
            id="home"
        >
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
                    <p className="text-base text-orange-500 font-semibold">
                        Bike Delivery
                    </p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img
                            src={Delivery}
                            className="w-full h-full object-contain"
                            alt="delivery"
                        />
                    </div>
                </div>

                <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
                    The Fastest Delivery in
                    <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
                        Your City
                    </span>
                </p>

                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
                    eaque fugit distinctio est nam voluptatum architecto, porro iusto
                    deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
                    suscipit!
                </p>

                <button
                    type="button"
                    className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                >
                    Order Now
                </button>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img
                    src={HeroBg}
                    className=" ml-auto h-420 w-full lg:h-650"
                    alt="hero-bg"
                />

                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
                    {heroData &&

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            key={heroData[currentIndex].id}
                            className="w-[190px]  lg:w-[210px]  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                        >
                            <img
                                src={heroData[currentIndex].imageSrc}
                                className="w-22 lg:w-40 -mt-10 lg:-mt-20 "
                                alt="I1"
                            />
                            <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                                {heroData[currentIndex].name}
                            </p>

                            <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                {heroData[currentIndex].decp}
                            </p>

                            <p className="text-sm font-semibold text-headingColor">
                                <span className="text-xs text-red-600">$</span> {heroData[currentIndex].price}
                            </p>
                        </motion.div>
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;
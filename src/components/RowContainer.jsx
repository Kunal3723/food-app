import React, { useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow, responsive } from "../utils/SliderData";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gif from "../img/verified.gif";


const RowContainer = ({ data }) => {
    const rowContainer = useRef();
    const { addItem } = useCart();
    const notify = (id) => toast(<div className="flex items-center text-xl textline-center"><img className="h-[40px] w-[40px] mr-[5px]" src={gif}/>Added Success</div>, {
        position: "bottom-right",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        containerId: id
    });

    // function handleClick(item) {
    //     addItem(item);
    //     //console.log("Hello Anurag");
    //     notify;
    // }

    return (
        <Carousel
            ref={rowContainer}
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            autoPlay={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {data && data.length > 0 ? (
                data.map((item) => (
                    <div
                        key={item?.id}
                        className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                    >
                        <div className="w-full flex items-center justify-between">
                            <motion.div
                                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                whileHover={{ scale: 1.2 }}
                            >
                                <img
                                    src={item?.imageURL}
                                    alt=""
                                    className="w-full h-full object-contain"
                                    style={{ userSelect: 'none' }}
                                />
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                                onClick={()=>{notify(item?.id) ;addItem(item)}}
                            >
                                <MdShoppingBasket className="text-white" />
                              
                            {/* Same as */}
                          
                            </motion.div>
                            
                        </div>
                        
                          <ToastContainer enableMultiContainer containerId={item?.id}  position="bottom-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss={true}
                                draggable
                                pauseOnHover={false}
                                theme="light"/>

                        <div className="w-full flex flex-col items-end justify-end -mt-8">
                            <p className="text-textColor font-semibold text-base md:text-lg">
                                {item?.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                {item?.calories} Calories
                            </p>
                            <div className="flex items-center gap-8">
                                <p className="text-lg text-headingColor font-semibold">
                                    <span className="text-sm text-red-500">$</span> {item?.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full flex flex-col items-center justify-center">
                    <img src={NotFound} alt="" className="h-340" />
                    <p className="text-xl text-headingColor font-semibold my-2">
                        Items Not Available
                    </p>
                </div>
            )}
        </Carousel>
    );
};

export default RowContainer;
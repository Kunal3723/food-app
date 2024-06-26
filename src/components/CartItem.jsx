import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useCart } from "react-use-cart";

const CartItem = ({ item}) => {
    const {
        updateItemQuantity,
    } = useCart();

    return (
        <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
                src={item?.imageURL}
                className="w-20 h-20 max-w-[60px] rounded-full object-contain"
                alt=""
            />

            {/* name section */}
            <div className="flex flex-col gap-2">
                <p className="text-base text-gray-50">{item?.title}</p>
                <p className="text-sm block text-gray-300 font-semibold">
                    $ {parseFloat(item?.price)*item?.quantity}
                </p>
            </div>

            {/* button section */}
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                    }>
                    <BiMinus className="text-gray-50 " />
                </motion.div>

                <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                    {item?.quantity}
                </p>

                <motion.div
                    whileTap={{ scale: 0.75 }}
                    onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                    }
                >
                    <BiPlus className="text-gray-50 " />
                </motion.div>
            </div>
        </div>
    );
};

export default CartItem;
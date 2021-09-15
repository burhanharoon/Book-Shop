import React, { useState } from 'react'

export const Checkout = () => {
    const [quantity, setQuantity] = useState(0);
    return (

        <div className="m-6 grid grid-cols-6 items-center shadow-lg rounded">

            <img src="https://www.getnow.pk/wp-content/uploads/2018/03/The-fault-in-our-stars-433x433.png" alt="Product Image" className="lg:w-4/5" />

            <div className="flex flex-col">
                <span className="font-bold">The Fault in Our Stars</span>
                <span className="text-xs">John Green</span>
            </div>

            <div class="custom-number-input ">
                <div class="flex flex-row rounded-lg relative bg-transparent w-2/3 m-auto">
                    <button onClick={() => { quantity && setQuantity(quantity - 1) }} data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
                    <button onClick={() => { setQuantity(quantity + 1) }} data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>

            <div className="m-auto">$25</div>

            <div className="m-auto">$125</div>

            <div className="m-auto"><button className="btn btn-error btn-xs md:btn-sm lg:btn-md">Delete</button></div>

        </div>

    )
}

'use client'

import Image from "next/image";
import { useState } from "react";


export default function CardModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)


  const cartItems = true

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="flex relative cursor-pointer">
      <Image
        alt=""
        src={"/cart.png"}
        width={20}
        height={20}
        onClick={toggleModal}
      />
      <span className="absolute left-4 bottom-3 rounded-full bg-red-400 w-5 h-5 text-center text-white flex items-center justify-center">1</span>
      {
        !cartItems
          ? (<h1>Esta vacio el cart</h1>)
          : isModalOpen && (
            <div className="absolute top-8 right-0 mt-2 w-80 p-4 bg-white border-gray-50 shadow-lg">

              {/* Header */}
              <h1 className="mb-4 text-xl	">
                Shopping Cart
              </h1>

              {/* product 1 */}
              <div className="flex gap-4 mt-8">
                <Image
                  className="rounded-md"
                  src={'/clothes-1.jpg'}
                  alt=""
                  width={70}
                  height={70}
                />
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-extrabold">Classic Tote Bag</p>
                    <span>$19</span>
                  </div>
                  <div className="mb-6">
                    <p className="text-slate-600">Available</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-slate-500	">Qty. 1</p>
                    <p className="text-sky-600">remove</p>
                  </div>
                </div>
              </div>

              {/* product 2 */}
              <div className="flex gap-4 mt-8">
                <Image
                  className="rounded-md"
                  src={'/clothes-2.jpg'}
                  alt=""
                  width={70}
                  height={70}
                />
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-extrabold">Classic Tote Bag</p>
                    <span>$17</span>
                  </div>
                  <div className="mb-6">
                    <p className="text-slate-600">Available</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-slate-500	">Qty. 1</p>
                    <p className="text-sky-600">remove</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div>
                {/* Footer header */}
                <div className="flex gap-4 mt-5">
                  <div>
                    <p className="font-extrabold">Subtotal</p>
                    <p className="text-xs	mt-2 text-slate-500	">Shipping and taxes calculated at checkout</p>
                  </div>
                  <span className="font-extrabold">$103</span>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  View cart
                </button>
                <button className="bg-black  text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Checkout
                </button>
              </div>
            </div>)
      }
    </div>
  )
}



import React, { useEffect, useState } from "react";
import shoes from "../assets/vapoorfly-1.png";

const Card = () => {
  // ------------ M A I N - L O G I C -------------

  const [count, setCount] = useState(0);

  // ------ I N C R E A M E N T - F U N C T I O N ---------

  const handleIncrement = () => {

    let increaseCount = count + 1;
    localStorage.setItem("count", JSON.stringify(increaseCount));
    setCount(increaseCount);

  };

  // --------- D E C R E M E N T - F U N C T I O N ----------

  const handleDecrement = () => {

    let decreaseCount = count > 0 ? count - 1 : 0;
    localStorage.setItem("count", JSON.stringify(decreaseCount));
    setCount(decreaseCount);

  };

  // --------- R E S E T - F U N C T I O N ---------

  const handleReset = ()=>{

    let resetCount = 0
    localStorage.setItem("count", JSON.stringify(resetCount));
    setCount(resetCount);

  }

  // -------- U S E - E F F E C T ---------

  useEffect(() => {

    let oldCount = JSON.parse(localStorage.getItem("count"));
    setCount(oldCount);

  }, []);

  // ------- E X T R A - V A R I A B L E --------

  let deliveryCharges = count > 0 ? 600 : 0;
  let price = 22000;
  let quantityPrice = price * count;

  // ------------ M A I N - L O G I C -------------

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="shadow-2xl rounded-2xl">
          <div className="grid grid-cols-2">
            <div className="flex my-5 p-10">
              <img src={shoes} className="w-50 h-50" alt="" />
              <div className="bag-product-content ms-5">
                <h5 className="font-semibold text-lg">Nike Vaporfly 4</h5>
                <p className="text-lg text-slate-500">Men's Road Racing Shoes</p>
                <p className="font-semibold text-lg">MRP: ₹{price}</p>

                {/* -------------- I N C R E M E N T - D E C R E M E N T - B U T T O N -------------- */}

                <div className="quantity-button flex items-center gap-3 mt-5">
                  <button className="decrement cursor-pointer" onClick={handleDecrement}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  <span className="text-xl">{count}</span>
                  <button className="increment cursor-pointer" onClick={handleIncrement}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
                <button className="bg-black hover:bg-gray-700 text-white cursor-pointer px-5 py-2 rounded mt-5" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>

            {/* ------------ P R I C E - S U M M A R Y -------------- */}

            <div className="bag-items-prices p-10">
              <div className="bag-items-price-title">
                <h2 className="text-3xl font-semibold">Summary</h2>
              </div>
              <div className="bag-items-price-content mt-10">
                <ul className="w-100">
                  <li className="flex items-center justify-between mb-3">
                    <p className="text-xl font-semibold">Subtotal</p>
                    <p className="text-xl subtotal-price">₹{quantityPrice}</p>
                  </li>
                  <li className="flex items-center justify-between border-b-1 pb-3">
                    <p className="text-xl font-semibold">Estimated Delivery & Handling</p>
                    <p className="text-xl delivery-charges">₹{deliveryCharges}</p>
                  </li>
                  <li className="flex items-center justify-between mt-3">
                    <p className="text-xl font-semibold">Total</p>
                    <p className="total-price text-xl">₹{quantityPrice + deliveryCharges}</p>
                  </li>
                  <li>
                    <button className="bg-black hover:bg-gray-700 text-white cursor-pointer px-5 py-2 rounded mt-10">Buy Now</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import "./creditCard.css";

function CreditCard({ cards }) {
  const [moreDetails, setMoreDetails] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(cards, "abiam");
  return (
    <>
      <div container>
        <div className="credit-card">
          <div className="credit-top font-bold">
            <h5>{cards.CreditCardType}</h5>
            {/* <h5>{cards.Gender}</h5> */}
            <h5>{cards.Email}</h5>
          </div>

          <h3 className="credit-card__number font-bold">
            {cards.CreditCardNumber}
          </h3>

          <div className="credit-card__info font-bold">
            {/* <div className='credit-card__info_name'> */}
            <div className="credit-card__info_label">
              <h5>CARDHOLDER'S NAME</h5>
              <i>
                <b>
                  {cards.FirstName} {cards.LastName}
                </b>
              </i>
            </div>

            <div className="credit-card__info_label">
              <h5>Payment Method</h5>
              <h4>{cards.PaymentMethod}</h4>
            </div>
            {/* </div> */}

            {/* <div className='credit-card__info_expiry'>
                    <h5 className='credit-card__info_label'>Payment Method</h5>
                    <h5>06/2027</h5>
                </div> */}
          </div>

          <div className="viewMore">
            <button
              class="bg-lightBlue-500 hover:bg-blue-500 text-blueGray-500 font-semibold hover:text-white py-2 px-4 border border-blueGray-400 hover:border-transparent rounded"
              onClick={() => {
                // setMoreDetails(!moreDetails);
                setIsOpen(!isOpen);
              }}
            >
              {" "}
              view all details
            </button>
          </div>
        </div>
        {/* <div className=`content ${}`> */}

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div ref={ref} className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-2xl leading-6 font-bold text-gray-900"
                          id="modal-headline"
                        >
                          Card Details
                        </h3>
                        <div className="mt-4">
                          <p className="text-xl font-medium text-gray-500">
                            <b>Email:</b> ezechukw@gmail.com
                          </p>
                          <p className="text-xl font-mediu text-gray-500 mb-2">
                            <b>Full Name:</b> {cards.FirstName} {cards.LastName}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>Gender:</b> {cards.Gender}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>Latitude:</b> {cards.Latitude}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>Longitude:</b> {cards.Longitude}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>CreditCardNumber:</b> {cards.CreditCardNumber}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>CreditCardType:</b> {cards.CreditCardType}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>DomainName:</b> {cards.DomainName}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>PhoneNumber:</b> {cards.PhoneNumber}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>MacAddress:</b> {cards.MacAddress}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>URL:</b> {cards.URL}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>UserName:</b> {cards.UserName}
                          </p>
                          <p className="text-xl font-medium text-gray-500 mb-2">
                            <b>LastLogin:</b> {cards.LastLogin}
                          </p>
                          <p className="text-xl font-medium text-gray-500 ">
                            <b>PaymentMethod:</b> {cards.PaymentMethod}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>

        {/* <div className={`content ${moreDetails ? "active" : ""}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default CreditCard;

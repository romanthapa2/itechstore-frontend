import React from 'react';

export default function CheckOutPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Contact Details", "Shipping Address", "Payment Method", "Review Order"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section className="bg-gray-50 w-full h-fit p-4 dark:bg-gray-900 my-8">
      <div className="mx-auto max-w-screen-xl px-content">
        <div className="mx-auto max-w-screen-md">
          <div className="rounded-lg bg-white shadow-lg dark:bg-gray-800 overflow-hidden">
            {/* Stepper */}
            <div className="bg-gray-100 dark:bg-gray-700 px-content py-section-sm border-b border-gray-200 dark:border-gray-600">
              <div className="flex justify-between items-center">
                {steps.map((label, index) => (
                  <div key={label} className="flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium 
                      ${activeStep >= index 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'}`}
                    >
                      {index + 1}
                    </div>
                    <div className={`mt-2 text-xs sm:text-sm ${activeStep >= index ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-content">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{steps[activeStep]}</h2>
              
              <form action="#" className="space-y-8">
                {/* Step 1: Contact Details */}
                {activeStep === 0 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          Phone Number
                        </label>
                        <div className="relative flex">
                          <button
                            id="dropdown-phone-button"
                            data-dropdown-toggle="dropdown-phone"
                            className="flex-shrink-0 inline-flex items-center rounded-l-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 hover:bg-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            type="button">
                            <span className="flex items-center">
                              <span className="mr-2">+977</span>
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </button>
                          <input
                            type="tel"
                            id="phone-input"
                            className="block w-full flex-1 rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                            placeholder="9812345678"
                            pattern="[0-9]{10}"
                            required
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">We'll send order updates to this number</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping Address */}
                {activeStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="province"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          Province
                        </label>
                        <select
                          id="province"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                          required
                        >
                          <option value="" disabled selected>Select province</option>
                          <option value="province1">Province 1</option>
                          <option value="province2">Province 2</option>
                          <option value="province3">Bagmati</option>
                          <option value="province4">Gandaki</option>
                          <option value="province5">Lumbini</option>
                          <option value="province6">Karnali</option>
                          <option value="province7">Sudurpashchim</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                          placeholder="Enter city name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="place"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          Area / Locality
                        </label>
                        <input
                          type="text"
                          id="place"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                          placeholder="Enter area or locality"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="postal_code"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="postal_code"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                          placeholder="Enter postal code"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="street_address"
                          className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="street_address"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                          placeholder="House no., Street, Landmark"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="save_address"
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 focus:ring-green-500 text-green-600"
                        />
                      </div>
                      <label htmlFor="save_address" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        Save this address for future orders
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Method */}
                {activeStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid gap-6">
                      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <label className="flex items-center p-4 cursor-pointer">
                          <input
                            type="radio"
                            name="payment_method"
                            value="cash_on_delivery"
                            defaultChecked
                            className="h-5 w-5 text-green-600 focus:ring-green-500"
                          />
                          <div className="ml-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium text-gray-900 dark:text-white">Cash on Delivery</span>
                          </div>
                        </label>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <label className="flex items-center p-4 cursor-pointer">
                          <input
                            type="radio"
                            name="payment_method"
                            value="credit_card"
                            className="h-5 w-5 text-green-600 focus:ring-green-500"
                          />
                          <div className="ml-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <span className="font-medium text-gray-900 dark:text-white">Credit Card</span>
                          </div>
                        </label>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <label className="flex items-center p-4 cursor-pointer">
                          <input
                            type="radio"
                            name="payment_method"
                            value="khalti"
                            className="h-5 w-5 text-green-600 focus:ring-green-500"
                          />
                          <div className="ml-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium text-gray-900 dark:text-white">Khalti</span>
                          </div>
                        </label>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <label className="flex items-center p-4 cursor-pointer">
                          <input
                            type="radio"
                            name="payment_method"
                            value="esewa"
                            className="h-5 w-5 text-green-600 focus:ring-green-500"
                          />
                          <div className="ml-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium text-gray-900 dark:text-white">eSewa</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review Order */}
                {activeStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Order Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                          <span className="font-medium text-gray-900 dark:text-white">Rs. 42,999</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Shipping</span>
                          <span className="font-medium text-gray-900 dark:text-white">Rs. 150</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Tax</span>
                          <span className="font-medium text-gray-900 dark:text-white">Rs. 499</span>
                        </div>
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
                          <div className="flex justify-between">
                            <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                            <span className="font-semibold text-gray-900 dark:text-white">Rs. 43,648</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Shipping Information</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Ram Thapa</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">House #123, Kathmandu</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Nepal, 44600</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Payment Method</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Cash on Delivery</p>
                    </div>
                  </div>
                )}

                <div className="pt-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
                  {activeStep > 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                      Back
                    </button>
                  )}
                  {activeStep === 0 && (
                    <div></div>
                  )}
                  {activeStep < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700">
                      Continue to {steps[activeStep + 1]}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700">
                      Place Order
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

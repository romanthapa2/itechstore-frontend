export default function CheckOutPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md">
          <div className="rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="p-4 sm:p-8 lg:p-16">
              <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                Checkout
              </h2>
              <form action="#">
                <div className="grid gap-4 lg:gap-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Contact Details
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Ram"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="last_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Thapa"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="example@example.com"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          Phone Number
                        </label>
                        <div className="relative flex">
                          <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" className="flex-shrink-0 inline-flex items-center justify-center rounded-l-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 hover:bg-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" type="button">
                            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="currentColor" d="M207.029 381.471l194.343-194.343c9.373-9.373 9.373-24.569 0-33.941s-24.569-9.373-33.941 0L224 297.745 80.569 153.187c-9.373-9.373-24.569-9.373-33.941 0s-9.373 24.569 0 33.941l194.343 194.343c9.373 9.373 24.569 9.373 33.941 0z"></path>
                            </svg>
                            +977
                          </button>
                        
                          <input
                            type="tel"
                            id="phone-input-3"
                            className="z-0 rounded-e-lg border border-l-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="9812363849"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="province" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          Province
                        </label>
                        <input
                          type="text"
                          id="province"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Province"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="City"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="place" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          Place
                        </label>
                        <input
                          type="text"
                          id="place"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Place"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="new_address" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          Add New Address
                        </label>
                        <input
                          type="text"
                          id="new_address"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="New Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Payment Method
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="credit_card"
                          name="payment_method"
                          className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-800"
                        />
                        <label htmlFor="credit_card" className="ml-3 block text-sm font-medium text-gray-900 dark:text-white">
                          Credit Card
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="paypal"
                          name="payment_method"
                          className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-800"
                        />
                        <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-900 dark:text-white">
                          PayPal
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="cash_on_delivery"
                          name="payment_method"
                          className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-800"
                        />
                        <label htmlFor="cash_on_delivery" className="ml-3 block text-sm font-medium text-gray-900 dark:text-white">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                  </div>
  
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-800"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  
  
}
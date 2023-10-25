import React, { useContext } from 'react';
import { ShopProvider } from '../../Provider/ShopProvider';

const CartItems = () => {
    const {  all_products, cartItems, getTotalAmount, removeFromCart}= useContext(ShopProvider);
    console.log(all_products,cartItems,removeFromCart)
    return (
        <div className=' my-container my-10'>
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
              <div class="mt-8   first-letter:">
                <div class=" grid lg:grid-cols-2 gap-10  ">
               {      all_products.map(e=> {
                        if(cartItems[e.id]>0){
                            return  <ul role="list" class="-my-6 divide-y divide-gray-200 border-2 border-pink-300 px-6 py-4 rounded">
                    <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={e?.image} alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center" />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                             {e.name}
                            </h3>
                            <p class="ml-4">${e.new_price * cartItems[e.id]}</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">Blue</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">{cartItems[e?.id]}</p>
                             <div class="flex">
                            <button type="button" onClick={()=>{removeFromCart(e.id)}} class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>  }})}
                
              </div>
              <div className="border-t mt-10 border-gray-200 px-4 py-6 sm:px-6 ">
                   <div className='grid lg:grid-cols-2'>
                   <div >
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${getTotalAmount()}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                   </div>
                </div>
              </div>
            </div>
      
    );
};

export default CartItems;
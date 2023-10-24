import React from 'react';
MdKeyboardArrowRight
import {  MdKeyboardArrowRight } from "react-icons/md";
const Breadcrumb = (props) => {

    const {product} = props
    return (
        <div className='mt-10'>
             <nav aria-label="Breadcrumb ">
          <ol role="list" className="mx-auto flex item-center max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          
              <li >
                <div className="flex items-center">
                  <p  className="mr-2 font-medium text-gray-900">
                    Home
                  </p>
                    <MdKeyboardArrowRight width={16}  className=" text-gray-500"/>
            
                </div>
              </li>
              <li >
                <div className="flex items-center">
                  <p  className="mr-2 font-medium text-gray-900">
                    Shop
                  </p>
                    <MdKeyboardArrowRight width={16}  className=" text-gray-500"/>
            
                </div>
              </li>
              <li >
                <div className="flex items-center">
                  <p  className="mr-2 font-medium text-gray-900">
                   {product.category}
                  </p>
                    <MdKeyboardArrowRight width={16}  className=" text-gray-500"/>
            
                </div>
              </li>
            <li className="">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        </div>
    );
};

export default Breadcrumb;
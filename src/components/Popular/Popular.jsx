import React from 'react';
import data from '../../../public/data'
import Item from './Item';
const Popular = () => {
    return (
        <div className='my-container mb-10'>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular in women </h2>
         
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {
                data.map((item)=> <Item key={item.id} item={item} />)
              }
             </div>
        </div>
    );
};

export default Popular;
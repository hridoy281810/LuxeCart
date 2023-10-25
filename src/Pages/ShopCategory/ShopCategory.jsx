import React, { useContext } from 'react';
import { ShopProvider } from '../../Provider/ShopProvider';
import Item from '../../components/Popular/Item';

const ShopCategory = (props) => {
    const {all_products} = useContext(ShopProvider)
    return (
        <div>
            <img src={props.banner} alt="" />
         <div className='my-container mb-10'>
         <div >
         <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-10 text-gray-600">Here you will find all the products according to the categoryz </h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                    // Show data by category
                    all_products.map((item,i)=> {
                        if(props.category === item.category){
                            return <Item key={i} item={item}></Item>
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>
         </div>
        </div>
    );
};

export default ShopCategory;
import React, { useContext } from 'react';
import { ShopProvider } from '../../Provider/ShopProvider';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';

const Product = () => {
    const {all_products} = useContext(ShopProvider)
    const {id} = useParams()
    const product = all_products.find((p)=> p.id === Number(id))
    return (
        <div>
            <Breadcrumb product={product} />
            <ProductDisplay product={product} />
            <RelatedProduct></RelatedProduct>
        </div>
    );
};

export default Product;
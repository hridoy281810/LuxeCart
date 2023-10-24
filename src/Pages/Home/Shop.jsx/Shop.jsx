import React from 'react';
import Banner from './Banner';
import Popular from '../../../components/Popular/Popular';
import Offers from '../../../components/Offers/Offers';
import NewCollections from '../../../components/NewCollections/NewCollections';
import NewsLetter from '../../../components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Offers></Offers>
            <NewCollections></NewCollections>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Shop;
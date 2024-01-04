import React, { useState } from 'react';
import OccasionPicker from '../Filters/OccasionPicker';
import PriceFilter from '../Filters/PriceFilter';
import flowerData from '../../Data/FlowerData';
import ShopProximity from '../Filters/ShopProximity';
import FlowerList from '../FlowerList/FlowerList';

const FilterSearchPage = () => {

  const occasions = flowerData.map((oc) => oc.occasion);

  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [distance, setDistance] = useState('');

  const handleOccasionChange = (newOccasion) => {
    setSelectedOccasion(newOccasion);
  };

  const handlePriceChange = (newMinPrice, newMaxPrice) => {
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
  };

  const handlePostalCodeChange = (newPostal) => {
    setPostalCode(newPostal);
  };

  const handleDistanceChange = (newDistance) => {
    setDistance(newDistance);
  };

  return (
    <div className='filteredSearch'>
            <OccasionPicker occasions={occasions} onOccasionChange={handleOccasionChange} />
            <PriceFilter minPrice={minPrice} maxPrice={maxPrice} onPriceChange={handlePriceChange} />
            <ShopProximity postalCode={postalCode} distance={distance} onPostalCodeChange={handlePostalCodeChange} onDistanceChange={handleDistanceChange} />
            <FlowerList
              flowers={flowerData}
              selectedOccasion={selectedOccasion}
              minPrice={minPrice}
              maxPrice={maxPrice}
              postalCode={postalCode}
              distance={distance}  
            />
     </div >  
  );
};
export default FilterSearchPage;
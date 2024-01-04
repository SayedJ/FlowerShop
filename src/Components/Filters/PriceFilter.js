import React from 'react'

const PriceFilter = ({minPrice, maxPrice, onPriceChange}) =>
{
return(
    <div>
        <label>
            Min price:
            <input
            type='number'
            value={minPrice}
            onChange={(e) => onPriceChange(e.target.value, maxPrice)}/>
        </label>
        <label>
            Max price:
            <input
            type='number'
            value={maxPrice}
            onChange={(e) => onPriceChange(minPrice, e.target.value)}/> 
        </label>
    </div>
);
};

export default PriceFilter;

import React from 'react'
import { Link } from 'react-router-dom'; 
const flowerList = ({flowers, selectedOccasion, minPrice, maxPrice, postalCode, distance}) => {
    const filterFlowers = (flower) => {
        const occasionFilter = !selectedOccasion || flower.occasion === selectedOccasion;

        const priceFilter =
        (!minPrice || parseFloat(flower.price) >= parseFloat(minPrice)) &&
        (!maxPrice || parseFloat(flower.price) <= parseFloat(maxPrice))

        const locationFilter =
        !postalCode ||
        !distance ||
        (flower.location.postalCode === postalCode && flower.location.distance <= distance)
        
        return occasionFilter && priceFilter && locationFilter;
    }
    const filteredFlowers = flowers.filter(filterFlowers);

    return (
      <section>
        {filteredFlowers.map((flower) => {
          return (  
            <div key={flower.id} className='item'>
              <img src={flower.img} alt={flower.name} />
              <h3>{flower.name}</h3>
              <p>{flower.price}</p>
              <p>{flower.location.city}</p>
              <Link to={`/checkout/${flower.id}`}>
              <button type='submit'>Buy</button>
              </Link>
            </div>
          );
        })}
    </section>
    );
  }
  export default flowerList;
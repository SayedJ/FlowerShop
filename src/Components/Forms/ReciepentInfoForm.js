import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addFormData, getAllFormData, clearAllFormData } from '../../Data/UserData';
import flowerData from '../../Data/FlowerData';

const RecipientForm = (props) => {
  const { flowerId } = useParams();
  const flower = flowerData.find((e) => e.id == flowerId);
  const users = getAllFormData();

    const [recipientData, setRecipientData] = useState({
        name: '',
        city: '',
        postalCode: '',
        flowerId: 0,
        quantity: 0,
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipientData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  
    const handleSubmit =  (e) => {
        e.preventDefault();

           addFormData({
            name: recipientData.name,
            city: recipientData.city,
            postalCode: recipientData.postalCode,
            flowerId: flower.id,
            quantity: recipientData.quantity + 1,
          })

          setRecipientData({
            name: '',
            city: '',
            postalCode: '',
            flowerId: flower.id,
            quantity: 0,
          });
        };
    return( 
        <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={recipientData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={recipientData.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={recipientData.postalCode}
            onChange={handleInputChange}
          />
        </label>
    
        <button type="submit" value='submit'>Submit</button>
      </form>

      <div className='item-clicked'>
            <div key={flower.id} className='item'>
              <img src={flower.img} alt={flower.name} />
              <h3>{flower.name}</h3>
              <p>{flower.price}</p>
              <p>{flower.location.city}</p>
            </div>

      </div>
    </div>
  );
}

export default RecipientForm;
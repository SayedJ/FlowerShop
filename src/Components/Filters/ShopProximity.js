import React from 'react'

const shopProximity = ({postalCode, distance, onPostalCodeChange, onDistanceChange}) => {
    
    return(
<div>
        <label>
            Postal Code:
            <input
            type='number'
            value={postalCode}
            onChange={(e)=> onPostalCodeChange(e.target.value)}/>
        </label>
        <label>
            Distance:
            <input
            type='number'
            value={distance}
            onChange={(e) => onDistanceChange(e.target.value)}
            />
        </label>
</div>
    )
}
export default shopProximity;
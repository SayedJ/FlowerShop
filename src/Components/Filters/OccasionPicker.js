import React from 'react'


const OccasionPicker = ({occasions, onOccasionChange}) => {
    return(
<div className='occasionpicker'>
        <label>
            Select occasion:
            <select onChange={(e) => onOccasionChange(e.target.value) }>
                <option value="">All</option>
                {occasions.map((occasion, index) => (
                    <option key={index} value={occasion}>
                    {occasion}
                </option>
                ))}
            </select>
        </label>
</div>
    )
}

export default OccasionPicker;
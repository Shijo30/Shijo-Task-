import React, { useState } from 'react'
import "../Components/Add_city.css"

function Add_city() {
    const [city, setCity] = useState('');
    const [cityList, setCityList] = useState([]);
  
  
    const handleAddCity = (e) => {
      e.preventDefault();
  
     
      const City = city.trim();
  
      if (City === '') {
          alert("empty")
        return;
      }
  
      if (cityList.includes(City)) 
          {
      alert("Already Added")
        return;
      }
  
      setCityList([...cityList, City]);
      setCity(''); 
     
    };
  
  return (
    <div>

<div className='container'>
    <h4> Add City </h4>
      <form onSubmit={handleAddCity}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Add City</button>
      </form>

 

      <ul>
        {cityList.map((city) => (
          <li >{city}</li>
        ))}
      </ul>
    </div>

    </div>
  )
}

export default Add_city
import React, { useState, useEffect } from 'react';
import './Main.css'



function Main() {
  const [data, setData] = useState([])
  
  useEffect( ()=>{
    fetch('https://api.coinlore.net/api/tickers/?start=0&limit=8')
    .then(response => response.json())
    .then(json => setData(json.data))


  })
  return (
    <div className="Mainsec">
   
      {data.map((datum)=>{
         const {id, symbol, name, price_usd} = datum
        return(
            <div className='bit' key={id}>
                <div id='syna'>
                    <span>{symbol}</span>
                    <span>{name}</span>
                </div>
             <h2 id='price'>
              {price_usd}
            </h2>
            </div>
          )
       })}
     
    </div>
  );
}

export default Main;

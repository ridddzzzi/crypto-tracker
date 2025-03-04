import React, { useState, useEffect, use} from 'react'
import './home.css'
import axios from 'axios'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Home = () => {
  const [coins,setCoins] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?', {
      params:{
        vs_currency:'usd',
        order:'market_cap_desc',
        per_page:10,
        page:1,
        sparkline:true,
      },
    })
    .then(response => {
      setCoins(response.data);
    })
    .catch(error => {
      console.error('Error Fetching Data!', error);
    }) 
  }, []); 


   
  
    return (
      <>
        
        <table className='table mt-5 crypto-table'>
          <thead>
            <tr>
              <th className='col-1 px-2 align-middle'> # </th>
              <th className='col-3 px-2 align-middle'> Name </th>
              <th className='col-2 px-2 align-middle'> Price </th>
              <th className='col-2 px-2 align-middle'> 24H Change </th>
              <th className='col-2 px-2 align-middle'> Price Graph(7D) </th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the coins data and render each row */}
            {coins.map((coin, index) => (
              <tr key={coin.id} >
                <td className='px-2 align-middle'>{index + 1}</td>
                <td className='px-2 align-middle'>{coin.name}</td>
                <td className='px-2 align-middle'>${coin.current_price.toLocaleString()}</td>
                <td className={`px-2 align-middle ${coin.price_change_percentage_24h < 0 ? 'text-danger' : 'text-success'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>
                 
                  <Sparklines data={coin.sparkline_in_7d.price}>
                    <SparklinesLine color={coin.price_change_percentage_24h < 0 ? 'red' : 'green'} />
                    </Sparklines>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
export default Home







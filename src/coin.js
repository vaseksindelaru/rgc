import React from 'react';
import './Coin.css';

export const Coin = ({name,symbol,image}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                  <div className='coin'>
                     <img src={image} alt='crypto'></img>
                     <h2>{name}</h2>
                     <p className='coin-symbol'>{symbol}</p> 
                        <div className= 'coin-data'></div>
                 </div>
            </div>
        </div>
    )
}



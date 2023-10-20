import React from "react";
import "./style.css";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

const Grid = ({ coin }) => {
  console.log(coin);
  return (
    <div className="grid-container">
      <div className="coin-info">
        <img src={coin.image} className="coin-logo" />
        <div className="coin-basic">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>

      {coin.price_change_percentage_24h >= 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div>
            <TrendingUpRoundedIcon className="trend-chip"/>
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip red-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div>
            <TrendingDownRoundedIcon className="trend-chip red-chip" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Grid;

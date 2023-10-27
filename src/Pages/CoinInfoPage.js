import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Components/common/Header/Header";
import LoaderDisplay from "../Components/common/loader/Loader";
import { coinObject } from "../Functions/convertObject";
import List from "../Components/Dashboard/List";
import CoinDetails from "../Components/Coin/coinInfo";
import { getCoinData } from "../Functions/getCoinData";
import { getCoinPrices } from "../Functions/getCoinPrices";
import LineChart from "../Components/Coin/linechart";
import convertDate from "../Functions/convertDate";
import SelectDays from "../Components/Coin/selectDays";
import { makeChartData } from "../Functions/makeChartData";
import ToggleChart from "../Components/Coin/toggleChart";

const CoinPage = () => {
  const { id } = useParams();

  const [coinData, setCoinData] = useState(null);
  const [days, setDays] = useState(60);
  const [loading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (!id) return;
    getData();
  }, []);

  async function getData() {
    const data = await getCoinData(id);

    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        makeChartData(setChartData, prices);

        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);

    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      makeChartData(setChartData, prices);
      setIsLoading(false);
      setDays(event.target.value);
    }
  };

  const handlePriceType = async (event, newPriceType) => {
    setIsLoading(true);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      makeChartData(setChartData, prices);
      setIsLoading(false);
      setPriceType(event.target.value);
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <LoaderDisplay />
      ) : (
        <div>
          <div className="coin-grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper-container">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <ToggleChart
              priceType={priceType}
              handlePriceType={handlePriceType}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>

          <CoinDetails coin={coinData} />
        </div>
      )}
    </div>
  );
};
export default CoinPage;

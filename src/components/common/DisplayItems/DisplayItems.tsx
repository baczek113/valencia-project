import { useContext, useEffect, useState } from "react";
import { BeerIF, DisplayItemsIF } from "../../../interfaces";
import "./DisplayItems.css";
import globalFunctions from "../../../services/globalFunctions";
import CCard from "../CCard/CCard";
import { UserToken } from "../../../services/contexts";

const DisplayItems: React.FC<DisplayItemsIF> = ({ type }) => {
  const globalBeers = useContext(UserToken);

  const getBeers = async (type: string = "ale"): Promise<void> => {
    let beer = await globalFunctions.requestBeer(type);
    globalBeers.setter("allTheBeers", beer)
  };

  useEffect(()=>{
    getBeers(type);
  },[type]);

  return (
    <div className="display-items-container">
      {globalBeers?.allTheBeers?.error !== true && globalBeers?.allTheBeers.beersList.length > 0 ? (
        globalBeers.allTheBeers.beersList.map((singleBeer: BeerIF) => {
          return (
            <CCard
              beer={singleBeer}
              cat={type}
              key={singleBeer.id + type}
            />
          );
        })
      ) : (
        <div className="loading-screen">LOADING...</div>
      )}
    </div>
  );
};

export default DisplayItems;

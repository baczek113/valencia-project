import { useContext, useEffect, useState } from "react";
import { WineIF, DisplayItemsIF } from "../../../interfaces";
import "./DisplayItems.css";
import globalFunctions from "../../../services/globalFunctions";
import CCard from "../CCard/CCard";
import { UserToken } from "../../../services/contexts";

const DisplayItems: React.FC<DisplayItemsIF> = ({ type }) => {
  const globalWines = useContext(UserToken);

  const getWines = async (type: string = "reds"): Promise<void> => {
    let wine = await globalFunctions.requestWine(type);
    globalWines.setter("allTheWines", wine)
  };

  useEffect(()=>{
    getWines(type);
  },[type]);

  return (
    <div className="display-items-container">
      {globalWines?.allTheWines?.error !== true && globalWines?.allTheWines.winesList.length > 0 ? (
        globalWines.allTheWines.winesList.map((singleWine: WineIF) => {
          return (
            <CCard
              wine={singleWine}
              cat={type}
              key={singleWine.id + type}
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

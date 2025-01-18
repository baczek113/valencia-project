import "./CCard.css";
import { CCardIF, FavouritesIF } from "../../../interfaces";
import { UserToken } from "../../../services/contexts";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CCard: React.FC<CCardIF> = ({ wine, cat }) => {

  const globalProps = useContext(UserToken);
  const navigate = useNavigate();

  const viewDetails = (): void => {
    globalProps.setter("selectedWine", wine.id);
    navigate("/details");
  };

  const isFavourited = (): boolean => {
    let favourited = false;
    globalProps.favourites.forEach((item: FavouritesIF)=>{
      if(item.cat === cat && item.id === wine.id)
      {
        favourited = true;
      }
    });
    return favourited;
  }

  const addToFavourites = (): void => {
    let favouritesCopy = globalProps.favourites;
    if(isFavourited())
    {
      globalProps.favourites.forEach((item: FavouritesIF, index: number)=>{
        if(item.cat === cat && item.id === wine.id)
        {
          favouritesCopy.splice(index, 1);
        }
      });
    }
    else
    {
      favouritesCopy.push({"id": wine.id, "cat": cat})
    }

    globalProps.setter("favourites", favouritesCopy);
  };

  return (
    <div className="card">
      <img src={wine.image} alt="image couldn't load" />
      <div className="name">{wine.wine}</div>
      <div className="bottom-half">
        <button className="view-details" onClick={() => viewDetails()}>
          View details
        </button>
        {
        globalProps.token !== ""?
        <button className={`add-to-fav${isFavourited()?"--favourited":""}`} onClick={()=>{addToFavourites()}}>
          <svg
            height="20px"
            width="20px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 47.94 47.94"
            xmlSpace="preserve"
          >
            <path
              d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"
            />
          </svg>
        </button>
        : ""
    }
      </div>
    </div>
  );
};

export default CCard;

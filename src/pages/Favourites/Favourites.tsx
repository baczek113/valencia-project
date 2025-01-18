import "../../components/common/DisplayItems/DisplayItems.css";
import globalFunctions from "../../services/globalFunctions";
import { useContext, useEffect, useState } from "react";
import { UserToken } from "../../services/contexts";
import { BeerIF, CCardIF, FavouritesIF } from "../../interfaces";
import CCard from "../../components/common/CCard/CCard";

const Favourites = () => {
  const [beersToDisplay, setBeersToDisplay] = useState<CCardIF[]>([]);
  const globalProps = useContext(UserToken);

  const getBeer = (cat: string, id: number): Promise<BeerIF> => {
    return globalFunctions.requestSingleBeer(cat, id);
  };

  useEffect((): void => {
      let i = 0;
      let arrayCopy : CCardIF[] = [];
      if(globalProps.favourites.length !== 0)
      {
      globalProps.favourites.forEach(
        async (item: FavouritesIF): Promise<void> => {
          await getBeer(item.cat, item.id).then((response): void => {
            arrayCopy.push({"beer" : response, "cat" : item.cat});
            if(arrayCopy.length === globalProps.favourites.length)
            {
              setBeersToDisplay(arrayCopy);
            }
          });
        }
      );
    }
    else
    {
      setBeersToDisplay([]);
    }
  }, [globalProps]);

  return (
    <div className="display-items-container">
      { beersToDisplay.length !== 0 ?
      (beersToDisplay.map((singleCard: CCardIF) => {
        return (
            <CCard key={singleCard.beer.id + singleCard.cat}
              beer={singleCard.beer}
              cat={singleCard.cat}
            />
          );
        })):
        (<div className="loading-screen">LOADING...</div>)}
    </div>
  );
};

export default Favourites;

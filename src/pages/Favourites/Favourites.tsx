import "../../components/common/DisplayItems/DisplayItems.css";
import globalFunctions from "../../services/globalFunctions";
import { useContext, useEffect, useState } from "react";
import { UserToken } from "../../services/contexts";
import { WineIF, CCardIF, FavouritesIF } from "../../interfaces";
import CCard from "../../components/common/CCard/CCard";

const Favourites = () => {
  const [winesToDisplay, setWinesToDisplay] = useState<CCardIF[]>([]);
  const globalProps = useContext(UserToken);

  const getWine = (cat: string, id: number): Promise<WineIF> => {
    return globalFunctions.requestSingleWine(cat, id);
  };

  useEffect((): void => {
      let i = 0;
      let arrayCopy : CCardIF[] = [];
      if(globalProps.favourites.length !== 0)
      {
      globalProps.favourites.forEach(
        async (item: FavouritesIF): Promise<void> => {
          await getWine(item.cat, item.id).then((response): void => {
            arrayCopy.push({"wine" : response, "cat" : item.cat});
            if(arrayCopy.length === globalProps.favourites.length)
            {
              setWinesToDisplay(arrayCopy);
            }
          });
        }
      );
    }
    else
    {
      setWinesToDisplay([]);
    }
  }, [globalProps]);

  return (
    <div className="display-items-container">
      { winesToDisplay.length !== 0 ?
      (winesToDisplay.map((singleCard: CCardIF) => {
        return (
            <CCard key={singleCard.wine.id + singleCard.cat}
              wine={singleCard.wine}
              cat={singleCard.cat}
            />
          );
        })):
        (<div className="loading-screen">LOADING...</div>)}
    </div>
  );
};

export default Favourites;

import "./Favourites.css";
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
      let arrayCopy : CCardIF[] = [];
      globalProps.favourites.forEach(
        async (item: FavouritesIF): Promise<void> => {
          let myResponse = await getBeer(item.cat, item.id);
          arrayCopy.push({"beer" : myResponse, "cat" : item.cat});
        }
      );
      setBeersToDisplay(arrayCopy);
  }, []);

  return (
    <div className="display-items-container">
      {
      beersToDisplay.map((singleCard: CCardIF) => {
        return (
            <CCard key={singleCard.beer.id + singleCard.cat}
              beer={singleCard.beer}
              cat={singleCard.cat}
            />
          );
        })}
    </div>
  );
};

export default Favourites;

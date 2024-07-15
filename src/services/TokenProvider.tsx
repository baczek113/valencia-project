import { useState } from "react";
import { UserToken } from "./contexts";
import { BeerErrorHandlingIF, FavouritesIF, TokenProviderIF } from "../interfaces";

export const TokenProvider : React.FC<TokenProviderIF> = ({ children }) => {


  interface globalPropsIF{
    token: string,
    allTheBeers: BeerErrorHandlingIF,
    selectedBeer: number,
    favourites: FavouritesIF[]
  }

  const [globalProps, setGlobalProps] = useState<globalPropsIF>({token: "", allTheBeers: {error: false, beersList: [], errorMessage: ""}, selectedBeer: 0, favourites: []});

  const setTokenGlobal = (target: string, payload: any) : void => {
    setGlobalProps((prevState) => ({
      ...prevState,
        [target]: payload,
    }));
  };

  return (
    <UserToken.Provider value={{ token: globalProps.token, setter: setTokenGlobal, allTheBeers: {error: globalProps.allTheBeers.error, beersList: globalProps.allTheBeers.beersList, errorMessage: globalProps.allTheBeers.errorMessage}, selectedBeer: globalProps.selectedBeer, favourites: globalProps.favourites }}>
      {children}
    </UserToken.Provider>
  );
};
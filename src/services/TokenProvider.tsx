import { useState } from "react";
import { UserToken } from "./contexts";
import { WineErrorHandlingIF, FavouritesIF, TokenProviderIF } from "../interfaces";

export const TokenProvider : React.FC<TokenProviderIF> = ({ children }) => {


  interface globalPropsIF{
    token: string,
    allTheWines: WineErrorHandlingIF,
    selectedWine: number,
    favourites: FavouritesIF[]
  }

  const [globalProps, setGlobalProps] = useState<globalPropsIF>({token: "", allTheWines: {error: false, winesList: [], errorMessage: ""}, selectedWine: 0, favourites: []});

  const setTokenGlobal = (target: string, payload: any) : void => {
    setGlobalProps((prevState) => ({
      ...prevState,
        [target]: payload,
    }));
  };

  return (
    <UserToken.Provider value={{ token: globalProps.token, setter: setTokenGlobal, allTheWines: {error: globalProps.allTheWines.error, winesList: globalProps.allTheWines.winesList, errorMessage: globalProps.allTheWines.errorMessage}, selectedWine: globalProps.selectedWine, favourites: globalProps.favourites }}>
      {children}
    </UserToken.Provider>
  );
};
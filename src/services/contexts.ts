import { createContext } from "react";
import { WineErrorHandlingIF, WineIF, FavouritesIF } from "../interfaces";

interface TokenValue {token: string, setter: (target: string, payload: any) => void, allTheWines : WineErrorHandlingIF, selectedWine: number, favourites: FavouritesIF[]};

export const UserToken = createContext<TokenValue>({token: "", setter: ()=>{}, allTheWines: {error: false, winesList: [], errorMessage: ""}, selectedWine: 0, favourites: []});
import { createContext } from "react";
import { BeerErrorHandlingIF, BeerIF, FavouritesIF } from "../interfaces";

interface TokenValue {token: string, setter: (target: string, payload: any) => void, allTheBeers : BeerErrorHandlingIF, selectedBeer: number, favourites: FavouritesIF[]};

export const UserToken = createContext<TokenValue>({token: "", setter: ()=>{}, allTheBeers: {error: false, beersList: [], errorMessage: ""}, selectedBeer: 0, favourites: []});
import { ReactNode } from "react";

export interface NavigatorIF {
  text: string;
  path: string;
}

export interface CInputIF {
  type: string;
  name: string;
  placeholder: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface CredentialsIF {
  login: string;
  password: string;
}

export interface CredentialsErrorIF {
  error: boolean;
  message: string;
}

export interface TokenProviderIF {
  children: ReactNode
}

export interface DisplayItemsIF {
  type: string
}

interface BeerRating {
  average: number,
  reviews: number
}

export interface BeerIF {
  price: string,
  name: string,
  rating: BeerRating,
  image: string,
  id: number
}

export interface BeerErrorHandlingIF {
  error: boolean,
  beersList: BeerIF[],
  errorMessage: any
}

export interface FavouritesIF {
  cat: string,
  id: number
}

export interface CCardIF {
  beer: BeerIF,
  cat: string
}
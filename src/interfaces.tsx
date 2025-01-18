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

interface WineRating {
  average: string,
  reviews: string
}

export interface WineIF {
  winery: string,
  wine: string,
  rating: WineRating,
  location: string,
  image: string,
  id: number
}

export interface WineErrorHandlingIF {
  error: boolean,
  winesList: WineIF[],
  errorMessage: any
}

export interface FavouritesIF {
  cat: string,
  id: number
}

export interface CCardIF {
  wine: WineIF,
  cat: string
}

export interface ReviewsIF {
  rating: WineRating,
}
import { useContext } from "react";
import DisplayBeers from "../../../pages/DisplayBeers/DisplayBeers";
import Login from "../../../pages/Login/Login";
import MainPage from "../../../pages/MainPage/MainPage";
import { UserToken } from "../../../services/contexts";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import DisplaySingleBeer from "../DisplaySingleBeer/DisplaySingleBeer";
import Favourites from "../../../pages/Favourites/Favourites";

const Body = () => {
  let token = useContext(UserToken);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/beers" element={<DisplayBeers />} />
      {token?.token !== "" ? (
        <Route path="/favourites" element={<Favourites />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/details" element={<DisplaySingleBeer/>}/>
    </Routes>
  );
};

export default Body;

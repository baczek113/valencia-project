import { useContext } from "react";
import DisplayWines from "../../../pages/DisplayWines/DisplayWines";
import Login from "../../../pages/Login/Login";
import MainPage from "../../../pages/MainPage/MainPage";
import { UserToken } from "../../../services/contexts";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import DisplaySingleWine from "../DisplaySingleWine/DisplaySingleWine";
import Favourites from "../../../pages/Favourites/Favourites";

const Body = () => {
  let token = useContext(UserToken);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/wines" element={<DisplayWines />} />
      {token?.token !== "" ? (
        <Route path="/favourites" element={<Favourites />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/details" element={<DisplaySingleWine/>}/>
    </Routes>
  );
};

export default Body;

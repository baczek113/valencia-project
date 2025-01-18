import { useState } from "react";
import DisplayItems from "../../components/common/DisplayItems/DisplayItems";
import "./DisplayBeers.css";

const DisplayBeers = () => {
  const [beerType, setBeerType] = useState<string>("reds");

  return (
    <div className="beers">
      <div className="select-type">
        <div
          className={beerType === "reds" ? "selected" : ""}
          onClick={() => {
            setBeerType("reds");
          }}
        >
          REDS
        </div>
        <div
          className={beerType === "whites" ? "selected" : ""}
          onClick={() => {
            setBeerType("whites");
          }}
        >
          WHITES
        </div>
        <div
          className={beerType === "sparkling" ? "selected" : ""}
          onClick={() => {
            setBeerType("sparkling");
          }}
        >
          SPARKLING
        </div>
        <div
          className={beerType === "rose" ? "selected" : ""}
          onClick={() => {
            setBeerType("rose");
          }}
        >
          ROSE
        </div>
        <div
          className={beerType === "dessert" ? "selected" : ""}
          onClick={() => {
            setBeerType("dessert");
          }}
        >
          DESSERT
        </div>
        <div
          className={beerType === "port" ? "selected" : ""}
          onClick={() => {
            setBeerType("port");
          }}
        >
          PORT
        </div>
      </div>
      <DisplayItems type={beerType} />
    </div>
  );
};

export default DisplayBeers;

import { useState } from "react";
import DisplayItems from "../../components/common/DisplayItems/DisplayItems";
import "./DisplayBeers.css";

const DisplayBeers = () => {
  const [beerType, setBeerType] = useState<string>("ale");

  return (
    <div className="beers">
      <div className="select-type">
        <div
          className={beerType === "ale" ? "selected" : ""}
          onClick={() => {
            setBeerType("ale");
          }}
        >
          ALE
        </div>
        <div
          className={beerType === "stouts" ? "selected" : ""}
          onClick={() => {
            setBeerType("stouts");
          }}
        >
          STOUTS
        </div>
      </div>
      <DisplayItems type={beerType} />
    </div>
  );
};

export default DisplayBeers;

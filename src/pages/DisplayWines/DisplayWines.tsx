import { useState } from "react";
import DisplayItems from "../../components/common/DisplayItems/DisplayItems";
import "./DisplayWines.css";

const DisplayWines = () => {
  const [wineType, setWineType] = useState<string>("reds");

  return (
    <div className="wines">
      <div className="select-type">
        <div
          className={wineType === "reds" ? "selected" : ""}
          onClick={() => {
            setWineType("reds");
          }}
        >
          REDS
        </div>
        <div
          className={wineType === "whites" ? "selected" : ""}
          onClick={() => {
            setWineType("whites");
          }}
        >
          WHITES
        </div>
        <div
          className={wineType === "sparkling" ? "selected" : ""}
          onClick={() => {
            setWineType("sparkling");
          }}
        >
          SPARKLING
        </div>
        <div
          className={wineType === "rose" ? "selected" : ""}
          onClick={() => {
            setWineType("rose");
          }}
        >
          ROSE
        </div>
        <div
          className={wineType === "dessert" ? "selected" : ""}
          onClick={() => {
            setWineType("dessert");
          }}
        >
          DESSERT
        </div>
        <div
          className={wineType === "port" ? "selected" : ""}
          onClick={() => {
            setWineType("port");
          }}
        >
          PORT
        </div>
      </div>
      <DisplayItems type={wineType} />
    </div>
  );
};

export default DisplayWines;

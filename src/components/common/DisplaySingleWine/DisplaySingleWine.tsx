import './DisplaySingleWine.css'
import { UserToken } from '../../../services/contexts'
import { useContext } from 'react';
import { WineIF } from '../../../interfaces';
import Reviews from '../Reviews/Reviews';

const DisplaySingleWine = () => {

  const wineData = useContext(UserToken);

  const getWineData = () : any => {

    let response : any;
    wineData.allTheWines.winesList.forEach((singleWineIteration : WineIF)=>{
        if(singleWineIteration.id === wineData.selectedWine)
        {
            response = singleWineIteration;
        }
    })
    return response;
  }

  const selectedWineData = getWineData();

  return (
    <div className="single-wine">
      <div className="left-panel">
        <div className="wine-name">{selectedWineData.wine}</div>
        <img className="wine-image" src={selectedWineData.image}/>
      </div>
      <div className="right-panel">
        <Reviews rating={selectedWineData.rating}/>
      </div>
    </div>
  )
}

export default DisplaySingleWine

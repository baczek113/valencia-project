import './DisplaySingleBeer.css'
import { UserToken } from '../../../services/contexts'
import { useContext } from 'react';
import { BeerIF } from '../../../interfaces';
import Reviews from '../Reviews/Reviews';

const DisplaySingleBeer = () => {

  const beerData = useContext(UserToken);

  const getBeerData = () : any => {

    let response : any;
    beerData.allTheBeers.beersList.forEach((singleBeerIteration : BeerIF)=>{
        if(singleBeerIteration.id === beerData.selectedBeer)
        {
            response = singleBeerIteration;
        }
    })
    return response;
  }

  const selectedBeerData = getBeerData();

  return (
    <div className="single-beer">
      <div className="left-panel">
        <div className="beer-name">{selectedBeerData.wine}</div>
        <img className="beer-image" src={selectedBeerData.image}/>
      </div>
      <div className="right-panel">
        <Reviews rating={selectedBeerData.rating}/>
      </div>
    </div>
  )
}

export default DisplaySingleBeer

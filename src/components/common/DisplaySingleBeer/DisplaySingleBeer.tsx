import './DisplaySingleBeer.css'
import { UserToken } from '../../../services/contexts'
import { useContext } from 'react';
import { BeerIF } from '../../../interfaces';

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

  console.log(selectedBeerData);


  return (
    <div className="single-beer">
      <div className="left-panel">
        <div className="beer-name">{selectedBeerData.name}</div>
        <img className="beer-image" src={selectedBeerData.image}/>
      </div>
      <div className="right-panel">
        <div className="beer-price">{selectedBeerData.price}</div>
        <div className="number-of-reviews">{selectedBeerData.rating.reviews} reviews</div>
        <div className="avg-score">{selectedBeerData.rating.average.toFixed(2)}</div>
      </div>
    </div>

  )
}

export default DisplaySingleBeer

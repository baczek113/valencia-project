import './Header.css'
import Navigator from '../Navigator/Navigator'
import { UserToken } from '../../../services/contexts'
import { useContext } from 'react';

const Header = () => {

  const token = useContext(UserToken);

  return (
   <div className="header">
      <Navigator text="Home" path="/"/>
      <Navigator text="Beers" path="/beers"/>
      {
        token.token === ""?
        <Navigator text="Login" path="/login"/>
        :
        <Navigator text="Favourites" path="/favourites"/>
      }
   </div>
  )
}

export default Header

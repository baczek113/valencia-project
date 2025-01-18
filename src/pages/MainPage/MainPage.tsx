import { useNavigate } from 'react-router-dom';
import './MainPage.css'

const MainPage = () => {

  const navigate = useNavigate();

  return (
    <div className="main-page"> 
        <div className="main-page--left">
          <h1>We love wine!</h1>
          <img src='https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png'></img>
        </div>
        <div className="main-page--right">
          <p>Whether you're a seasoned sommelier or just beginning to explore the world of wine, this space is for you. Here, we celebrate the art, history, and passion behind every bottle. Discover fascinating stories about vineyards, winemaking techniques, and the perfect pairings for your favorite meals. Share your experiences, expand your knowledge, and connect with a community that appreciates wine as more than just a drink—it's a journey. Cheers to discovering the beauty of wine together!</p>
          <button onClick = {() => {navigate("/wines")}}>Learn more</button>
        </div>
    </div>
  )
}

export default MainPage

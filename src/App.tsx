import './App.css'
import Body from './components/common/Body/Body'
import Footer from './components/common/Footer/Footer'
import Header from './components/common/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import { TokenProvider } from './services/TokenProvider';

function App() {

  return (
   <div className="main">
    <BrowserRouter>
      <TokenProvider>      
        <Header/>
        <Body/>
        <Footer/>
      </TokenProvider>
    </BrowserRouter>
   </div>
  )
}

export default App

import { useNavigate } from 'react-router-dom'
import './Navigator.css'
import { NavigatorIF } from '../../../interfaces'

const Navigator: React.FC<NavigatorIF> = ({ text, path }) => {

  const navigate = useNavigate();

  return (
   <button className="navigator-btn" onClick={()=>{navigate(path)}}>
      {text}
   </button>
  )
}

export default Navigator

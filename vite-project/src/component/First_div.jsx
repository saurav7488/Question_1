import bell from '../assets/Iconinteractions.png'
import '../Style/First_div.css'
const First_div = () => {
  return (
    <div>
    <div className='first-div-container' >
         <button className='btn-profile' >Complete Profile</button>
         <img className='img-bell' src={bell} alt="./bell-img" /> 
    </div>
    </div>
  )
}

export default First_div

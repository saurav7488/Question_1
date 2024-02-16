import '../Style/Leftbar.css'
import logo from '../assets/Logo_Back 1.png'
const Leftbar = () => {
  return (
    <div className='outer-container' >
        <div className='inner-container' >
              <img  className='logo-img' src={logo} alt="./logo" />
        </div>
        <div className='cart-container' >cart</div>
        <div className='market-container'>Market</div>
        <div className='settings-container'>Settings</div>
        <div className='logout-container'>Logout</div>
    </div>
  )
}

export default Leftbar

import { useState } from 'react'
import '../Style/Content_Area.css'
import { useEffect } from 'react'
import arrow from '../assets/arrow_forward_ios.png'
import location from '../assets/Icon.png'
import tagpig from '../assets/TagPip.png'
import tagpig1 from '../assets/TagPip (1).png'
import tagpig2 from '../assets/TagPip (2).png'
import tagpig3 from '../assets/TagPip (3).png'
import polygon from '../assets/Frame 85.png'
import Sliding_Area from './Sliding_Area'

// import LandArea from './LandArea'
const Content_Area = (id) => {
  const [area, setArea] = useState([])
  // console.log(id)
  const Id = id.id
  useEffect(() => {
    if (Id) {
      fetch(`http://localhost:3000/available_land?id=${Id}`)
        .then(res => res.json())
        .then((data) => setArea(data))
    }
  }, [Id])
  console.log(area)
  return (
    <div className='outer-contact-caontainer'>
      <div>
        <div className='contentjMarket' >
          <p className='arrowjmarket'>jMarket <img className='imgarrow' src={arrow} /> Category 1 
          <img className='imgarrow' src={arrow} />
            Theme park site <img className='imgarrow' src={arrow} /></p>
        </div>
        <div className='contact-area-image'>
          <img className='contact-area-image' src={area[0]?.image_url} alt="" />
        </div>
      </div>

      <div className='conten-park-name-left-box' >
        <div className='header-outer-content-area' >
          <h1 className='header-name-content-area' >{area[0]?.name}</h1>
          <div className='header-left-addredd-content-area'>
            <p className='div-header-location-address'><img
              className='img-location-content' src={location} alt="/location" />Address of the site</p>

            <div className='down-address-header-content-area' >
              <img src={tagpig} alt="" />
              <img src={tagpig1} alt="" />
              <img src={tagpig2} alt="" />
              <img src={tagpig3} alt="" />
            </div>
          </div>

          <div className='content-area-polygon' >
            <img src={polygon} alt="" />
          </div>

          <div className='left-div-acres-area'>
            <div>
              <h3>{area[0]?.size_acres} Acres</h3>
              <p className='para-below-area' >Area</p>
            </div>
            <div>
              <h3>{area[0]?.price} Acres</h3>
              <p className='para-below-area' >Starting price</p>
            </div>
            <div>
              <h3>{area[0]?.Remaining_Days} Acres</h3>
              <p className='para-below-area' >Remaining Days</p>
            </div>
            <div>
              <h3>{area[0]?.Next_Check} Acres</h3>
              <p className='para-below-area' >Next check</p>
            </div>
          </div>

        </div>
          
          <div className='right-bottom-complete-site' >
                <div>
                     <button className='bottom-right-button'>Complete</button>
                     <div className='bottom-right-site-visit'>Site visit</div>
                </div>
                <div>
                     <div className='bottom-rupees-border-line' >
                         <p className='costoftheland' >Rs {area[0]?.cost}</p>
                         <p className='para-cost-right' >Rs 65,00,000</p>
                     </div>
                     <div className='status-bar'><div className='status-bar-inner'></div></div>

                </div>
          </div>

      </div>
         <Sliding_Area/>
    </div>

  )
}

export default Content_Area

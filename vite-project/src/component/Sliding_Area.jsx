import '../Style/Sliding_Area.css'
import flight from '../assets/flight.png'
import highway from '../assets/add_road.png'
import map from '../assets/Why invest_.png'
import BottomComplet from './BottomComplet'
const Sliding_Area = () => {
    return (
        <div className='slidingareaouter'>
            {/* overview */}
            <div className='slidingoverview'>
                <div className='overviewcardt' >
                    <div className='overviewcontent' >Overview</div>
                    <p className='overviewpaara' >Our AI feature simplifies your life by automating routine
                        tasks. Spend more time on the things you love!Our AI feature simplifies
                        your life by automating routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating routine tasks. Spend
                        more time on the things you love.</p>
                </div>

                <div className='overviewcardt' >
                    <div className='overviewcontent' >Why ?</div>
                    <p className='overviewpaara' >Our AI feature simplifies your life by automating routine
                        tasks. Spend more time on the things you love!Our AI feature simplifies
                        your life by automating routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating routine tasks. Spend
                        more time on the things you love.</p>
                </div>

                <div className='overviewcardt' >
                    <div className='overviewcontent' >What ?</div>
                    <p className='overviewpaara' >Our AI feature simplifies your life by automating routine
                        tasks. Spend more time on the things you love!Our AI feature simplifies
                        your life by automating routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating routine tasks. Spend
                        more time on the things you love.</p>
                </div>


                <div className='overviewcardt' >
                    <div className='Landmarkcontent'>Landmarks</div>


                    <div className='outercontainerairport'>
                        <div className='containerairport' >
                               <div className='airport-name-content'>
                                    <img className='img-flight' src={flight} alt="/flight" />Airport</div>
                                <div>
                                    <div className='kmcontainer' >25 Km</div>
                                    <p className='airportpara' >Green </p>
                                </div>   
                        </div>

                        <div className='containerairport' >
                               <div className='airport-name-content'>
                                    <img className='img-flight' src={flight} alt="/flight" />Airport</div>
                                <div>
                                    <div className='kmcontainer' >100 Km</div>
                                    <p className='airportpara' >Terminal</p>
                                </div>   
                        </div>

                        <div className='containerairport' >
                               <div className='airport-name-content'>
                                    <img className='img-flight' src={highway} alt="/flight" />Highway</div>
                                <div>
                                    <div className='kmcontainer' >100 Km</div>
                                    <p className='airportpara' >Highway</p>
                                </div>   
                        </div>
                    </div>
                </div>
                <div className='overviewcardt' >
                         <div className='Landmarkcontentmap'>Map</div>
                         <div>
                             <img className='mapdiv' src={map} alt="" />
                         </div>
                         <div className='scheduledcall' >
                                  Schedule a call
                            </div>
                </div>  
            </div>
            {/* complete profile */}
            <div className='completesliding' >
                    <BottomComplet/>
            </div>
        </div>
    )
}

export default Sliding_Area

import { useState } from 'react'
import '../Style/Second_div.css'
import Content_Area from './Content_Area'
const Second_div = () => {
    const [value,setValue] = useState(1)
    // console.log(value)
    return (
        <div>
            <div className='second-div-outer' >
                <h1 className='second-div-name' >Choose your new site</h1>
                <div className='bundlebutttom' >
                     <button  className='btclick' onClick={()=>setValue(1)}>1</button>
                     <button className='btclick' onClick={()=>setValue(2)}>2</button>
                     <button className='btclick' onClick={()=>setValue(3)}>3</button>
                </div>
            </div>
            <Content_Area id={value}/>
        </div>
    )
}

export default Second_div

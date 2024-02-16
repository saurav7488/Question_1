import { useState } from 'react'
import '../Style/BottomComplete.css'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
const BottomComplet = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [completionDateTime, setCompletionDateTime] = useState('');
    const renderActionButton = () => {
        if (isChecked) {
            return <button className='btn downloadsection' onClick={handleDownloadReceipt}>Download</button>;
        } else {
            return <button className='btn' onClick={handleCheckedbox}>Complete</button>;
        }
    };

    const handleDownloadReceipt = () => {
        // Implement logic to download receipt
        alert('Downloading receipt...');
    };
    //  console.log(isChecked) 
    const handleCheckedbox = () => {
        setIsChecked(!isChecked);
    if (!isChecked) {
        const now = new Date();
        const formattedTime = `${now.toLocaleDateString()}`;
        setCompletionDateTime(formattedTime);
      } else {
        setCompletionDateTime('');
      }
    }

    return (
        <div className="completeScroll" >
            <div className="primary-scroll" >
                <div className='checkboxlabel' >
                    <label className='labelchecksj' >
                        <input type="checkbox"
                            checked={isChecked} onChange={handleCheckedbox} />
                    </label>
                    <h3 className='completeprofile' >Complete Profile</h3>
                    </div>  
                    <div  >  {/*className='changeusingchecked'} */}
                        {
                            isChecked && (
                                <>   
                                     <p className='paragoodjob' >Good Job!</p>
                                     <h3 className='bottomcomplete'>Complete</h3>
                                     <p className='completionTime' >{completionDateTime}</p>
                                </>
                            )
                        }
                        <div className='renderedbutton' >{renderActionButton()}</div>
                    </div>
            </div>
            
            <div className="primary-scroll" >
                 <Step1/>
            </div>


            <div className="primary-scroll" ><Step2/></div>
            <div className="primary-scroll" ><Step3/></div>
            <div className="primary-scroll" ><Step4/></div>
            <div className="primary-scroll" ><Step5/></div>
        </div>
    )
}

export default BottomComplet




// function App() {
//   const [isChecked, setIsChecked] = useState(false);
//   const [completionTime, setCompletionTime] = useState('');

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     if (!isChecked) {
//       const now = new Date();
//       const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
//       setCompletionTime(formattedTime);
//     } else {
//       setCompletionTime('');
//     }
//   };

//   return (
//     <div className="App">
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//         Task Completed
//       </label>
//       <div>
//         {isChecked && (
//           <div>
//             <p>Task completed at: {completionTime}</p>
//             {/* Other UI elements to show when the task is completed */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

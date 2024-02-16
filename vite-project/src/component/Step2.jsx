import { useState } from "react";

const Step2 = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [completionDateTime, setCompletionDateTime] = useState('');
    const renderActionButton = () => {
        if (isChecked) {
            return <button className='btn downloadsection' onClick={handleDownloadReceipt}>Download</button>;
        } else {
            return <button className='btn' onClick={handleCheckedbox}>Pay</button>;
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
    <div>
        <div className="primary-scroll" >
                <div className='checkboxlabel' >
                    <label className='labelchecksj' >
                        <input type="checkbox"
                            checked={isChecked} onChange={handleCheckedbox} />
                    </label>
                    <h3 className='completeprofile' >Step 2</h3>
                    </div>  
                    <div  >  {/*className='changeusingchecked'} */}
                        {
                            isChecked && (
                                <>   
                                     <h3 className='bottomcomplete'>Complete</h3>
                                     <p className='completionTime' >{completionDateTime}</p>
                                </>
                            )
                        }
                        <div className='renderedbutton' >{renderActionButton()}</div>
                    </div>
            </div>
    </div>
  )
}

export default Step2

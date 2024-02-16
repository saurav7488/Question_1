import Leftbar from "./component/Leftbar"
import Topbar from "./component/Topbar"
import './Style/App.css'
const App = () => {
  return (
    <div>
        {/* side bar and top bar*/}
        <div className="App-outer-container" >
          <Leftbar />
          <Topbar />
        </div>
    </div>
  )
}

export default App

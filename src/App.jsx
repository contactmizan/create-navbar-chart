
import './App.css'
import LineChart from './component/LineChart/LineChart'
import Navbar from './component/NavBar/Navbar'
import PriceOptions from './component/PriceOptions/PriceOptions'
// import DaisuNav from './component/DaisyNav/DaisuNav'

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisuNav></DaisuNav> */}
      <h1 className='text-7xl bg-orange-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App

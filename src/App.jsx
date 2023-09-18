


import { BarChart } from 'recharts'
import './App.css'
import Linechart from './components/Linchart/Linechart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/Price options/PriceOptions'
import Barcode from './components/Barcode/Barcode'


function App() {


  return (
    <>
      <Navbar></Navbar>
     <PriceOptions></PriceOptions>
    <div className='flex justify-between mt-6'>
    <Linechart></Linechart>
    <Barcode></Barcode>
    </div>
    
      
    </>
  )
}

export default App

/// <reference types="vite-plugin-svgr/client" />
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { CurrencyRupeeIcon, PlusIcon } from '@heroicons/react/20/solid'
import { ReactComponent as BookTimeLogo } from './assets/Book Icon.svg'
import { ReactComponent as ClockIcon } from './assets/Clock Icon.svg';
import { ReactComponent as LiveIcon } from './assets/Live Icon.svg';
import { ReactComponent as ScholarShipIcon } from './assets/Scholar Icon.svg';
import { ReactComponent as ADSLogo } from './assets/ADS Icon.svg';
import LeftSide from './components/LeftSide'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[url(./assets/background.jpg)] h-screen'>
      <Navbar />
      <div className='w-96'>
        <p className='text-3xl font-semibold w-96'>
          Access curated courses worth <CurrencyRupeeIcon width={42} height={27} />
          <span className='line-through'>18&#44;500 </span> at just about
          <span > <CurrencyRupeeIcon width={42} height={27} /> <span className='text-primary1'>99</span> </span> per year &#33;
        </p>
      </div>
      <LeftSide />
    </div>
  )
}

export default App

/// <reference types="vite-plugin-svgr/client" />
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { CurrencyRupeeIcon, } from '@heroicons/react/20/solid'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

function App() {
  return (
    <>
      <Navbar />
      <div className='bg-[url(./assets/background.jpg)] bg-cover h-screen flex flex-row justify-between items-start pl-14 pr-14'>
        <div className='flex flex-col justify-between w-1/2'>
          <div>
            <p className='text-4xl font-semibold w-full inline'>
              Access curated courses worth <CurrencyRupeeIcon className='inline-block' width={42} height={27} />
              <span className='line-through inline'>18&#44;500 </span> at just about
              <span > <CurrencyRupeeIcon width={42} height={27} className='inline-block' /> <span className='text-primary1 inline'>99</span> </span> per year &#33;
            </p>
          </div>
          <LeftSide />
        </div>
        <RightSide />
      </div>
    </>
  )
}

export default App

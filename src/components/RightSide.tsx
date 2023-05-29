import React from 'react'
import SelectPlan from './SelectPlan'
import { ReactComponent as ClockIcon } from "../assets/IconClockWarning.svg";
import { ReactComponent as Razorpay } from "../assets/Razorpay Icon.svg";
import Strip from './Strip';

export default function RightSide() {
    return (
        <div className='bg-white flex flex-col gap-7 items-center px-8 py-6  mt-16 mb-16 '>
            <div className='flex flex-row justify-between items-center w-2/4'>
                <div className='w-20 flex flex-col justify-center items-center'>
                    <div className='bg-primary1 rounded-full text-center text-2xl w-10 h-10'>1</div>
                    <p className='text-black font-medium'>Sign Up</p>
                </div>
                <div className='w-20 flex flex-col justify-center items-center'>
                    <div className='bg-primary1 rounded-full text-center text-2xl w-10 h-10'>2</div>
                    <p className='text-black font-medium'>Subscribe</p>
                </div>
            </div>
            <p className='font-semibold text-3xl text-black'>Select your subcription plan</p>
            <form action="">
                <div className='flex flex-col gap-4'>
                    <SelectPlan name="plan" disabled={true} id="plan1" totalPrice={99} months={12} expired={true} offerString='Offer expired' />
                    <SelectPlan name="plan" id="plan2" totalPrice={179} months={12} recommended={true} offerString='Recommended' />
                    <SelectPlan name="plan" id="plan3" totalPrice={99} months={12} />
                    <SelectPlan name="plan" id="plan4" totalPrice={99} months={3} />
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <div className='text-black text-xl flex flex-row justify-between items-center'>
                        <p>Subcription</p>
                        <span className='block'>&#x20b9;18&#44;500</span>
                    </div>
                    <div className='bg-red-300 p-4 border-2 border-red-600 rounded'>
                        <div className='text-red-600  flex flex-row justify-between items-center'>
                            <p className='font-medium'>Limited Time Offer</p>
                            <span className='block'>&#x20b9;18&#44;500</span>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <ClockIcon width={24} height={24} className='stroke-red-500 fill-red-500' />
                            <p className='text-red-500'>Offer valid till 25th March 2023</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p className='text-black'><span className='font-semibold'>Total</span> (Incl. all of 18% GST) </p>
                        <p className='text-black font-bold'>&#x20b9; 149</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5'>
                    <button type="button" className='text-danger2 w-[242.5px] h-[56px] border-2 border-danger2 rounded'>
                        CANCEL
                    </button>
                    <button type="button" className='text-white bg-success w-[242.5px] h-[56px] border-2 rounded'>
                        PROCEED TO BUY
                    </button>
                </div>
                <Razorpay className='mt-4' width={120} height={43} />
                <Strip name='Recommended' color='#47BA68'/>
            </form>
        </div>
    )
}

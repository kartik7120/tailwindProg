import React from 'react';
import { CurrencyRupeeIcon, PlusIcon } from '@heroicons/react/20/solid'
import { ReactComponent as BookTimeLogo } from '../assets/Book Icon.svg'
import { ReactComponent as ClockIcon } from '../assets/Clock Icon.svg';
import { ReactComponent as LiveIcon } from '../assets/Live Icon.svg';
import { ReactComponent as ScholarShipIcon } from '../assets/Scholar Icon.svg';
import { ReactComponent as ADSLogo } from '../assets/ADS Icon.svg';

export default function LeftSide() {
    return (
        <div className='gap-6 flex flex-col'>
            <div className='flex flex-row justify-around items-center'>
                <BookTimeLogo width={58} height={58} />
                <p className='text-xl font-semibold w-1/2'>
                    <span className='text-primary1 '>100<PlusIcon width={20} height={20} className='inline' /> </span>Job relevent sources
                </p>
            </div>
            <div className='flex flex-row justify-around items-center'>
                <ClockIcon width={58} height={58} />
                <p className='text-xl font-semibold w-1/2'>
                    <span className='text-primary1 '>20&#44;000<PlusIcon width={20} height={20} className='inline' /> </span>Hours of content
                </p>
            </div>
            <div className='flex flex-row justify-around items-center'>
                <LiveIcon width={58} height={58} />
                <p className='text-xl font-semibold w-1/2'>
                    <span className='text-primary1 '>Exclusive</span> Webinar access
                </p>
            </div>
            <div className='flex flex-row justify-around items-center'>
                <ScholarShipIcon width={58} height={58} />
                <p className='text-xl font-semibold w-1/2'>
                    Scholarship worth <CurrencyRupeeIcon width={27} height={27} className='inline' /> <span className='text-primary1 '> 94&#44;500</span>
                </p>
            </div>
            <div className='flex flex-row justify-around items-center'>
                <ADSLogo width={58} height={58} />
                <p className='text-xl font-semibold w-1/2'>
                    <span className='text-primary1'>Ad Free</span> learning experience
                </p>
            </div>
        </div>
    )
}

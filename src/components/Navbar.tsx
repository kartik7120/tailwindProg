import React from 'react';
import { ReactComponent as CompanyLogo } from '../assets/companylogo.svg';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function Navbar() {
    return (
        <div className='flex flex-row items-center justify-between m-5 ml-10 mr-10 bg-white'>
            <div className='flex flex-row items-center justify-around w-1/3'>
                <CompanyLogo />
                <div className='flex-row justify-around flex items-center'>
                    <p className='text-black'>Courses</p>
                    <ChevronDownIcon width={32} height={17} color='rgb(0, 0, 0)' />
                </div>
                <div className='flex-row justify-around flex items-center'>
                    <p className='text-black'>Programs</p>
                    <ChevronDownIcon width={32} height={17} color='rgb(0, 0, 0)' />
                </div>
            </div>
            <div className='flex flex-row items-center justify-around w-1/3'>
                <MagnifyingGlassIcon width={32} height={32} color='rgb(0, 0, 0)' />
                <button type="button" className="btn btn-primary text-black">Log In</button>
                <button type="button" className="bg-primary1 rounded-full text-white pl-10 pr-10 pt-2 pb-2">
                    JOIN NOW
                </button>
            </div>
        </div>
    )
}

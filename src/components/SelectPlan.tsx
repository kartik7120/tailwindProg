import React from 'react'

interface Props {
    totalPrice: number,
    months: number,
    offerString?: string | undefined,
    id: string,
    name: string
}

export default function SelectPlan(props: Props) {
    return (
        <div className={`min-w-full h-[65px] border-2 border-[${props.offerString === "Recommended" ? "#47BA68" : props.offerString === "Offer expired" ? "#F77171" : "#BEBEBE"}] rounded flex flex-row items-center gap-5 p-4`}>
            <input type="radio" name={props.name} id={props.id} className='form-radio' />
            <label className='text-black' htmlFor={props.id}>
                <div className='flex flex-row  items-center'>
                    <span>{props.months} Months Subcription</span>
                </div>
            </label>
            <div className='flex flex-col justify-center items-end text-black justify-self-end'>
                <div>
                    <span className='text-xs'>Total</span>
                    <span className='font-semibold ml-1 text-lg'>&#x20b9; {props.totalPrice}</span>
                </div>
                <div className='text-xs'>
                    <span className='font-semibold'>
                        &#x20b9; {(props.totalPrice / props.months).toPrecision(3)} </span>
                    <span className='text-gray-400 text-sm'>/mo</span>
                </div>
            </div>
        </div>
    )
}

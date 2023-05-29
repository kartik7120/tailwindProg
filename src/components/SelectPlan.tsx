import React from 'react'

interface Props {
    totalPrice: number,
    months: number,
    offerString?: string | undefined,
    id: string,
    name: string,
    disabled?: boolean,
    recommended?: boolean,
    expired?: boolean,
    setPlan: React.Dispatch<React.SetStateAction<{
        id: string;
        totalPrice: number;
        months: number;
    }>>
}

export default function SelectPlan(props: Props) {

    const styles = "min-w-full h-[65px] border-2 rounded flex flex-row items-center gap-5 p-4 relative" + (props.recommended ? " border-success bg-green-100" : "") + (props.disabled ? " opacity-50 cursor-not-allowed" : "") + (props.expired ? " border-danger2 " : "");
    return (
        <div aria-disabled className={styles}>
            {props.recommended && <div className={"bg-success font-semibold text-xs w-28 text-center rounded-sm absolute top-0 left-8"}>
                {props.offerString}
            </div>}
            {props.expired && <div className={"bg-danger2 font-semibold text-xs w-28 text-center rounded-sm absolute top-0 left-8"}>
                {props.offerString}
            </div>}
            <input type="radio" name={props.name} id={props.id} onClick={() => {
                props.setPlan({
                    id: props.id,
                    totalPrice: props.totalPrice,
                    months: props.months
                })
            }} className='form-radio' />
            <label className='text-black' htmlFor={props.id}>
                <div className='flex flex-row flex-1 items-center'>
                    <span>{props.months} Months Subcription</span>
                </div>
            </label>
            <div className='flex flex-col justify-center items-end text-black ml-auto'>
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

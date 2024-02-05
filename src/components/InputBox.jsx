import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    amountDisabled =false,
    currencyDisabled =false,
    selectedCurrency = "usd",
    className = ''
}) {

  const id = useId()

  return (
    <div className={`bg-white text-sm flex rounded-lg p-3 ${className}`}>
        <div className='w-1-2'>
            <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
            type='number'
            id={id}
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange = {(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select
            className='cursor-pointer outline-none bg-gray-100 px-1 py-1 rounded-lg'
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}>
              {currencyOptions.map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox
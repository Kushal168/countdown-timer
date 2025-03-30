import React from 'react'

export default function ShowInputTimer({handleClick, handleStart}) {
  return (
    <div>
    <div className='countdown'> Countdown Timer</div>
    <div>
      <input className='input_field' type="number" name="hours" onChange = {(e)=>{handleStart(e)}} placeholder='HH'/>
      <input className='input_field' type="number" name="minutes" onChange = {(e)=>{handleStart(e)}} placeholder='MM'/>
      <input className='input_field' type="number" name="seconds" onChange = {(e)=>{handleStart(e)}} placeholder='SS'/>
    </div>
    <div>
      <button type='button' onClick={handleClick}> Start </button>
    </div>
  </div>
  )
}

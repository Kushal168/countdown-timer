import React from 'react'

export default function StartTimer(props) {
    let {hour, minute, second, isPaused, handlePause, handleResume, handleReset} = props;
  return (
    <div className='show-container'>
        <div className='timer-box'>
          <div className='inside-timer-div'>{ hour =="" ? "00" : hour <10 ? `0${hour}` : hour}</div>
          <div>:</div>
          <div className='inside-timer-div'>{ minute == "" ? "00" : minute <10 ? `0${minute}` : minute }</div>
          <div>:</div>
          <div className='inside-timer-div'>{ second == "00" ? "00" : second <10 ? `0${second}` : second }</div>

          </div>
        <div>
          { !isPaused && <button type='button' className='button-div'  onClick={handlePause}> Pause </button>}
          { isPaused && <button type='button' className='button-div'  onClick={handleResume}> Resume </button>}
          <button type='button' className='button-div' onClick={handleReset}> Restart </button>
        </div>
      </div>
  )
}

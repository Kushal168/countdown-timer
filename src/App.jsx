import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isStart, setIsStart] = useState(false)
  function handleClick(){
    setIsStart(true);
  }

  return (
    <>
      {!isStart && <div>
        <div>
          <input className='input_field' type="text" placeholder='HH'/>
          <input className='input_field' type="text" placeholder='MM'/>
          <input className='input_field' type="text" placeholder='SS'/>
        </div>
        <div>
          <button type='button' onClick={handleClick}> Start </button>
        </div>
      </div>
      }
      {isStart && <div>
        <div>
          <input className='input_field' type="text" placeholder='HH'/>
          <input className='input_field' type="text" placeholder='MM'/>
          <input className='input_field' type="text" placeholder='SS'/>
        </div>
        <div>
          <button type='button' onClick={handleClick}> Pause </button>
          <button type='button' onClick={handleClick}> Restart </button>
        </div>
      </div>
      }
    </>
  )
}

export default App

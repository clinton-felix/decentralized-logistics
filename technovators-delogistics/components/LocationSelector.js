import { useState } from 'react'


const style = {
    wrapper: 'pt-2',
    searchHeader: 'w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden',
    inputBoxes: 'flex flex-col mb-4 relative',
    inputBox: 'h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2',
    focusedInputBox: 'border-black',
    svgContainer: 'mx-1',
    input: 'my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full',
    verticalLine: 'w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem]',
}

const LocationSelector = () => {
    const [inFocus, setInFocus] = useState('from')
  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        {inFocus === 'from' ? 'Where is the package to be picked from?' : 'Where do you want it delivered to?'}
      </div>
      <div className={style.inputBoxes}>
        
      </div>
  </div>
  
  )
}

export default LocationSelector
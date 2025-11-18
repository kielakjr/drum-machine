import React from 'react'

const Display = ({display}) => {
  return (
    <div id="display" className='w-full bg-gray-500 text-white text-center py-4 mt-4 rounded-md text-xl font-medium select-none shadow-md'>
      {display}
    </div>
  )
}

export default Display

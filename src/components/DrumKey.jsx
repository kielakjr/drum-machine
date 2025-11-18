import React from 'react'

const DrumKey = ({ trigger, sound }) => {
  return (
    <div className="size-full aspect-square bg-gray-800 rounded-md flex items-center justify-center text-white text-2xl font-bold select-none cursor-pointer hover:bg-gray-700 active:bg-gray-600 shadow-md">
        {trigger}
    </div>
  )
}

export default DrumKey

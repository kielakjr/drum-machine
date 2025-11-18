import React, { useEffect } from 'react'
import { useRef } from 'react';

const DrumKey = ({ trigger, sound }) => {

	const audio = useRef();
	const source = `https://s3.amazonaws.com/freecodecamp/drums/${sound}.mp3`;

	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key.toUpperCase() === trigger) {
				playSound();
			}
		}

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		}
	}, [trigger]);

	const playSound = () => {
		audio.current.currentTime = 0;
		audio.current.play();
	}

  return (
    <div onClick={playSound} className="size-full aspect-square bg-gray-800 rounded-md flex items-center justify-center text-white text-2xl font-bold select-none cursor-pointer hover:bg-gray-700 active:bg-gray-600 shadow-md">
        {trigger}
        <audio ref={audio} id={trigger} src={source}></audio>
    </div>
  )
}

export default DrumKey

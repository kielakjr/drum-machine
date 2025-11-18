import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const DrumKey = ({ trigger, sound, description, setDisplay }) => {

	const [effects, setEffects] = useState([]);

	const audio = useRef();
	const source = `https://s3.amazonaws.com/freecodecamp/drums/${sound}.mp3`;

	const triggerAnimation = () => {
		const id = crypto.randomUUID();

		setEffects(prev => [...prev, id]);

			setTimeout(() => {
				setEffects(prev => prev.filter(e => e !== id));
			}, 300);
	};

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
		setDisplay(description);
		triggerAnimation();
		audio.current.currentTime = 0;
		audio.current.play();
	}

  return (
    <div id={sound} onClick={playSound} className="drum-pad relative size-full aspect-square bg-gray-800 rounded-md flex items-center justify-center text-white text-2xl font-bold select-none cursor-pointer hover:bg-gray-700 active:bg-gray-600 shadow-md">
        {trigger}
        <audio className="clip" ref={audio} id={trigger} src={source}></audio>
				{effects.map(id => (
					<span
						key={id}
						className="
							size-full aspect-square rounded-full
							animate-neonGlow z-10 absolute top-0 left-0
						"
					/>
				))}
    </div>
  )
}

export default DrumKey

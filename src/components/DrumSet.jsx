import React from 'react'
import DrumKey from './DrumKey';
import { DRUMKEYS } from '../data/drumkeys.js';

const DrumSet = ({ setDisplay }) => {

  return (
    <div className="grid grid-cols-3 gap-2">
        {DRUMKEYS.map(({key, sound, description}) => (
            <DrumKey key={key} trigger={key} sound={sound} description={description} setDisplay={setDisplay} />
        ))}
    </div>
  )
}

export default DrumSet

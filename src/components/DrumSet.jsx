import React from 'react'
import DrumKey from './DrumKey';
import { DRUMKEYS } from '../data/drumkeys.js';

const DrumSet = () => {

  return (
    <div className="grid grid-cols-3 gap-2">
        {DRUMKEYS.map(({key, sound}) => (
            <DrumKey key={key} trigger={key} sound={sound} />
        ))}
    </div>
  )
}

export default DrumSet

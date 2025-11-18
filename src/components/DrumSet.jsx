import React from 'react'
import DrumKey from './DrumKey';

const DRUMKEYS = [
  { key: 'Q', sound: 'kick' },
  { key: 'W', sound: 'snare' },
  { key: 'E', sound: 'hihat' },
  { key: 'A', sound: 'tom1' },
  { key: 'S', sound: 'tom2' },
  { key: 'D', sound: 'tom3' },
  { key: 'Z', sound: 'clap' },
  { key: 'X', sound: 'ride' },
  { key: 'C', sound: 'crash' },
];

const DrumSet = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
        {DRUMKEYS.map(({key, sound}) => (
            <DrumKey trigger={key} sound={sound} />
        ))}
    </div>
  )
}

export default DrumSet

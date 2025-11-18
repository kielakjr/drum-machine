import React from 'react'
import DrumSet from './DrumSet'
import Display from './Display'

const Machine = () => {

  const [display, setDisplay] = React.useState('');

  return (
    <div id="drum-machine" className='w-4/5 mx-auto mt-10'>
      <DrumSet setDisplay={setDisplay} />
      <Display display={display} />
    </div>
  )
}

export default Machine

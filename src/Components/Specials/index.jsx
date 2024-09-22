import React from 'react'
import SpecialsCard from './SpecialsCard'

const Specials = () => {
  return (
    <section className='container padded-v-xlarge'>
        <div className='padded-v-large flex justify-between'>
            <h2>This weeks Specials</h2>
            <button className='primary-button'>Online Menu</button>
        </div>
        <div className='row gap-large'>
            <SpecialsCard />
            <SpecialsCard />
            <SpecialsCard />
        </div>
    </section>
  )
}

export default Specials
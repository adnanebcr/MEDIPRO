import React from 'react'
import img1 from '../Assets/img1.jpg'
import '../App.css'

const About = () => {
    return (
        <section id='About'>
        <div>
            <img id='banniere' src={img1} alt='medipro'/>
        </div>
        <h1 className='text-center py-3'>Qui sommes nous </h1>
        </section>
    )
}

export default About

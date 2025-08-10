import React from 'react'
import MidnightPurple from '../bg-elements/MidnightPurple'
import SunsetFade from '../bg-elements/SunsetFade'
import OceanBreeze from '../bg-elements/OceanBreeze'
import BlobAnimate from '../bg-elements/BlobAnimate'
import RotatingGradientInput from '../elements/RotatingGradientInput'
import InputGradientBorder from '../elements/InputGradientBorder'

const Testing = () => {
  return (
    <>
    <div className='w-[400px] h-[400px]'>
      {/* <div className='relative min-h-screen flex justify-center items-center pt-14 px-16'>
        <div className='absolute top-50 left-10 w-72 h-72 bg-[#ff8d37] rounded-full mix-blend-screen opacity-40 filter blur-2xl animate-blob'></div>
        <div className='absolute top-50 left-55 w-72 h-72 bg-[#ff08ef] rounded-full mix-blend-screen opacity-30 filter blur-2xl animate-blob animation-delay-2000'></div>
        <div className='absolute top-58 left-32 w-72 h-72 bg-[#7300ff] rounded-full mix-blend-screen opacity-30 filter blur-2xl animate-blob animation-delay-4000'></div>
      </div> */}
      <BlobAnimate size="20rem" />
      </div>
      <div className='w-[400px] h-[400px]'>
        
      <RotatingGradientInput />
      <InputGradientBorder/>
      </div>
    </>
  )
}

export default Testing

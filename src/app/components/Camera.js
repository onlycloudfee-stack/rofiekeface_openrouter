"use client"
import React, { useRef, useState, useEffect, useMemo} from 'react'
import Webcam from 'react-webcam'

function Camera() {
    const webcamRef = useRef(null)
    const resultRef = useRef(null)
    const canvasRef = useRef(null)

    const [photoDataUrl, setPhotoDataUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const vidioConstraints= useMemo(
      () => ({
          facingMode: "user",
          width:{ideal: 1280},
          frameRate: { ideal: 30, max: 60},
      }), []
    )

    function capturePhoto() {
      const vidio = webcamRef.current?.vidio;
      const canvas = canvasRef.current;
    }
  return (
    <div> <div className='relative w-full rounded-2xl overflow-hidden bg-black'>
      <Webcam      
           ref={webcamRef}
           audio={false}
           vidioConstraints={vidioConstraints}
           className={'w-full aspect-[16/9]'}
           mirrored
           screenshotFormat='image/jpeg'
           screenshotQuality={0.9}
           />
      </div>
      
      
    </div>
    
    
    
  )
}

export default Camera
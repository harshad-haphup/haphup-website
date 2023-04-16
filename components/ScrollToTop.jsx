import { useEffect, useState } from 'react'
import arrowUp from '../public/assests/img/arrow-up.svg'
import Image from 'next/image'

// import { classNames } from '/utils'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="h-8 w-8 fixed bottom-4 sm:bottom-9 right-4 sm:right-14 z-40 shadow-2xl">
      {isVisible && 
        <div className='h-8 w-8 text-white bg-accent-color/70 rounded-lg pt-2 pb-2 px-2  cursor-pointer shadow-2xl shadow-indigo-700'  onClick={scrollToTop}>
            <Image src={arrowUp} alt='upArrow' priority={true} className='w-full h-full object-cover text-white' />
        </div>
        }
    </div>
  )
}
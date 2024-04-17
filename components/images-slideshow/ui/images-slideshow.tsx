'use client'

import { useEffect, useState } from 'react'

import burgerImg from '@/assets/burger.jpg'
import curryImg from '@/assets/curry.jpg'
import dumplingsImg from '@/assets/dumplings.jpg'
import macncheeseImg from '@/assets/macncheese.jpg'
import pizzaImg from '@/assets/pizza.jpg'
import schnitzelImg from '@/assets/schnitzel.jpg'
import tomatoSaladImg from '@/assets/tomato-salad.jpg'
import Image from 'next/image'

import s from '../style/images-slideshow.module.scss'

const images = [
  { alt: 'A delicious, juicy burger', image: burgerImg },
  { alt: 'A delicious, spicy curry', image: curryImg },
  { alt: 'Steamed dumplings', image: dumplingsImg },
  { alt: 'Mac and cheese', image: macncheeseImg },
  { alt: 'A delicious pizza', image: pizzaImg },
  { alt: 'A delicious schnitzel', image: schnitzelImg },
  { alt: 'A delicious tomato salad', image: tomatoSaladImg },
]

export const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={s.slideshow}>
      {images.map((image, index) => (
        <Image
          alt={image.alt}
          className={index === currentImageIndex ? s.active : ''}
          key={index}
          src={image.image}
        />
      ))}
    </div>
  )
}

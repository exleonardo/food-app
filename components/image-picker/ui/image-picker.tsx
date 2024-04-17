'use client'
import { ChangeEvent, useRef, useState } from 'react'

import Image from 'next/image'

import s from '../style/image-picker.module.scss'

type ImagePickerType = {
  label: string
  name: string
}
export const ImagePicker = ({ label, name }: ImagePickerType) => {
  const [pickedImage, setPickedImage] = useState<null | string>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const handlePicker = () => {
    if (imageInputRef) {
      imageInputRef.current?.click()
    }
  }
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      setPickedImage(null)

      return
    }
    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string)
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <div className={s.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={s.controls}>
        <div className={s.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && <Image alt={'The image selected by the user'} fill src={pickedImage} />}
        </div>
        <input
          accept={'image/png, image/jpeg'}
          className={s.input}
          id={name}
          name={name}
          onChange={handleImageChange}
          ref={imageInputRef}
          required
          type={'file'}
        />
        <button className={s.button} onClick={handlePicker} type={'button'}>
          Pick an image
        </button>
      </div>
    </div>
  )
}

'use client'
import { useFormState } from 'react-dom'

import { ImagePicker } from '@/components/image-picker'
import { MealsFormSubmit } from '@/components/meals'
import { shareMeal } from '@/lib/actions'

import s from './page.module.scss'

export default function ShareMealPage() {
  const [state, formAction] = useFormState<{ message: null | string }, FormData>(shareMeal, {
    message: null,
  })

  return (
    <>
      <header className={s.header}>
        <h1>
          Share your <span className={s.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={s.main}>
        <form action={formAction} className={s.form}>
          <div className={s.row}>
            <p>
              <label htmlFor={'name'}>Your name</label>
              <input id={'name'} name={'name'} required type={'text'} />
            </p>
            <p>
              <label htmlFor={'email'}>Your email</label>
              <input id={'email'} name={'email'} required type={'email'} />
            </p>
          </div>
          <p>
            <label htmlFor={'title'}>Title</label>
            <input id={'title'} name={'title'} required type={'text'} />
          </p>
          <p>
            <label htmlFor={'summary'}>Short Summary</label>
            <input id={'summary'} name={'summary'} required type={'text'} />
          </p>
          <p>
            <label htmlFor={'instructions'}>Instructions</label>
            <textarea id={'instructions'} name={'instructions'} required rows={10}></textarea>
          </p>
          <ImagePicker label={'Your image'} name={'image'} />
          {state.message && <p>{state.message}</p>}
          <p className={s.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  )
}

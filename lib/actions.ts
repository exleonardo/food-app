'use server'
import { saveMeal } from '@/lib/meals'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export type MealType = {
  creator: string
  creator_email: string
  image: File

  instructions: string
  slug: null | string
  summary: string
  title: string
}
export const shareMeal = async (
  _prevState: { message: null | string },
  formData: FormData
): Promise<{ message: string }> => {
  const meal: MealType = {
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    image: formData.get('image') as File,
    instructions: formData.get('instructions') as string,
    slug: null,
    summary: formData.get('summary') as string,
    title: formData.get('title') as string,
  }
  const isInvalidText = (text: string): boolean => {
    return !text || text.trim() === ''
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid Input',
    }
  }
  await saveMeal(meal)
  revalidatePath('/meals', 'layout')
  redirect('/meals')
}

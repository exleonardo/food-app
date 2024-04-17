'use server'

export const shareMeal = async (formData: FormData) => {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    image: formData.get('image'),
    instructions: formData.get('instructions'),
    summary: formData.get('summary'),
    title: formData.get('title'),
  }
}

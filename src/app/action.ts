'use server'

import fs from 'fs'
import { revalidatePath } from 'next/cache'

export async function register(formData: FormData) {
  'use server'
  fs.writeFileSync(
    './register.txt',
    JSON.stringify({
      email: formData.get('remail'),
      password: formData.get('rpassword'),
    }),
    'utf-8'
  )
}
export async function login(formData: FormData) {
  'use server'

  if (Math.ceil(Math.random() * 10) % 2 !== 0) {
    return {
      success: false,
      message: 'Invalid credentials',
    }
  }
  fs.writeFileSync(
    './login.txt',
    JSON.stringify({
      email: formData.get('lemail'),
      password: formData.get('lpassword'),
    }),
    'utf-8'
  )
  revalidatePath('/')
  return {
    success: true,
  }
}

'use client'

import React from 'react'

import { login, register } from './action'

function Page() {
  const [error, setError] = React.useState('')

  async function handleLogin(formData: FormData) {
    const { success, message } = await login(formData)
    setError(success ? 'Success' : message ?? '')
  }
  return (
    <>
      {error.length > 0 ? <p style={{ color: 'tomato' }}>{error}</p> : null}
      <form>
        <h1>Register </h1>
        <div>
          <label htmlFor="email" style={{ display: 'block' }}>
            Email
          </label>
          <input type="email" name="remail" required id="email" />
        </div>
        <div style={{ marginTop: '16px' }}>
          <label htmlFor="password" style={{ display: 'block' }}>
            Password
          </label>
          <input type="password" required name="rpassword" id="password" />
        </div>
        <button type="submit" formAction={register}>
          Register
        </button>
      </form>
      <form action={handleLogin}>
        <h2>Login </h2>
        <div>
          <label htmlFor="lemail" style={{ display: 'block' }}>
            Email
          </label>
          <input type="email" required name="lemail" id="lemail" />
        </div>
        <div style={{ marginTop: '16px' }}>
          <label htmlFor="lpassword" style={{ display: 'block' }}>
            Password
          </label>
          <input type="password" required name="lpassword" id="lpassword" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Page

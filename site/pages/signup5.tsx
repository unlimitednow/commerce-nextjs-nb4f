import * as React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  AuthProvider,
  useDescope,
  useSession,
  useUser,
} from '@descope/react-sdk'

const deliveryMethod = 'email'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const sdk = useDescope()

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const resp = await sdk.otp.signUpOrIn[deliveryMethod](email)

    if (!resp.ok) {
    } else {
      setOtpSent(true)
    }
  }

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtpCode(event.target.value)
  }

  const handleOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // prevent form submission

    const resp = await sdk.otp.verify.email(email, otpCode)

    if (!resp.ok) {
    } else {
      const webhookResp = await fetch(
        'https://hook.us1.make.com/tmgbmrvnikb737j82rabq6lyc54ygvqw',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      )

      // Handle the webhook response
      const webhookData = await webhookResp.json()
      console.log(webhookData)

      // Redirect to the link returned by the webhook
      if (webhookData.link) {
        window.location.href = webhookData.link
      }
    }
  }

  useEffect(() => {
    if (isAuthenticated && !isUserLoading) {
    } else {
    }
  }, [isAuthenticated, isUserLoading])
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const formData = {
      password,
      confirmPassword,
      rememberMe,
    }

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    console.log(data)
  }

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setConfirmPassword(event.target.value)
  }

  const handleRememberMeChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) }
  }) => {
    setRememberMe(event.target.checked)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      {!isAuthenticated ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Email:
            <input
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <div>
          <p>Hello {user.userId}!</p>
          <button onClick={() => sdk.logout()}>Logout</button>
        </div>
      )}
      {otpSent && (
        <form onSubmit={handleOtpSubmit}>
          <label>
            OTP Code:
            <input type="text" value={otpCode} onChange={handleOtpChange} />
          </label>
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  )
}

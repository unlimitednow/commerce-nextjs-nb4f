import * as React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  AuthProvider,
  useDescope,
  useSession,
  useUser,
} from '@descope/react-sdk'

const deliveryMethod = 'sms'

export default function SignUp() {
  const [phone, setPhone] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const sdk = useDescope()

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const resp = await sdk.otp.signUpOrIn[deliveryMethod](phone)

    if (!resp.ok) {
      console.log('Failed to initialize signUpOrIn flow')
      console.log(`Status Code: ${resp.code}`)
      console.log(`Error Code: ${resp.error.errorCode}`)
      console.log(`Error Description: ${resp.error.errorDescription}`)
      console.log(`Error Message: ${resp.error.message}`)
    } else {
      console.log('Successfully initialized signUpOrIn flow')
      setOtpSent(true)
    }
  }

  const handleOtpChange = (event) => {
    setOtpCode(event.target.value)
  }

  const handleOtpSubmit = async (event) => {
    event.preventDefault()

    const resp = await sdk.otp.verify.sms(phone, otpCode)

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
      console.log('User is authenticated!')
      console.log('User ID: ' + user.id)
      console.log('User email: ' + user.email)
    } else {
      console.log('User is not authenticated.')
    }
  }, [isAuthenticated, isUserLoading])

  return (
    <div>
      <h1>Sign Up</h1>
      {!isAuthenticated ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Phone:
            <input
              required
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
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

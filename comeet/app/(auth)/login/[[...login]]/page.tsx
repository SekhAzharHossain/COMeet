import { SignIn } from '@clerk/nextjs'
import React from 'react'
import { neobrutalism } from '@clerk/themes'

const LoginPage = () => {
  return (
    <main className=' flex flex-col items-center p-5 gap-10'> 
        <div className='mt-3'>
            <SignIn
                appearance={
                    {
                        baseTheme:neobrutalism
                    }
                }
            />
        </div>
    </main>
  )
}

export default LoginPage
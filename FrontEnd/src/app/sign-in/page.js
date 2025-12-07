'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SignIn() {
    const [username, setUserame] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [hidden, setHidden] = useState(true)
    const [userNameErrorHidden, setUserNameErrorHidden] = useState(true)
    const [passwordErrorHidden, setPasswordErrorHidden] = useState(true)

    const loginUser = () => {

    }

    return (
        <main className='min-h-screen flex items-center justify-center px-4 text-white'>
            <div className='w-full max-w-5xl bg-[#1F1630]/80 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row border border-white/10 backdrop-blue-xl'>
                <div className='relative md:w-1/2 bg-gradient-to-tr from-[#7E5BD2] via-[#9384E6] to-[#D191DC] p-8 flex flex-col justify-between test-white'>
                    <div className='mt-16'>
                        <p className='text-sm uppercase tracking-[0.2em] text-white/80 mb-'>Welcome back</p>
                        <h2 className='text-2xl md:text-3xl font-semibold leading-snug'>Pick up where<br />you left off.</h2>
                        <p className='mt-4 text-sm text-white/85 max-w-xs'>Checking in is a form of self care. Return to your ongoing conversations, revist past insights, and let Eunoia adapt to how you feel today.</p>
                    </div>
                </div>
                <div className='md:w-1/2 px-8 py-8 md:px-10 md:py-10 bg-[#F9F4FB]/90 text-[#130824]'>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-2'>Log in</h1>
                    <p className='text-sm text-[#5B4A86] mb-6'>
                        New to Eunoia?{" "}
                        <button className='text-[#7E5BD2] hover:text-[#9384E6] underline underline-offset-2'>
                            <Link href='sign-up'>Create an account</Link>
                        </button>
                    </p>
                    <form
                        className="space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault()
                            loginUser()
                        }}
                    >
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-sm text-[#130824]">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUserame(e.target.value)}
                                className="w-full rounded-xl bg-white border border-[#DACBEA] px-3 py-2.5 text-sm text-[#130824] placeholder-[#CDA7E2] focus:outline-none focus:ring-2 focus:ring-[#9F8BE6] focus:border-transparent"
                                placeholder="Enter your username"
                                required
                            />
                            {!userNameErrorHidden && (
                                <p className="text-xs text-red-500">Check your username or password and try again.</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm text-[#130824]">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-xl bg-white border border-[#DACBEA] px-3 py-2.5 text-sm text-[#130824] placeholder-[#CDA7E2] focus:outline-none focus:ring-2 focus:ring-[#9F8BE6] focus:border-transparent"
                                placeholder="Enter your password"
                                required
                            />
                            {!passwordErrorHidden && (
                                <p className="text-xs text-red-500">Check your username or password and try again.</p>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button type="button" className="text-xs text-[#7E5BD2] hover:text-[#9384E6] underline underline-offset-2">
                                Forgot your password?
                            </button>
                        </div>
                        <button type="submit" className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-[#7E5BD2] hover:bg-[#9384E6] text-sm font-medium py-2.5 text-white shadow-lg shadow-[#B98BE0]/60 transition">
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}
'use client'
import { useState, useEffect } from 'react'

// import { Switch } from '../switch'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { setCookie } from 'cookies-next'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
const ModeToggle = () => {
    const [mounted, setMounted] = useState(false)

    const { resolvedTheme, setTheme } = useTheme()
    console.log('resolvedtheme', resolvedTheme)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    return (
            <Switch
                checked={resolvedTheme === 'dark'}
                onChange={() => {
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                    setCookie('theme', resolvedTheme === 'dark' ? 'light' : 'dark')
                }}
                color={resolvedTheme === 'dark' ? 'dark' : 'white'}
                className={classNames(
                    resolvedTheme === 'dark' ? 'bg-gray-600' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2'
                  )}
            >
                <span className="sr-only">Use setting</span>
                <span
                    className={classNames(
                    resolvedTheme === 'dark' ? 'translate-x-5 bg-white' : 'translate-x-0 bg-gray-100',
                    'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                >
                    <span
                        className={classNames(
                            resolvedTheme === 'dark' ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                        )}
                        aria-hidden="true"
                    >
                        <svg className='h-3 w-3 text-gray-400' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
                        </svg>
                    </span>
                    <span
                        className={classNames(
                            resolvedTheme === 'dark' ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                        )}
                        aria-hidden="true"
                    >
                        <svg className='h-3 w-3 text-indigo-600' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
                        </svg>
                    </span>
                </span>
            </Switch>

    )
}

export default ModeToggle
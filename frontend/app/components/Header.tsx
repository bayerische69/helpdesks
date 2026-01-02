"use client"

import headerbg from '../images/headerbackground.png'
import Image from 'next/image'

export function Header() {
    return(
        <div className="min-w-screen py-2"
        style={{
            backgroundImage: `url(${headerbg.src})`,
            
        }}
        >
            <div className="mx-10">     
                <h1 className='text-lg font-bold'>CGSO Internal HelpDesks</h1> 
            </div>
        </div>
    )
}


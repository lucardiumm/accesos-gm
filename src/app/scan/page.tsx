'use client'

import Header from "@/components/core/Header"
import Scanner from "@/components/core/Scanner"
import { useState } from "react"
import { redirect } from "next/navigation"
import { isMobile } from "react-device-detect"

export default function Page() {
    const [isPaused, setIsPaused] = useState(false)

    if (!isMobile) {
        return redirect('/')
    }

    return (
        <>
            <Header />

            <div className={'flex flex-1 md:flex-row flex-col items-center justify-center w-screen h-screen bg-gray-100'}>
                <Scanner isPaused={isPaused} />
            </div>
        </>
    )
}
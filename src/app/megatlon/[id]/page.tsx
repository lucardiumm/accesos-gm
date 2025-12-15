'use client'

import Header from "@/components/core/Header"
import Scanner from "@/components/core/Scanner"
import { config } from "@/constants/config"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function Page() {
    const params = useParams()
    const id = params?.id as string

    return (
        <>
            <Header />
            
            <div className={'flex md:flex-row flex-col items-center justify-center w-screen h-screen bg-gray-100'}>
                <p>{id}</p>
            </div>
        </>
    )
}
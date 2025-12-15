'use client'

import Header from '@/components/core/Header'
import { useParams } from 'next/navigation'

export default function Page() {
    const params = useParams()
    const id = params?.id as string

    return (
        <>
            <Header />

            <div className={'flex flex-1 flex-col items-center justify-center w-screen h-screen bg-gray-100'}>
                <p>{id}</p>
            </div>
        </>
    )
}
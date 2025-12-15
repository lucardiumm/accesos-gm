'use client'

import { Scanner as ReaderQR } from '@yudiel/react-qr-scanner'

export default function Scanner({ isPaused }: { 
    isPaused: boolean
}) {
    return (
        <div className={'w-full h-full'}>
            <ReaderQR
                paused={isPaused}
                components={{
                    finder: false,
                }}
                onScan={(result) => {
                    console.log(result)
                }}
            />
        </div>
    )
}
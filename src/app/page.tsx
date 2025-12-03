'use client'

import Header from "@/components/core/Header"
import { config } from "@/constants/config"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function Page() {
    const [logged, setLogged] = useState<boolean>(true)
    const [sede, setSede] = useState<string>()
    
    if (!logged) {
        return redirect('https://account.microsoft.com/account?lang=es-es')
    }

    return (
        <>
            <Header />

            <main className={''}>
                <section>
                    
                </section>
                <section>

                </section>
            </main>
        </>
    )
}
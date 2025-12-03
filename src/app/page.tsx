'use client'

import Header from "@/components/core/Header"
import Lister from "@/components/core/Lister"
import Molinete from "@/components/core/Molinete"
import { config } from "@/constants/config"
import { useSede } from "@/hooks/useSede"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function Page() {
    const { localSede } = useSede()

    const [logged, setLogged] = useState<boolean>(true)
    const [sede, setSede] = useState<string>(localSede)

    const checkSede = () => {
        if (config.sedes.some(({ name }) => name === sede)) {
            return true
        }
        
        return false
    }

    const handleSedeChange = (name: string) => {
        setSede(name)
        localStorage.setItem('Sede', name)
    }
    
    if (!logged) {
        return redirect('https://account.microsoft.com/account?lang=es-es')
    }

    return (
        <>
            <Header sede={sede} setSede={handleSedeChange} />

            <main className={'flex flex-1 flex-col items-center justify-center w-screen'}>
                {checkSede() ?
                (
                    <div className={'flex lg:flex-row flex-col gap-14 my-10 md:my-32 justify-center'}>
                        <section className={'flex flex-col gap-7 justify-center content-center'}>
                            <div className={'md:flex-row flex-col flex gap-10'}>
                                {config.molinetes.map((_, i) => (
                                    <Molinete id={_.id} pfp={'https://mega-ac.azurewebsites.net/assets/images/no-picture.jpg'} nombre={'El Chamo'} key={i} />
                                ))}
                            </div>
                        </section>
                        <section className={'flex'}>
                            <Lister />
                        </section>
                    </div>
                ) : (
                    <p className={'fixed top-1/2'}>No se seleccionó ninguna sede.</p>
                )}
            </main>
        </>
    )
}
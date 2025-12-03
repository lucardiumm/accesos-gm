import { useEffect, useState } from "react"

export function useSede() {
    const [data, setData] = useState('')

    useEffect(() => {
        const savedSede = localStorage.getItem('Sede') as string
        
        if (savedSede) {
            setData(savedSede)
        } else {
            setData('')
        }
    }, [])

    return {
        localSede: data
    }
}
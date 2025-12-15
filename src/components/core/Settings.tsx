'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { SettingsIcon } from "lucide-react"
import { config } from "@/constants/config"
import { useSede } from "@/hooks/useSede"
import { redirect } from "next/navigation"
import { getSedeId } from '@/functions/getSedeById'

export default function Settings() {
    const { sede, empresa, changeSede } = useSede()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'}>
                    <SettingsIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'px-7 mr-7 mt-5'} align={'start'}>
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        lpignataro@megatlon.com.ar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Cerrar sesion
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                 <DropdownMenuLabel>Megatlon</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={`${sede}-megatlon`} onValueChange={(value) => {
                    const [name, empresa] = value.split('-')
                    changeSede(name, empresa)
                    redirect(`/${empresa}/${getSedeId({ name, empresa })}`)
                }}>
                    {config.sedes.megatlon.sort((a, b) => a.name.localeCompare(b.name)).map((sede, i) => (
                        <DropdownMenuRadioItem value={`${sede.name}-megatlon`} key={i}>
                            {sede.name}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
                <DropdownMenuLabel>Fiter</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={`${sede}-fiter`} onValueChange={(value) => {
                    const [name, empresa] = value.split('-')
                    changeSede(name, empresa)
                    redirect(`/${empresa}/${getSedeId({ name, empresa })}`)
                }}>
                    {config.sedes.fiter.sort((a, b) => a.name.localeCompare(b.name)).map((sede, i) => (
                        <DropdownMenuRadioItem value={`${sede.name}-fiter`} key={i}>
                            {sede.name}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
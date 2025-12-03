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

export default function Settings({ sede, setSede }: {
    sede: string;
    setSede: (name: string) => void;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'}>
                    <SettingsIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'w-32 mr-7'} align={'start'}>
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Cerrar sesion
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuLabel>Sedes</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sede} onValueChange={setSede}>
                    {config.sedes.sort((a, b) => a.name.localeCompare(b.name)).map((sede, i) => (
                        <DropdownMenuRadioItem value={sede.name} key={i}>
                            {sede.name}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
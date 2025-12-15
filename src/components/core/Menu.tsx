'use client'

import { config } from "@/constants/config"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem } from "../ui/sidebar"
import { getSedeId } from "@/functions/getSedeById"
import { redirect } from "next/navigation"
import { useSede } from "@/hooks/useSede"

export default function Menu() {
    const { changeSede } = useSede()

    return (
        <Sidebar side={'right'}>
            <SidebarHeader>
                lpignataro@megatlon.com.ar
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className={''}>
                        Megatlon
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {config.sedes.megatlon.map((sede, i) => (
                                <SidebarMenuItem key={i} value={`${sede.name}-megatlon`} onClick={() => {
                                    const [name, empresa] = `${sede.name}-megatlon`.split('-')
                                    changeSede(name, empresa)
                                    redirect(`/${empresa}/${getSedeId({ name, empresa })}`)
                                }}>
                                    {sede.name}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className={''}>
                        Fiter
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {config.sedes.fiter.map((sede, i) => (
                                <SidebarMenuItem key={i} value={`${sede.name}-fiter`} onClick={() => {
                                    const [name, empresa] = `${sede.name}-fiter`.split('-')
                                    changeSede(name, empresa)
                                    redirect(`/${empresa}/${getSedeId({ name, empresa })}`)
                                }}>
                                    {sede.name}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
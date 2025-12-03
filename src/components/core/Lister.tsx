'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"

export default function Lister() {
    return (
        <Table>
            <TableCaption>Registro de ingreso</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Hora</TableHead>
                    <TableHead>Nro socio</TableHead>
                    <TableHead>Documento</TableHead>
                    <TableHead>Nombre completo</TableHead>
                    <TableHead className="w-[100px]">Vto contrato</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Resultado</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>10:43</TableCell>
                    <TableCell>99-250234</TableCell>
                    <TableCell>46827182</TableCell>
                    <TableCell>Leo El Chamo</TableCell>
                    <TableCell>27/12/2026</TableCell>
                    <TableCell>Concedido</TableCell>
                    <TableCell>ok</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
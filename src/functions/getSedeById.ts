import { config } from '@/constants/config'

export const getSedeId = (localSede: {
    name: string;
    empresa: string;
}) => {
    if (localSede.empresa === 'megatlon') {
        const element = config.sedes.megatlon.filter((value) => value.name.toLowerCase() === localSede.name.toLowerCase())
        return element[0].id
    }

    const element = config.sedes.fiter.filter((value) => value.name.toLowerCase() === localSede.name.toLowerCase())
    return element[0].id
}
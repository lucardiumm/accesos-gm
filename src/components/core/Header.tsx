'use client'

import Image from "next/image"
import Settings from "@/components/core/Settings"

export default function Header({ sede, setSede }: {
    sede: string;
    setSede: (name: string) => void;
}) {
    return (
        <header className={'w-screen h-20 border-b-[1.5px] flex-row flex border-b-gray-200 justify-between items-center'}>
            <div className={'ml-7'}>
                <Image
                    width={500}
                    height={500}
                    alt={'ICON'}
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4RRqgkSruMFjfTcjN614mMUi9Ee4CXOUTA&s'}
                    className={'w-12 rounded-full'}
                />
            </div>

            <h1 className={'font-semibold text-xl'}>{sede}</h1>

            <div className={'mr-7'}>
                <Settings sede={sede} setSede={setSede} />
            </div>
        </header>
    )
}
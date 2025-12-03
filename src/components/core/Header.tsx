'use client'

import Image from "next/image"
import Settings from "@/components/core/Settings"

export default function Header() {
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

            <div className={'mr-7'}>
                <Settings />
            </div>
        </header>
    )
}
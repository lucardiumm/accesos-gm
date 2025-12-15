'use client'

import Image from 'next/image'
import Settings from '@/components/core/Settings'
import { Modal } from './Modal'
import { useSede } from '@/hooks/useSede'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'

export default function Header() {
    const { sede, empresa } = useSede()

    return (
        <header className={'w-full h-20 border-b flex-row flex bg-white border-b-gray-200 justify-between items-center'}>
            <div className={'ml-7'}>
                <Image
                    width={500}
                    height={500}
                    onClick={() => {
                        redirect('/')
                    }}
                    alt={'ICON'}
                    src={empresa === 'megatlon' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4RRqgkSruMFjfTcjN614mMUi9Ee4CXOUTA&s' : 'https://play-lh.googleusercontent.com/CEkgBrG8cb6YgikTcjQpiYTZfN7xuxzzhAS-7b1_lnOO5lQVXpG8DcU1q0lr63iSUrU'}
                    className={'w-10 rounded-full cursor-pointer'}
                />
            </div>

            <h1 className={'font-medium md:text-xl'}>{sede}</h1>

            <div className={'mr-7 gap-5 flex-row flex'}>
                <Modal />
                <Button variant={'outline'} onClick={() => {
                    
                }}>
                    <MenuIcon />
                </Button>
            </div>
        </header>
    )
}
'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
]


export default function UserMenu() {
    return (
        <div className='flex flex-row items-center gap-3'>
            <div
                onClick={() => { }}
                className="
        hidden
        md:block
        text-sm
        font-semibold
        py-3
        px-4
        rounded-full
        hover:bg-neutral-100
        transition
        cursor-pointer">
                Airbnb your home
            </div>
            <Menu>
                <Menu.Button
                    className="
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px]
                    border-neutral-200
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition">
                    <AiOutlineMenu />
                    <Avatar />
                </Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                    <Menu.Items>
                        {links.map((link) => (
                            /* Use the `active` state to conditionally style the active item. */
                            <Menu.Item key={link.href} as={Fragment}>
                                {({ active }) => (
                                    <a
                                        href={link.href}
                                        className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>

        </div >
    )
}

{/* <div className="relative">
<div
    className="flex flex-row items-center gap-3">
    <div
        onClick={() => { }}
        className="
        hidden
        md:block
        text-sm
        font-semibold
        py-3
        px-4
        rounded-full
        hover:bg-neutral-100
        transition
        cursor-pointer">
        Airbnb your home
    </div>
    <div
        onClick={() => { }}
        className="
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition">
        <AiOutlineMenu />
        <div
            className=" hidden md:block">
            <Avatar />
        </div>
    </div>
</div>
</div> */}
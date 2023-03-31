'use client'

import { Fragment, useCallback, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'

export default function Modal({
    isOpen = false,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel
}: {
    isOpen: boolean,
    onClose: () => void,
    onSubmit: () => void,
    title: string,
    body: string,
    footer: string,
    actionLabel: string,
    disabled: boolean,
    secondaryAction: () => void,
    secondaryLabel: string
}) {

    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return
        }

        onSubmit()
    }, [disabled, onSubmit])

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return
        }

        secondaryAction()
    }, [disabled, secondaryAction])

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                open={showModal}
                onClose={() => setShowModal(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="
                        fixed inset-0
                        bg-neutral-800/70 
                        focus:outlin"
                        aria-hidden="true"
                    />
                </Transition.Child>

                <div
                    className='
                    justify-center
                    items-center
                    flex
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none
                    '>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel
                            className="
                                h-full
                                lg:h-auto
                                md:h-auto
                                border-0
                                rounded-lg
                                shadow-lg
                                relative
                                flex
                                flex-col
                                w-full
                                outline-none
                                focus:outline-none
                                bg-white">
                            <div
                                className="
                                        flex
                                        items-center
                                        p-6
                                        rounted-t
                                        justify-center
                                        relative
                                        border-b-[1px]
                                        ">
                                <button
                                    className="
                                    p-1
                                    border-0
                                    hover:opacity-70
                                    transition
                                    absolute left-9"
                                    onClick={() => setShowModal(false)}>
                                    <IoMdClose size={18} />
                                </button>
                                <Dialog.Title
                                    className="text-lg font-semibold">
                                    {title}
                                </Dialog.Title>
                            </div>
                            <Dialog.Description>
                                This will permanently deactivate your account
                            </Dialog.Description>

                            <p className='relative p-6 flex-auto'>
                                {body}
                            </p>

                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </Dialog.Panel>
                    </Transition.Child>

                </div>


            </Dialog>
        </Transition >
    )
}
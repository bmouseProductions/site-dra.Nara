import { useState } from 'react'
import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
    base: 'absolute z-20 right-5 lg:right-10 bottom-5 lg:bottom-10 px-5 pt-2 pb-3 flex items-center justify-center gap-2 font-semibold lg:text-lg uppercase text-black bg-white rounded-3xl shadow ',
  })
  
  interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode,
  }

export default function ModalVideo({ children, ...rest }: ButtonProps) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const toggleModal = () => {
        setIsOpenModal(prev => !prev);
    };
     
    return (
        <>
            <button 
                {...rest} 
                className={buttonVariants()} 
                onClick={toggleModal}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>

                {children}
            </button>

            {isOpenModal && (
                <div className="fixed z-[100000] inset-0 px-5 bg-black/80 flex items-center justify-center">
                    <div className="w-full py-5 px-6 text-white  rounded-xl shadow-shape  space-y-5">
                        <div className="flex justify-end ">
                            
                            <button onClick={() => {setIsOpenModal(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                    <path strokeLinecap="round" className='text-red-700' strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <iframe
                            className="mx-auto w-[90%] md:w-[80%] h-[200px] md:h-[515px] xl:h-[550px] rounded-3xl"
                            src="https://www.youtube.com/embed/XB0J3mVluWA?si=JCwsAXOa7HcIC3Zx"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                    </div>
                </div>
            )}
            
        </>
    )
}

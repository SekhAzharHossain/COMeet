import { currentUser } from "@clerk/nextjs/server"
import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import React from "react"
import StreamProvider from "@/providers/StreamProvider"

const MainLayout =async ({
    children
}:{
    children:React.ReactNode
}) =>{

    const user =await currentUser()
    if(!user){
        return(
            <main className=' flex flex-col items-center p-5 gap-10'> 
                <div className='mt-3'>
                    <SignIn routing="hash"
                        appearance={
                            {
                                baseTheme:neobrutalism
                            }
                        }
                    />
                </div>
            </main>
        )
    }
    return(
        <main className="relative">
            <div className=" w-full">
                <StreamProvider>
                    {children}
                </StreamProvider>
            </div>
        </main>
    )
}

export default MainLayout
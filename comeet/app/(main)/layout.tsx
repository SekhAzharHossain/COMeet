import { currentUser } from "@clerk/nextjs/server"
import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import React from "react"

const MainLayout =async ({
    children
}:{
    children:React.ReactNode
}) =>{

    const user =await currentUser()
    if(!user){
            <main className=' flex flex-col items-center p-5 gap-10'> 
                <div className='mt-3'>
                    <SignIn
                        appearance={
                            {
                                baseTheme:neobrutalism
                            }
                        }
                    />
                </div>
            </main>
    }
    return(
        <main className="relative">
            <div className=" w-full">
                {children}
            </div>
        </main>
    )
}

export default MainLayout
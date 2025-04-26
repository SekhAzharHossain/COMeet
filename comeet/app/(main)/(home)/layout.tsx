import React from "react"
import NavBar from "@/components/Navbar"
const HomeLayout =async ({
    children
}:{
    children:React.ReactNode
}) =>{
    return(
        <main className=" relative">
            <NavBar/>

            <section className=" flex flex-col min-h-screen flex-1 px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                <div className=" w-full">
                    {children}
                </div>
            </section>
        </main>
    )
}

export default HomeLayout
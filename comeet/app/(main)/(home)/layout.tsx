import React from "react"

const HomeLayout =async ({
    children
}:{
    children:React.ReactNode
}) =>{
    return(
        <main className=" relative">
            {/* <Navbar/> */}

            <section className=" flex flex-col min-h-screen flex-1 px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                <div className=" w-full">
                    {children}
                </div>
            </section>
        </main>
    )
}

export default HomeLayout
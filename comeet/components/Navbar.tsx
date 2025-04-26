'use client';
import { SignedIn,  UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants';
import { neobrutalism } from '@clerk/themes'
import { cn } from '@/lib/utils';


const NavBar = () => {
  const pathname = usePathname();

    return (
        <>
          <nav className="flex justify-between items-center fixed z-50 w-full h-20 bg-gray-200 px-10 gap-4 shadow-2xl">
              {/* Logo */}
              <section className='flex text-2xl font-bold'>
                <h1 className='text-blue-700'>Co</h1>
                <h1>meet</h1>
              </section>

              {/* Nav Links */}
              <section className="sticky top-0 flex justify-between text-black ">
                <div className="flex flex-1 max-sm:gap-0 sm:gap-6">
                  {navLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    
                    return (
                      <Link
                        href={item.route}
                        key={item.label}
                        className={
                          cn('flex gap-4 items-center p-4 rounded-lg justify-start hover:scale-120 duration-300 ',
                            isActive && 'bg-blue-100 rounded-3xl'
                          )
                        }
                      >
                        
                        <p className={cn(
                            "font-semibold max-lg:hidden",
                          )}>
                          {item.label}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </section>

              {/* User button */}
              <div className='hover:scale-150 duration-500'>
                <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton
                      appearance={{
                        baseTheme: neobrutalism,
                      }}
                    />
                </SignedIn>
        
              </div>
          </nav>
        </>
    )
}

export default NavBar
import { Sansita_Swashed } from 'next/font/google'
import Link from 'next/link'
 
const logo = Sansita_Swashed({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer(){
    return(

        <footer className="p-4 md:p-8 lg:p-10">
        <div className="mx-auto max-w-screen-xl text-center">
        <Link className={logo.className+" logo md:px-3 md:py-2 p-2 hover:opacity-50"} href="/">
            Raju
            </Link>
            <p className="my-6 ">Open-source library of over 400+ web components and interactive elements built for better web.</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 ">
               
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    )
}
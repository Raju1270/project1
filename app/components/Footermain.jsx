import { Sansita_Swashed } from 'next/font/google'
import Link from 'next/link'
const logo = Sansita_Swashed({
  weight: '400',
  subsets: ['latin'],
})
export default function Footer() {
  return (

    <footer className="p-4 lg:p-10">
      <div className="">
        <Link className={logo.className + " logo lg:px-3 lg:py-2 p-2 hover:opacity-50  "} href="/">
        Raju
      </Link>
        <div className="text-4xl md:7xl textwrap">
          Let&apos;s make something together
        </div>

        <p className="my-6 ">
          Made By Raju Created with fire
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 ">

        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Raju.</span>
      </div>


    </footer>
  )
}
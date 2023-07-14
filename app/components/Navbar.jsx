
import Link from "next/link";
import { Sansita_Swashed } from 'next/font/google'

const logof = Sansita_Swashed({
  weight: '400',
  subsets: ['latin'],
})



function Navbar() {

  return (
    <div className="w-full  p-2 lg:py-5 lg:px-20 flex justify-between items-center">
      <Link className={logof.className + " logo lg:px-3 lg:py-2 p-2 hover:opacity-50 lg:cursor-none"} href="/">
        Raju
      </Link>

      <ul className=" invisible lg:visible flex gap-3">
        <li>
          <Link className="px-3 py-2 hover:opacity-50 lg:cursor-none" href="/work">My Work</Link>
        </li>

        <li>
          <Link className="px-3 py-2 hover:opacity-50 lg:cursor-none" href="/about">About Me</Link>
        </li>
      </ul>


      <ul className=" invisible lg:visible">
        <li>
          <Link className=" px-3 py-2 hover:opacity-50 lg:cursor-none" href="/contact">Contect Us</Link>
        </li>
      </ul>
      <div className="menu lg:invisible lg:absolute visible p-3 flex flex-col justify-center items-center gap-1 " >

        <input type="checkbox" /> <span></span><span></span><span></span>

        <div className="menuoptions p-3 h-56 w-56">
          <ul className="w-full h-full flex flex-col justify-center items-center gap-5 p-3 ">
          
            <li>
          <Link className="px-3 py-2 hover:opacity-50" href="/work">My Work</Link>
        </li>
            <li>
              <Link className="px-3 py-2 hover:opacity-50" href="/about">About Me</Link>
            </li>
            <li>
              <Link className="px-3 py-2 hover:opacity-50" href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Navbar;

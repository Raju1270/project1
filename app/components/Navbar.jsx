
import Link from "next/link";
import { Sansita_Swashed } from 'next/font/google'
 
const logo = Sansita_Swashed({
  weight: '400',
  subsets: ['latin'],
})


 
function Navbar() {
  
  return (
    <div className="w-full  p-2 md:py-5 md:px-20 flex justify-between items-center">
      <Link className={logo.className+" logo md:px-3 md:py-2 p-2 hover:opacity-50"} href="/">
      Raju
      </Link>
     
      <ul className=" invisible md:visible flex gap-3">
        <li>
          <Link className="px-3 py-2 hover:opacity-50" href="/work">My Work</Link>
        </li>
       
        <li>
          <Link className="px-3 py-2 hover:opacity-50" href="/aboutme">About Me</Link>
        </li>
      </ul>


      <ul className=" invisible md:visible">
        <li>
          <Link className=" px-3 py-2 hover:opacity-50" href="/">Contect Me</Link>
        </li>
      </ul>
      <div className="menu md:invisible md:absolute visible p-3 flex flex-col justify-center items-center gap-1 " >
        
        <input type="checkbox" /> <span></span><span></span><span></span>

        <div className="menuoptions p-3 h-56 w-56">
        <ul className="w-full h-full flex flex-col justify-center items-center gap-5 p-3 ">
        <li>
          <Link className="m-3 hover:opacity-50" href="/work">My Work</Link>
        </li>
       
        <li>
          <Link className="m-3 hover:opacity-50" href="/aboutme">About Me</Link>
        </li>
      </ul>
        </div>

      </div>
    </div>
  );
}

export default Navbar;

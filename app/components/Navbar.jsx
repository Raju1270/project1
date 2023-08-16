
import Link from "next/link";
import Header from './Header';
import { Sansita_Swashed } from 'next/font/google'

const logof = Sansita_Swashed({
  weight: '400',
  subsets: ['latin'],
})



function Navbar() {

  return (
    <div className="w-full p-2 lg:py-5 lg:px-20 flex justify-between items-center fixed z-50">
      <Link className={logof.className + " logo lg:px-3 lg:py-2 p-2 text-white mix-blend-difference"} href="/">
        Raju
      </Link>
      <Header />

    </div>
  );
}

export default Navbar;

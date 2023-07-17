
import Link from "next/link";
import Header from './header';
import { Sansita_Swashed } from 'next/font/google'

const logof = Sansita_Swashed({
  weight: '400',
  subsets: ['latin'],
})



function Navbar() {

  return (
    <div className="w-full  p-2 lg:py-5 lg:px-20 flex justify-between items-center">
      <Link className={logof.className + " logo lg:px-3 lg:py-2 p-2 hover:opacity-50  "} href="/">
        Raju
      </Link>
      <Header />

    </div>
  );
}

export default Navbar;

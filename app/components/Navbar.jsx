import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className=" absolute w-full p-7 flex justify-between items-center">
      <Link href="/">Logo</Link>
      <ul className="flex gap-5">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
      </ul>


      <ul className="flex gap-5">
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Navbar;

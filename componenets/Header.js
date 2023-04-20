import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import Head from "@/styles/Header.module.css";
const Header = () => {
  const [Active, SetActive] = useState(false);
  return (
    <>
      <div className={Head.container}>
        <Image
          src="/Logo.png"
          alt="Logo"
          height={70}
          width={70}
          className={Head.Logo}
        />

        <HiMenuAlt3
          size="2em"
          onClick={() => {
            SetActive(!Active);
          }}
          className={Head.icon}
        />
      </div>

      <nav className={`${Active ? Head.Active : ""} ${Head.Menu}`}>
        <ul className={Head.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

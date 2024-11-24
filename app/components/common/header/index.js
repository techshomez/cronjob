"use client";
import "./index.css";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown,HiOutlineLogin  } from "react-icons/hi";
import { menuData } from "../../utilities/menuData";

function Header() {
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="logo">
          <Image src="/images/logo.png" alt="Logo" width={100} height={30} />
        </div>
        <div className="middle__nav">
          {menuData.map((menu_items, index)=>{
            return(
              <Link href={menu_items.path} key={index}>
                {menu_items.title}
                <i>{menu_items.icon}</i>
              </Link>
            );
          })}
        </div>
        <div className="right__nav">
          <div className="search__form">
            <div className="form__group">
              <input type="text" placeholder="search...." />
            </div>
            <div className="divider"></div>
            <div className="search__dropdown">
              <span>Talent</span>
              <i><HiChevronDown /></i>
            </div>
          </div>
          <div className="nav__cta">
            <Link href="/login">
             <HiOutlineLogin />
            </Link>
            
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;
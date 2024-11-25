"use client";
import "./index.css";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown,HiOutlineLogin, HiOutlineUsers, HiClipboardCheck, HiOutlineBriefcase, HiMenu  } from "react-icons/hi";
import { menuData } from "../../utilities/menuData";
import { useState } from "react";

function Header() {

  const [searchDropdown, setSearchDropdown] = useState(false);
  const [searchSort, setSearchSort] = useState("talent");
  //const [openSort, setOpenSort] = useState(false)

  const handleSearchDropdown = ()=>{
    setSearchDropdown(!searchDropdown);
  }


  return (
    <>
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={30} />
          </Link>
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
              <div className="search__holder" onClick={handleSearchDropdown}>
              <span>{searchSort === "talent" ? "Talent" : "Projects"}</span>
              <i><HiChevronDown /></i>
              </div>
              {searchDropdown &&(
                <div className="search__dropdown__item">
                <div className="search__dropdown__item__holder">
                    <div className="search__dropdown__item__list">
                    <div className="search__dropdown__item__left">
                      <i><HiOutlineUsers /></i>
                    </div>
                    <div className="search__dropdown__item__right">
                      <h2>Talent</h2>
                      <small>Hire professional</small>
                    </div>
                  </div>
                  <div className="search__dropdown__item__list">
                    <div className="search__dropdown__item__left">
                      <i><HiClipboardCheck /></i>
                    </div>
                    <div className="search__dropdown__item__right">
                      <h2>Projects</h2>
                      <small>Get hired for services</small>
                    </div>
                  </div>
                  <div className="search__dropdown__item__list">
                    <div className="search__dropdown__item__left">
                      <i><HiOutlineBriefcase /></i>
                    </div>
                    <div className="search__dropdown__item__right">
                      <h2>Jobs</h2>
                      <small>Applying to jobs posted client</small>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
          <div className="nav__cta">
            <Link href="/login">
             <HiOutlineLogin />
            </Link>
            
          </div>
        </div>
        <div className="mobile__toggle">
          <i><HiMenu /></i>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;
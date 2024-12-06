import "./index.css";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown,HiOutlineLogin, HiOutlineUsers, HiClipboardCheck, HiOutlineBriefcase, HiMenu, HiX  } from "react-icons/hi";
import {HiOutlineGlobeAlt, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { menuData } from "../../utilities/menuData";
import { useState } from "react";

function Header() {

  const [searchDropdown, setSearchDropdown] = useState(false);
  const [searchSort, setSearchSort] = useState("talent");
  //const [openSort, setOpenSort] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [mobileSearchDropdown, setMobileSearchDropdown] = useState(false);

  const handleMobileToggle = ()=>{
    setMobileOpen(!mobileOpen);
  }

  const handleSearchDropdown = ()=>{
    setSearchDropdown(!searchDropdown);
  }

  const handleTranslate = () =>{
     setTranslate(!translate);
     setMobileSearchDropdown(false);
     setMobileOpen(false);

  }

  const handleMobileSearch = ()=>{
    setMobileSearchDropdown(!mobileSearchDropdown);
    setTranslate(false);
    setMobileOpen(false);
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
        <div className="mobile__icons">
          <div className="mobile__icon__list">
            <i onClick={handleTranslate}><HiOutlineGlobeAlt /></i>
            {translate && (
            <div className="language__drop">
              <div className="language__drop__list">
                <Image src="/images/usa.svg" width={30} height={30} alt="" />
                <span>English</span>
              </div>
              <div className="language__drop__list">
                <Image src="/images/german.svg" width={30} height={30} alt="" />
                <span>German</span>
              </div>
              <div className="language__drop__list">
                <Image src="/images/italy.svg" width={30} height={30} alt="" />
                <span>Italy</span>
              </div>
              <div className="language__drop__list">
                <Image src="/images/japan.svg" width={30} height={30} alt="" />
                <span>Japan</span>
              </div>
              <div className="language__drop__list">
                <Image src="/images/korean.svg" width={30} height={30} alt="" />
                <span>Korean</span>
              </div>
              <div className="language__drop__list">
                <Image src="/images/portugues.svg" width={30} height={30} alt="" />
                <span>Portugues</span>
              </div>
            </div>
             )}
          </div>
         
          <div className="mobile__icon__list">
            <i onClick={handleMobileSearch}><HiOutlineMagnifyingGlass /></i>
            {mobileSearchDropdown &&(
            <div className="mobile__search">
              <input type="text" placeholder="Search...." />
            </div>
            )}
          </div>
          <Link href="/login">Login</Link>
        </div>
        <div className={mobileOpen ? "mobile__toggle mobile__toggle__close" :"mobile__toggle"} onClick={handleMobileToggle}>
          <i>{mobileOpen ?<HiX /> : <HiMenu />}</i>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;
"use client";
import Image from "next/image";

function Home() {
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="logo">
          <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
        </div>
        <div className="middle__nav"></div>
        <div className="right__nav"></div>
      </div>
    </header>
    </>
  )
}

export default Home;
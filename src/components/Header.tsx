import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="heading">
      <div className="wrap">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            width={80}
            height={100}
            alt="Picture of the author"
          />
        </Link>
        <Link href="/">
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;

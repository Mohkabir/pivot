import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="heading">
      <div className="wrap">
        <div className="box1">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={80}
              height={100}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="box2">
          <div className="wrapContact">
            <button onClick={() => setToggle(!toggle)}>Contact Us</button>
            {toggle && (
              <div className="con">
                <a href="tel:+2347031356201">m: +234 703 135 6201</a>
                {/* <Link href="mailto:">e: pivotgr@gmail.com</Link> */}
                <a href="mailto:pivotgr@gmail.com">e: pivotgr@gmail.com</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

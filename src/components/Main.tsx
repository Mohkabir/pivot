import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Image1 from "../../public/images/image1.png";
import Image2 from "../../public/images/image2.png";
import Image3 from "../../public/images/image3.png";
import Image4 from "../../public/images/image4.png";

import Img1 from "../../public/images/img1.png";
import Img2 from "../../public/images/img2.png";
import Img3 from "../../public/images/img3.png";
import Img4 from "../../public/images/img4.png";

const Main = () => {
  const [active, setActive] = useState(0);
  const companies = [
    {
      title: "Arch",
      description:
        "We're building excellence from the ground up. Discover apt construction engineering, procurement solutions, innovative interiors, and top-notch maintenance services.",
      link: "/",
      img: Img1,
      activeImg: Image1,
    },
    {
      title: "Labs",
      description:
        "Experience innovation through technology and software development by crafting web, mobile, and desktop applications and enterprise solutions, to reshape your digital landscape.",
      link: "/",
      img: Img2,
      activeImg: Image2,
    },
    {
      title: "Lifestyle",
      description:
        "Explore the perfect fusion of fashion, interior design, and artisanal furniture craftsmanship, elevating your style and home spaces with our curated collection of trendsetting designs",
      link: "/",
      img: Img3,
      activeImg: Image3,
    },
    {
      title: "Foundation",
      description:
        "A non-profit that aims in creating a better life and living conditions for less privileged societal groups, socioeconomic institutions, and communities.",
      link: "/",
      img: Img4,
      activeImg: Image4,
    },
  ];
  const handleMouseEnter = (val: number) => {
    setActive(val);
  };

  const handleMouseLeave = () => {
    setActive(0);
  };
  return (
    <div className="image-container">
      <div className="wrap">
        {companies.map((company, idx) => (
          <div
            className={`card card${idx + 1} ${active === idx && "active"}`}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div className="overlay"></div>
            <article>
              <Image
                src={company?.activeImg}
                width={200}
                height={200}
                alt="Picture of the author"
                className="bg_img"
              />
              <div className="textWrap">
                {active === idx && <h3>{company.title}</h3>}
                {active === idx && <p>{company.description}</p>}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

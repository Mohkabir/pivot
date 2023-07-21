import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Image1 from "../../public/images/image1.png";
import Image2 from "../../public/images/image2.png";
import Image3 from "../../public/images/image3.png";
import Image4 from "../../public/images/image4.png";


const Main = () => {
  const [active, setActive] = useState(0);
  const companies = [
    {
      title: "Contracting",
      description:
        " We're a premier general contracting firm recognised leader in Engineering Procurement, Construction, and Maintenance (E.P.C.M).",
      link: "/",
      img: Image1,
    },
    {
      title: "Labs",
      description:
        "We focus on bringing digital products (website, applications) from validation to success, optimising our unique expertise to create a product that fulfils your target customers' needs.",
      link: "/",
      img: Image2,
    },
    {
      title: "Lifestyle",
      description:
        " A beauty brand that embraces minimalism and natural beauty, providing a range of products that enhance individuals' everyday routines.",
      link: "/",
      img: Image3,
    },
    {
      title: "Foundation",
      description:
        "A non-profit that aims in creating a better life and living conditions for less privileged societal groups, socioeconomic institutions, and communities.",
      link: "/",
      img: Image4,
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
            <Link href="/development">
              <Image
                src={company?.img}
                width={200}
                height={200}
                alt="Picture of the author"
                className="bg_img"
              />
              <div className="textWrap">
                {active === idx && <h3>{company.title}</h3>}
                {active === idx && <p>{company.description}</p>}
                {/* <h3>{company.title}</h3>
                <p>{company.description}</p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

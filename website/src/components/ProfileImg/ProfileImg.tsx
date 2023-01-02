import React, { useState } from "react";
import Image from "next/image";
import Btn from "../Button/Btn";
import Link from "next/link";

interface profileImgProp {
  imgUrl: string;
  alt?: string;
  cssStyle?: string;
  details?: boolean;
  name: string;
  subTitle?: string;
  profileUrl: string;
  hoverIn?: (event: React.MouseEvent) => void;
}

const defaultImg =
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
const ProfileImg: React.FC<profileImgProp> = ({
  imgUrl = defaultImg,
  alt = "avatar",
  cssStyle,
  details = false,
  name = "Name",
  subTitle = "Title (GitHub developer)",
  profileUrl = "https://github.com",
  hoverIn,
}) => {
  return (
    <Link
      href={profileUrl}
      className="w-16 sm:w-20 block aspect-square border rounded-full relative"
      aria-label={`Visit ${name} github profile`}
      target="_blank"
    >
      <Image
        src={imgUrl}
        alt={alt}
        width={80}
        height={80}
        className={`w-full h-full object-cover  border-4 border-very-dark-blue ${cssStyle} glow-on rounded-full`}
      />
      {/* {details && (
        <div className={`absolute w-48 left-full top-0 p-2 rounded-xl z-10 bg-very-dark-blue text-very-light-blue`}>
          <span className="absolute w-6 rotate-45 -left-3 top-5 bg-very-dark-blue  block aspect-square"></span>
          <div className="relative z-10">
            <h2 className="font-bold truncate ">{name}</h2>
            <h3 className="text-white/50 font-light truncate">{subTitle}</h3>
            <Btn
              href={profileUrl}
              target="_blank"
              text={"Github"}
              ariaLabel={`Go to ${name} github profile page`}
              cssStyle={"!p-1 mt-3 text-lg"}
              icon={<FiExternalLink />}
            />
          </div>
        </div>
      )} */}
    </Link>
  );
};

export default ProfileImg;

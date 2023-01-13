import React from "react";
import ProfileImg from "../ProfileImg/ProfileImg";

interface testimonialCard {
  name: string;
  subTitle: string;
  message: string;
  profileUrl?: string;
  id: string;
  key?: string;
  cssStyle?: string;
}

const defaultImg: string =
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
const TestimonialCard: React.FC<testimonialCard> = ({
  name,
  subTitle,
  message,
  profileUrl = defaultImg,
  cssStyle,
  id,
}) => {
  return (
    <div
      className={`hover:shadow-xl rounded-2xl group p-5 bg-gradient-to-tr from-very-light-blue to-white dark:from-very-dark-blue dark:via-dark-blue dark:to-dark-blue backdrop-blur-sm text-black dark:text-white ${cssStyle}`}
      id={id}
    >
      <ProfileImg
        cssStyle="group-hover:border-white group-hover:shadow-xl"
        imgUrl={`https://github.com/${name}.png`}
        name={name}
        profileUrl={`https://github.com/${name}`}
      />
      <header className="mt-2" aria-label={`tool name:- ${name}`}>
        <h2 className="text-2xl dark:text-white font-normal" id={`user-${id}`}>
          {name}
        </h2>
        <h3 className="dark:text-white/50 font-light">{subTitle}</h3>
      </header>
      <p
        role="contentinfo"
        aria-label={`${name} is user of codinasion organization`}
        className="mt-5 tracking-wider"
      >
        {message}
      </p>
    </div>
  );
};

export default TestimonialCard;

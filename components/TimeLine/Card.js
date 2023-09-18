import { motion } from "framer-motion";
import Link from "next/link";
import ButtonV2Small from "../buttonv2small/ButtonV2small";
import React from "react";

const Card = ({ data, length, index }) => {
  const animations = {
    card: {
      initial: { opacity: 0, x: -20 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.2, delay: 0.1 * index },
      },
      exit: {
        opacity: 0,
        x: 10,
        transition: { duration: 0.15, delay: 0.04 * index },
      },
    },
  };
  return (
    <>
      <motion.div
        variants={animations.card}
        initial="initial"
        exit="exit"
        animate="animate"
        className="flex -mb-8 sm:-mb-10 flex-row justify-center lg:justify-center items-baseline"
      >
        <div className="rounded-lg bg-EEEEEE p-2">
          {data.subtitle.split(" ")[0]}
        </div>
        <div className={`flex flex-col justify-center items-center`}>
          <span className="rounded-full ring-1 w-3 h-3 ring-offset-darkBluePrimary ring-offset-4 ring-cyanPrimary mx-4 sm:mx-7"></span>
          <span
            className={`${
              index === length - 1 ? "hidden" : "block"
            } border-dashed border-l-2 h-24 my-3 border-cyanPrimary`}
          ></span>
        </div>
        <div
          className={`flex flex-row justify-start items-center rounded-lg bg-EEEEEE p-2 relative bg-cyanPrimary/5 py-3 pl-3 pr-5 w-[30rem] sm:w-[20rem]`}
        >
          <div className="bg-cyanPrimary/90 w-8 sm:w-12 h-8 sm:h-12 rounded-full flex justify-center items-center">
            <i className={`${data.icon} text-lg sm:text-2xl`}></i>
          </div>
          <div className="">
            <div className="text-lg sm:text-xl">
              {data.title}
            </div>

            <div className="flex flex-row items-center">
                <div>
                    {data.subtitle}
                </div>
                <div className="ml-2">
                    {data.link && (
                        // <a target={`${data.link.charAt(0) === "/" ? "" : "_blank"}`}>
                        <a href={data.link} target="_blank" rel="noreferrer">
                            <ButtonV2Small className="px-10 py-[13px]">
                                <p className="text-xs sm:text-sm"> See More!</p>
                            </ButtonV2Small>
                        </a>
                    )}
                </div>

            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;

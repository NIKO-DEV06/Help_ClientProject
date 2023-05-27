"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import star from "@/assets/star.svg";
import { reviews } from "@/helpers/helper";

const Reviews = () => {
  const [width, setWidth] = useState<number>(0);
  const caurousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollWidth = caurousel.current?.scrollWidth;
    const offsetWidth = caurousel.current?.offsetWidth;

    if (scrollWidth !== undefined && offsetWidth !== undefined) {
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);
  return (
    <section className="pt-[4rem] pb-[4rem]">
      <h2 className="text-center text-[#2B4E8C] tracking-wider">Reviews</h2>
      <h1 className="text-center text-[1.5rem] font-semibold">
        Feedback from you
      </h1>
      <motion.div ref={caurousel} className="overflowhidden mt-[3rem]">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width - 20 }}
          className="px-[1.3rem] md:px-[3.5rem] flex gap-[2.5rem] md:gap-[2.5rem] cursor-grab"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} className="flex flex-col">
              <div className="relative bg-white flex flex-col items-center px-[2rem] py-[2rem] shadow-input-shadow w-[21rem] h-[29rem] rounded-2xl">
                <Image
                  src={review.img}
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-full w-[4rem] h-[4rem]"
                />
                <p className="font-[500] mt-[0.5rem]">{review.name}</p>
                <div className="flex gap-[0.3rem]">
                  {Array.from({ length: review.starCount }).map((_, index) => (
                    <Image
                      key={index}
                      src={star}
                      width={17}
                      height={17}
                      alt=""
                      className="rounded-full"
                    />
                  ))}
                </div>
                <p className="opacity-70 mt-[1.5rem] leading-[1.4rem]">
                  {`"${review.testimonial}"`}
                </p>
                <p className="absolute bottom-[2.5rem] mt-[4rem] text-right translate-x-[5rem] font-medium">
                  {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-[2.5rem] flex gap-[0.5rem] justify-center">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="h-[0.6rem] w-[0.6rem] rounded-full border-[1px] border-[#2B4E8C]"
            ></div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Reviews;

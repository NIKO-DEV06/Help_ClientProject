"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { services } from "@/helpers/helper";

const PopularServices = () => {
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
      <h2 className="text-center text-[#2B4E8C] tracking-wider">Popular</h2>
      <h1 className="text-center text-[1.5rem] font-semibold">
        Popular services
      </h1>
      <p className="text-right translate-y-[-3rem] text-[1.5rem] font-semibold translate-x-[4.5rem] text-[#2B4E8C80] scale-[0.6] md:scale-90 md:translate-x-[-1rem]">
        10 options
      </p>
      <motion.div ref={caurousel} className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width - 20 }}
          className="px-[1.3rem] md:px-[3.5rem] flex gap-[2rem] md:gap-[2.5rem] cursor-grab"
        >
          {services.map((service) => (
            <motion.div key={service.id} className="flex flex-col">
              <div className="w-[14rem]">
                <Image
                  src={service.image}
                  height={230}
                  width={230}
                  alt={service.name}
                  className="pointer-events-none"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-[#484848]">{service.name}</p>
                <p>{service.request}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PopularServices;

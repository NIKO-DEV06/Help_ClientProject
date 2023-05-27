"use client";

import right from "@/assets/right-chevron-svgrepo-com.svg";
import Image from "next/image";
import { faq1, faq2 } from "@/helpers/helper";
import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  id: string;
  title: string;
  desc: string;
  isVisible: boolean;
}

const FAQSection = () => {
  const [faq1Items, setFaq1Items] = useState<FAQItem[]>(faq1);
  const [faq2Items, setFaq2Items] = useState<FAQItem[]>(faq2);

  const toggleDescription = (index: number, isFaq1: boolean) => {
    if (isFaq1) {
      const updatedFaq1Items = [...faq1Items];
      updatedFaq1Items[index].isVisible = !updatedFaq1Items[index].isVisible;
      setFaq1Items(updatedFaq1Items);
    } else {
      const updatedFaq2Items = [...faq2Items];
      updatedFaq2Items[index].isVisible = !updatedFaq2Items[index].isVisible;
      setFaq2Items(updatedFaq2Items);
    }
  };

  return (
    <section className="pb-[4rem]">
      <h2 className="text-center text-[#2B4E8C] tracking-wider">Question</h2>
      <h1 className="text-center text-[1.5rem] font-semibold pb-[2rem]">
        Frequently asked questions
      </h1>
      <div className="scale-95 flex flex-col md:flex-row gap-[1rem] md:gap-[2rem] md:scale-[0.85] lg:scale-100 md:justify-center">
        <div className="flex flex-col gap-[1rem] mx-auto md:mx-0">
          {faq1Items.map((faq, index) => (
            <motion.div
              whileTap={{ scale: 0.9 }}
              key={faq.id}
              onClick={() => toggleDescription(index, true)}
              className="cursor-pointer relative bg-white shadow-input-shadow rounded-2xl w-[25rem] md:w-[26rem] "
            >
              <div className="flex px-[1.5rem] py-[1.5rem] items-center justify-between">
                <p className="text-left">{faq.title}</p>
                <Image
                  src={right}
                  alt="right-chevron"
                  width={30}
                  height={30}
                  className="right-[1rem]"
                />
              </div>
              {faq.isVisible && (
                <p className="w-[25rem] text-[0.8rem] text-center px-[2rem] pb-[1.5rem] text-[#00000080] mt-[0.5rem]">
                  {faq.desc}
                </p>
              )}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-[1rem] mx-auto md:mx-0">
          {faq2Items.map((faq, index) => (
            <motion.div
              key={faq.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleDescription(index, false)}
              className="cursor-pointer relative bg-white shadow-input-shadow rounded-2xl w-[25rem] md:w-[26rem] "
            >
              <div className="flex px-[1.5rem] py-[1.5rem] items-center justify-between">
                <p className="text-left">{faq.title}</p>
                <Image
                  src={right}
                  alt="right-chevron"
                  width={30}
                  height={30}
                  className="right-[1rem]"
                />
              </div>
              {faq.isVisible && (
                <p className="w-[25rem] text-[0.8rem] text-center px-[2rem] pb-[1.5rem] text-[#00000080] mt-[0.5rem]">
                  {faq.desc}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

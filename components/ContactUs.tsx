"use client";

import callus from "@/assets/image-PhotoRoom (14) 2.png";
import Image from "next/image";
import phone from "@/assets/phone-svgrepo-com.svg";
import at from "@/assets/at-sign-svgrepo-com.svg";
import profile from "@/assets/profile-1341-svgrepo-com.svg";
import comment from "@/assets/comment-svgrepo-com.svg";
import mail from "@/assets/mail-svgrepo-com.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import "../app/globals.css";

type FormValues = {
  name: string;
  subject: string;
  message: string;
};
const ContactUs = () => {
  const schema = yup.object().shape({
    name: yup.string().trim().required("Name field is required"),
    subject: yup.string().trim().required("Please enter a subject"),
    message: yup.string().trim().required("Please enter a message"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const submitFormHandler = (data: FormValues) => {
    const { name, subject, message } = data;
    window.location.href = `mailto:ayenikoemmanuel06@gmail.com?subject=${subject}&body=Name:%20${name}%0D%0A%0D%0AMessage:%20${message}`;
    reset();
  };

  return (
    <section className="pb-[4rem]">
      <h2 className="text-center text-[#2B4E8C] tracking-wider">Contacts</h2>
      <h1 className="text-center text-[1.5rem] font-semibold pb-[2rem]">
        Contact us
      </h1>
      <div className="bg-white shadow-input-shadow w-auto mx-[2rem] md:mx-[9rem] lg:mx-[10rem] rounded-2xl relative lg:flex md:justify-center md:gap-[5rem] lg:gap-[2rem] lg:py-[2rem]">
        <div>
          <div className="pt-[1.5rem] lg:scale-[1.3] xl:scale-[1.7] xl:translate-y-[2rem]">
            <div className="absolute bottom-0 top-[2.1rem] lg:translat-x-[-10rem] left-0 right-0 mx-auto w-[10rem] h-[10rem] rounded-full bg-[#2B4E8C] z-0"></div>
            <div className="relative z-10">
              <Image
                src={callus}
                width={200}
                height={200}
                alt="call-us"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-[0.5rem] mt-[1.5rem] px-[3rem] lg:mt-[4rem] xl:mt-[8rem] xl:gap-[1rem]">
            <div className="flex gap-[0.5rem] items-center translate-x-[-0.5rem] md:translate-x-0">
              <Image src={phone} width={20} height={20} alt="phone" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="opacity-60 text-sm">+351-965-990-000</p>
              </div>
            </div>
            <div className="flex gap-[0.5rem] items-center">
              <Image src={at} width={20} height={20} alt="mail" />
              <div>
                <p className="font-semibold">Our Mail</p>
                <p className="opacity-60 text-sm">@helpyou@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* INPUT------- */}
        <form
          method="post"
          action="mailto:ayenikoemmanuel06@gmail.com"
          onSubmit={handleSubmit(submitFormHandler)}
          className="flex flex-col mt-[1.5rem] gap-[1rem] pb-[2.5rem]"
        >
          <div className="rounded-xl mx-auto relative">
            <div className="absolute top-[1.2rem] left-[1.5rem] lg:top-[0.9rem]">
              <Image src={profile} width={20} height={20} alt="phone" />
            </div>
            <input
              placeholder="Your Name"
              type="text"
              {...register("name")}
              name="name"
              autoComplete="off"
              className="inputs"
            />
            <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
              {errors.name?.message}
            </p>
          </div>
          <div className="rounded-xl mx-auto relative">
            <div className="absolute top-[1.2rem] left-[1.5rem] lg:top-[0.8rem] lg:scale-110">
              <Image src={mail} width={20} height={20} alt="mail" />
            </div>
            <input
              placeholder="Your Subject"
              type="text"
              {...register("subject")}
              name="subject"
              autoComplete="off"
              className="inputs"
            />
            <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
              {errors.subject?.message}
            </p>
          </div>
          <div className="rounded-xl mx-auto relative">
            <div className="absolute top-[1rem] left-[1.5rem] lg:top-[0.9rem]">
              <Image src={comment} width={20} height={20} alt="mail" />
            </div>
            <textarea
              {...register("message")}
              name="message"
              cols={30}
              rows={10}
              autoComplete="off"
              placeholder="Your Message"
              className={`outline-none shadow-input-shadow
                 h-[11rem] w-[21rem] rounded-xl appearance-none resize-none px-3 py-3 text-[0.95rem] lg:text-[1rem] indent-[3rem] xl:w-[25rem]`}
            />
            <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
              {errors.message?.message}
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-[#2B4E8C] mx-[1rem] p-[0.8rem] rounded-xl text-white font-semibold md:w-[21rem] md:mx-auto hover:bg-[#5b83c8] duration-200 xl:w-[25rem]"
          >
            Send
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

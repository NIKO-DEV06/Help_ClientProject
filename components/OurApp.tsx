import ourApp from "@/assets/ourapp.png";
import appStore from "@/assets/image 1.png";
import playStore from "@/assets/image 2.png";
import Image from "next/image";

const OurApp = () => {
  return (
    <section className="pb-[4rem]">
      <h2 className="text-center text-[#2B4E8C] tracking-wider">Join Us</h2>
      <h1 className="text-center text-[1.5rem] font-semibold pb-[2rem]">
        Our App
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem] lg:gap-[4rem] md:px-[2rem]">
        <div className="mt-[2rem] md:w-[30rem]">
          <Image
            src={ourApp}
            width={400}
            height={400}
            alt="our-app"
            className="md:w-full md:h-full"
          />
        </div>
        <div>
          <div className="px-[2rem] w-[28rem]">
            <h1 className="text-[2.5rem] xl:text-[3.5rem] font-[600] leading-[4rem]">
              Download our <br /> App Now
            </h1>
            <p className="mt-[0.5rem] text-[#00000080]">
              Make your to-do list wherever you are with our mobile app.
            </p>
            <p className="mt-[1rem] text-[#00000080]">
              <span className="font-bold">Help</span> is an easy way to find
              qualified and reliable local Helpers for everything from
              assembling and installing furniture to moving and cleaning
            </p>
            <div className="flex mt-[1.5rem] gap-[1rem]">
              <Image
                src={appStore}
                height={120}
                width={120}
                alt="appstore"
                className="cursor-pointer"
              />
              <Image
                src={playStore}
                height={120}
                width={120}
                alt="playstore"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApp;

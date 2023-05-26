import Image from "next/image";
import appStore from "@/assets/image 1.png";
import playStore from "@/assets/image 2.png";
import star from "@/assets/star.svg";
import gardener from "@/assets/Rectangle 4326.png";
import reschedule from "@/assets/clock.arrow.circlepath.svg";
import person1 from "@/assets/Rectangle 4275.png";
import person2 from "@/assets/Rectangle 4275 (1).png";
import person3 from "@/assets/Rectangle 4390.png";

const HeroSection = () => {
  const heroImages = [
    { id: "1", url: person1 },
    { id: "2", url: person2 },
    { id: "3", url: person3 },
  ];

  return (
    <section className="flex flex-col md:flex-row md:justify-center lg:items-center md:px-[2rem] md:scale-95 lg:scale-90 xl:scale-100">
      <div>
        <div className="px-[1.5rem]">
          <h1 className="text-[3rem] xl:text-[3.5rem] font-[600] leading-[4.5rem]">
            Revolutionizing <br /> Everyday Work
          </h1>
          <p className="mt-[0.5rem]">
            Everyday work is important, but it's also time consuming. We can
            help.
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
          <div className="flex mt-[1.5rem] gap-1 items-center">
            <h1 className="text-[2.5rem] font-[500]">4.8</h1>
            <div className="flex flex-col items-center gap-[0.1rem]">
              <div className="flex gap-[0.2rem]">
                <Image src={star} height={15} width={15} alt="star" />
                <Image src={star} height={15} width={15} alt="star" />
                <Image src={star} height={15} width={15} alt="star" />
                <Image src={star} height={15} width={15} alt="star" />
                <Image src={star} height={15} width={15} alt="star" />
              </div>
              <p className="text-sm opacity-60 italic">990+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
      {/* {------} */}
      <div className="flex pl-[1.5rem] pt-[2rem]">
        <div className="mx-auto lg:flex gap-[1rem]">
          <div className="">
            <div className="bg-[#2B4E8C] rounded-2xl w-[15rem] md:w-[15rem] translate-x-[4rem] lg:translate-x-[9rem]  text-center">
              <p className="text-white font-semibold text-[2rem] md:text-[1.5rem] p-[2rem]">
                +1500 <br />
                <span className="opacity-60">Helpers</span>
              </p>
            </div>
            <div className="bg-[#F0F4FF] md:w-[25rem] rounded-2xl py-[1rem] px-[2rem] mt-[1.5rem] flex flex-col gap-[0.5rem] max-h-[13rem] overflow-scroll shadow-md">
              {heroImages.map((hImage) => (
                <div
                  key={hImage.id}
                  className="flex gap-[1rem] items-center text-[0.8rem]"
                >
                  <Image
                    src={hImage.url}
                    width={50}
                    height={50}
                    alt="person1"
                    className="rounded-2xl w-[4rem] h-[4rem]"
                  />
                  <div>
                    <p className="font-semibold">Angel R.</p>
                    <p>Furniture Assembly</p>
                    <p className="opacity-60">Apr 24 12:30 pm</p>
                    <p className="opacity-60">$44.39/hr</p>
                  </div>
                  <div className="bg-black px-[0.5rem] text-white h-[2rem] flex items-center gap-[0.5rem] rounded-xl">
                    <Image
                      src={reschedule}
                      height={15}
                      width={15}
                      alt="reschedule"
                    />
                    <p>Reschedule</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-[1rem] flex justify-center lg:w-[15rem] xl:w-[20rem] xl:h-[28rem] xl:translate-y-[-3rem]">
            <Image
              src={gardener}
              width={250}
              height={250}
              alt="gardener"
              className="xl:w-full xl:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

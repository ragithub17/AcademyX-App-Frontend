import React from "react";

import FoundingStory from "../assets/Images/FoundingStory.jpg";
import BannerImage1 from "../assets/Images/aboutus1.jpg";
import BannerImage2 from "../assets/Images/aboutus2.jpg";
import BannerImage3 from "../assets/Images/aboutus3.jpg";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="bg-richblack-900">
      <section className="bg-richblack-900">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Revolutionizing Online Learning for a Better Tomorrow with
            <HighlightText text={"Innovative Solutions"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              AcademyX leads the way in online education innovation. We’re
              dedicated to shaping a brighter future with advanced courses,
              emerging technologies, and a thriving learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img
              className="hover:shadow-none hover:scale-95 transition-all duration-200 rounded-lg shadow-[0_0_20px_0] shadow-[#6db4bb]"
              src={BannerImage1}
              alt=""
            />
            <img
              className="hover:shadow-none hover:scale-95 transition-all duration-200 rounded-lg shadow-[0_0_20px_0] shadow-[#6db4bb]"
              src={BannerImage2}
              alt=""
            />
            <img
              className="hover:shadow-none hover:scale-95 transition-all duration-200 rounded-lg shadow-[0_0_20px_0] shadow-[#6db4bb]"
              src={BannerImage3}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="border-b border-blue-500 mx-14">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                <HighlightText text="Our Founding Story" />
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was created with a shared passion for
                transforming education. It started with educators,
                technologists, and lifelong learners united to provide
                accessible, flexible, and high-quality learning in today's
                digital age.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As educators, we experienced the challenges of traditional
                education systems personally. We believed learning shouldn't be
                limited by classroom walls or geography. Our vision was to
                create a platform that bridges these gaps, empowering
                individuals everywhere to reach their full potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="hover:shadow-none hover:scale-95 transition-all duration-200 w-full h-96 rounded-lg shadow-[0_0_20px_0] shadow-[#6db4bb]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between -mt-28">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                <HighlightText text={"Our Vision"}></HighlightText>
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Driven by this vision, we embarked on a journey to revolutionize
                learning. Our dedicated team worked relentlessly to build an
                intuitive e-learning platform that blends advanced technology
                with engaging content, creating a dynamic and interactive
                learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission extends beyond offering online courses. We aim to
                build a thriving community of learners where individuals can
                connect, collaborate, and grow together. By fostering knowledge
                through sharing and dialogue, we create opportunities for
                interaction via forums, live sessions, and networking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-5">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="-mt-4 relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"></div>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default About;

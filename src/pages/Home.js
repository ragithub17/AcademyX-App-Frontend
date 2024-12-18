import { FaArrowRight } from "react-icons/fa";
import Banner from "../assets/Images/banner.mp4";
import Footer from "../components/common/Footer";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import InstructorSection from "../components/core/HomePage/InstructorSection";

function Home() {
  return (
    <div className="bg-richblack-900">
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Heading */}
        <div className="text-center text-4xl font-semibold group mx-auto mt-16">
          Build Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-200">
          Experience the power of learning with our online coding courses,
          featuring flexible schedules, hands-on projects, interactive quizzes,
          and personalized feedback from industry experts.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton linkto={"/signUp"}>Explore</CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-300">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)] rounded-sm"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Boost your
                <HighlightText text={"coding skills"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our expert instructors, with years of industry experience, are here to guide you through your coding journey with passion and dedication, ensuring continuous growth and success."
            }
            ctabtn1={{
              btnText: "Explore More",
              link: "/signUp",
              active: false,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signUp",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Get started with
                <HighlightText text={"coding instantly"} />
              </div>
            }
            subheading={
              "Go ahead and get started. Our hands-on environment allows you to write real code from the very start, enhancing your skills."
            }
            ctabtn1={{
              btnText: "Move On",
              link: "/signUp",
              active: false,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signUp",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-richblack-700 text-richblack-50">
        <div className="h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={false} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Discover More
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;

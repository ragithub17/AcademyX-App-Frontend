import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import Course_Card from "./Course_Card";

const CourseSlider = ({ Courses }) => {
  const courseList = Array.isArray(Courses) ? Courses : [Courses];

  return (
    <>
      {courseList.length > 0 ? (
        <Swiper
          slidesPerView={0}
          spaceBetween={25}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
          }}
          className="max-h-[30rem]"
        >
          {courseList.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-50">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
